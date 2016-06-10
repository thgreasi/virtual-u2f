'use strict';

var assert = require('assert');
var u2f = require('u2f');
var VirtualToken = require('../token.js');

describe('Virtual u2f token', function() {

    var appId = "testApp.com";

    var token = null;
    var keyHandle = null;
    var publicKey = null;

    before(function() {
        token = new VirtualToken();
    });

    it('Handles registration requests', function() {

        var req = u2f.requestRegistration(appId);

        var resp = token.HandleRegisterRequest(req);

        var challenge = req.registerRequests[0];

        var result = u2f.checkRegistration(challenge, resp);

        keyHandle = result.keyHandle;
        publicKey = result.publicKey;

        assert(result.successful == true);

    });

    it('Handles signing requests', function() {

        var req = u2f.requestSignature(appId, keyHandle);

        var resp = token.HandleSignRequest(req);

        assert(typeof resp.errorCode == 'undefined');

        var result = u2f.checkSignature(req, resp, publicKey);

        assert(result.successful == true);

    });

});

