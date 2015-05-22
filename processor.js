var EventEmitter = require("events").EventEmitter,
	fs 			 = require("fs"),
	BAS			 = require("bas"),
	jade		 = require("jade"),
	colors		 = require("colors");

function processor(jadeFileName, sheetFileName, fixtureFileName) {
	var events = new EventEmitter();

	process.nextTick(function() {
		events.emit("status", "Compiling Jade...");

		compileJade(jadeFileName, function(err, jade) {
			if (err) return events.emit("error", err);

			events.emit("status", "Loading BAS sheet...");

			loadBASSheet(sheetFileName, function(err, testSuite) {
				if (err) return events.emit("error", err);

				events.emit("status", "Loading Fixture...");

				loadFixture(fixtureFileName, function(err, fixture) {
					if (err) return events.emit("error", err);

					var compiledHTML = jade(fixture);

					events.emit("testSuiteReady", testSuite);
					testSuite.run("about:blank", {}, compiledHTML);
				});
			});
		});
	});

	return events;
};

function compileJade(filename, callback) {
	try {
		callback(null, jade.compileFile(filename));
	} catch(err) {
		callback(err);
	}
}

function loadFixture(filename, callback) {
	try {
		callback(null, require(process.cwd() + "/" + filename));
	} catch(err) {
		callback(err);
	}
}

function loadBASSheet(filename, callback) {
	var testSuite = new BAS();
	testSuite.loadSheet(filename)
		.yep(callback.bind(null, null, testSuite))
		.nope(callback);
}

module.exports = processor;