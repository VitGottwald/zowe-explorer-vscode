const crypto = require("crypto-browserify");

// Add the getCurves function
crypto.getCurves = function () {
    // Implement the getCurves function as needed
    return ["secp256k1", "ed25519", "curve25519"];
};

module.exports = crypto;
