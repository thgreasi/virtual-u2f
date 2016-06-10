'use strict';

var assert = require('assert');
var u2f = require('u2f');
var VirtualToken = require('../token.js');

describe('Virtual u2f token', function() {

    var appId = "testApp.com";

    var token = null;

    before(function() {
        token = new VirtualToken();
    });

    it('Handles registration requests', function() {

        var req = u2f.requestRegistration(appId);

        console.log(req);

        var resp = token.HandleRegisterRequest(req);

        console.log(new Buffer(resp.clientData, 'base64').toString('utf8'));

        var result = u2f.checkRegistration(req, resp);

        console.log(result);

        assert(result.successful == true);

    });

});

