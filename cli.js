'use strict';

var fs = require('fs');
var ArgParse = require('argparse');

var packageInfo = require('./package');

var VU2F = require('./token');

// Setup arguments
var parser = new ArgParse.ArgumentParser({
  version: packageInfo.version,
  description: 'Virtual U2F Token CLI'
});

parser.addArgument(['mode'], {help: 'Operating mode, options are reg or sign'});
parser.addArgument(['input'], {help: 'input file name'});
parser.addArgument(['output'], {help: 'output file name'});
parser.addArgument(['-s', '--store'], {help: 'storage file, defailts to ~/.vu2f', defaultValue: '~/.vu2f'});

var args = parser.parseArgs();

// Load context if available
if(fs.existsSync(args.store)) {
    console.log("Loading context from: " + args.store);
    var keyString = fs.readFileSync(args.store);
    var keys = JSON.parse(keyString);
}

// Read input file
if(fs.existsSync(args.input)) {
    var inputString = fs.readFileSync(args.input);
    var dataIn = JSON.parse(inputString)
} else {
    console.log("Input file: " + args.input + " not found.");
}


var token = new VU2F(keys);

switch(args.mode) {
    case 'reg':
        Register();
        break;
    case 'sign':
        Sign();
        break;
    default:
        console.log("Unrecognised mode argument");
        break;
}

// Write context file
var contextString = JSON.stringify(token.ExportKeys(), null, 4);
fs.writeFileSync(args.store, contextString);


function Register() {
    console.log("Registering key");

    var resp = token.HandleRegisterRequest(dataIn);

    var respString = JSON.stringify(resp, null, 4);

    fs.writeFileSync(args.output, respString);
}

function Sign() {
    console.log("Registering key");

    var resp = token.HandleRegisterRequest(dataIn);

    var respString = JSON.stringify(resp, null, 4);

    fs.writeFileSync(args.output, respString);
}






