# Virtual U2F Token

A virtual U2F token for testing U2F enabled applications.  

Based on [https://github.com/mplatt/virtual-u2f](https://github.com/mplatt/virtual-u2f).  

Updated to comply with the [U2F Javascript Spec](https://fidoalliance.org/specs/fido-u2f-v1.0-nfc-bt-amendment-20150514/fido-u2f-javascript-api.html#dictionary-u2frequest-members).  

[![Build Status](https://travis-ci.org/ryankurte/virtual-u2f.svg)](https://travis-ci.org/ryankurte/virtual-u2f)  

## Usage


### Registration
```
var VirtualToken = require('../token.js');

// Generate Registration request
...

// Handle registration request
var resp = token.HandleRegisterRequest(req);

// Finalize registration
...

```

### Signing / Authentication
```
var VirtualToken = require('../token.js');

// Generate Signing request
...

// Handle registration request
var resp = token.HandleSignatureRequest(req);

// Finalize Signing
...

```

For a worked example running against [ryankurte/u2f](https://github.com/ryankurte/u2f) (my fork of [ashtuchkin/u2f](https://github.com/ashtuchkin/u2f)), check out [test.js](test/test.js).  

------

If you have any questions, comments, or suggestions, feel free to open an issue or a pull request.
