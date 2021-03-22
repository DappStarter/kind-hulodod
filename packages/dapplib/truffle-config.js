require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food mansion renew rural mistake goddess light army gasp'; 
let testAccounts = [
"0xfe8dea0af46f1b810a2534cd251ba26f4a825bae293009d286394b60b6064783",
"0x99bf597c6df01722e7c3fb0accf119b603a87d471e623df4f65f345324759438",
"0x71a71b886d919521956952645d263ff3ea48bb75cb9ab5246231772ec53f48bb",
"0xa9ffe097cdf6ab1031d16877a53a4ff573cc06ddc8f06afbdc9170e737c4d94c",
"0xa7fa81deb4c4a2401cda130a2811f056669f8b6d0f5da09a3c2bb600e98e6072",
"0x25481265335ee754c12dc9915b8a30bfb5be9a84760e30e288e4ce8d2eb880ee",
"0x48fbc4984ee15c36acb2dab80a53078f1f723d99aa2a07d4913e31d5db363f66",
"0x41b0989b5b441e0fda5c2daa693bf4a1f202d00d4bb7a61dd2231e3d662c5a0b",
"0x2457c632c0c678cd3a94b1c901ff69aa65a594bdab2fe49f81e3a137491d9b75",
"0x9872cdb071a1b7cacbbeb8924235502d5421d1853c3d216b5ad533364adcab47"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
