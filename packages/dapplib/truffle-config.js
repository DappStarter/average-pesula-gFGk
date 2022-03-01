require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note screen purpose install glide equal general'; 
let testAccounts = [
"0xe39bbf4114dcbd2094e6794a74182a0c9b9b78b878525858eb5b8e56a96a3d6d",
"0x4199e207e03534791deeb6081540305a8f4558c2036db05f975d5880cd620246",
"0x2facbf8e2ef4332fb7699dea57c2491c726c5c85b14f62a71cac7dc400f727de",
"0xe72af476d9182985439b7b3f4f52136cbd09031796e5adf3aefd546177f16ab9",
"0x29008ac66518473d3002745c85ca5399dd451d4bc45d513b0919cdd0e06d70ee",
"0xd3682b87e37cdb02bd2b77f2a4a2e14cc2f955b7211476d32374b367028054be",
"0x59962d44f7ed93177e5da0ce797319783f1d4966cf6725a999db18cd77e299af",
"0x4f4215b813a0a1fb67f43f11b19e71cbc4816aa2ef406b27252e7befef910ef0",
"0xa44f59671138f474183187967a5962e7c05a7ca42e7603a2013fbf3c26bcffd3",
"0x29b185c43bd971f50e82e15a04ffdfef9304110f33e1a8030e92582a82d6ed0f"
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
            version: '^0.8.0'
        }
    }
};

