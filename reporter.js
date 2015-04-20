var colors = require("colors");

module.exports = function(testSuite) {

	testSuite.on("start", function(url) {
		console.error(
			"\tCommencing BAS test suite");
	});

	testSuite.on("startgroup", function(rule) {
		console.error(
			"\tStarting test group: " + String(rule).yellow);
	});

	testSuite.on("selector", function(selector) {
		console.error(
			"\t\tTesting selector " + String(selector).yellow);
	});

	testSuite.on("assertion", function(assertion) {
		console.error(
			"\t\t\tTesting assertion " + String(assertion).yellow);
	});

	testSuite.on("assertionsuccess", function(assertion) {
		console.error(
			"\t\t\t\t✔  %s".green, assertion);
	});

	testSuite.on("assertionfailed", function(errors,assertion) {
		var indent = "\t\t\t";

		console.error((indent + "\t✘ Assertion failed: " + assertion).red);
		errors.forEach(function(assertionError) {
			console.error(indent + "\t\t" + String(assertionError).red);
		});
	});

	testSuite.on("end", function() {
		printReport(testSuite.errors);

		if (testSuite.errors.length)
			process.exit(testSuite.errors.length);
	});
}

function printReport(errors) {

	console.log(
		"\n\tBAS test suite completed with %s",
			(errors.length ? "errors:".red : "no errors.".green));

	errors.forEach(outputError);
}

function outputError(error) {
	// What's in the returned error:
	//
	// "message":		assertionError.message,
	// "selector":		assertionError.selector,
	// "nodePath":		assertionError.nodePath,
	// "node":			assertionError.node,
	// "annotations":	assertionError.annotations,
	// "subject":		assertionError.subject,
	// "component":		assertionError.component,
	// "actual":		assertionError.actual

	console.error("\n\t\t✘ ".red + String(error.message).red);

	if (error.annotations && error.annotations.length) {
		console.error("\t\t\t" +
			error.annotations
				.slice(0).reverse().join("\n\t\t\t").bold);
	}

	if (error.selector) {
		console.error("\t\t\t\tSelector:     ".dim +
						String(error.selector).yellow);
	}

	if (error.node) {
		console.error("\t\t\t\tNode:         ".dim +
						String(error.node).cyan);
	}

	if (error.nodePath) {
		console.error("\t\t\t\tNode Path:    ".dim +
						String(error.nodePath).yellow);
	}

	if (error.actual) {
		console.error("\t\t\t\tActual value: ".dim +
						String(error.actual));
	}
}

module.exports.printReport = printReport;
module.exports.outputError = outputError;