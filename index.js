#!/usr/bin/env node

var fs 			= require("fs"),
	colors		= require("colors"),
	program		= require("commander"),
	manifest	= require("./package.json"),
	processor	= require("./processor"),
	reporter	 = require("./reporter");

program
	.version(manifest.version)
	.option("-j --jade <path>", 	"Specify a jade template to render")
	.option("-s --sheet <path>", 	"Specify a BAS sheet to check against")
	.option("-f --fixture <path>", 	"Specify a JSON fixture to pass to jade")
	.parse(process.argv);

if (!program.jade) {
	console.error("Please specify a jade file (-j) to test.".red);
	process.exit(1);
}

if (!program.sheet) {
	console.error("Please specify a BAS sheet (-s) to check against.".red);
	process.exit(1);
}

if (!program.fixture) {
	console.error("Please specify a JSON fixture (-f) to pass to jade.".red);
	process.exit(1);
}

try {
	fs.statSync(program.jade);

} catch(e) {
	console.error("Unable to open specified jade file (%s)".red, program.jade);
	process.exit(1);
}

try {
	fs.statSync(program.sheet);

} catch(e) {
	console.error("Unable to open specified BAS sheet (%s)".red, program.sheet);
	process.exit(1);
}

try {
	fs.statSync(program.fixture);

} catch(e) {
	console.error("Unable to open specified JSON fixture (%s)".red, program.fixture);
	process.exit(1);
}

processor(program.jade, program.sheet, program.fixture)
	.on("status", console.error.bind(console, "%s".green))
	.on("testSuiteReady", reporter)
	.on("error", function(err) {
		console.error(
			"Unable to process supplied files due to error:\n".red +
			"%s".dim, err.stack);
		process.exit(1);
	});