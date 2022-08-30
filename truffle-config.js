
// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKeys = ["c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"];
const privateKeyProvider = new PrivateKeyProvider(privateKeys, "http://10.9.23.7:8545");
// const privateKeyProvider = new PrivateKeyProvider(privateKeys, "http://10.9.23.7:50051");
// const privateKeyProvider = new PrivateKeyProvider({ privateKeys, providerOrUrl: "http://10.9.23.7:8545", chainId: 5454});
// ({ mnemonic, providerOrUrl: 'wss://ropsten.infura.io/ws/v3/.....', chainId: 5454}),

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Using hyperledger Besu
    besu: {
      provider: privateKeyProvider,
      network_id: "*" //5758
      // chainId: "*",
      // gas: "0x1ffffffffffffe",           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 0  // 20 gwei (in wei) (default: 100 gwei)
    }
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    //
    // An additional network, but with some advanced options…
    // advanced: {
    //   port: 8777,             // Custom port
    //   network_id: 1342,       // Custom network
    //   gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    //   gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    //   from: <address>,        // Account to send transactions from (default: accounts[0])
    //   websocket: true         // Enable EventEmitter interface for web3 (default: false)
    // },
    //
    // Useful for deploying to a public network.
    // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
    // ropsten: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    //   network_id: 3,       // Ropsten's id
    //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
    //   confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    //
    // Useful for private networks
    // private: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    //   network_id: 2111,   // This network is yours, in the cloud.
    //   production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11",      // 0.8.15 Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }

  // {
  //   "config" : {
  //     "chainId" : 5758,
  //     "contractSizeLimit" : 2147483647,
  //     "muirglacierblock" : 0,
  //     "ibft2" : {
  //       "blockperiodseconds" : 2,
  //       "epochlength" : 30000,
  //       "requesttimeoutseconds" : 4
  //     }
  //   },
  //   "nonce" : "0x0",
  //   "timestamp" : "0x61ad4470",
  //   "gasLimit" : "0x1fffffffffffff",
  //   "difficulty" : "0x1",
  //   "mixHash" : "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",
  //   "coinbase" : "0x0000000000000000000000000000000000000000",
  //   "alloc" : { },
  //   "extraData" : "0xf87ea00000000000000000000000000000000000000000000000000000000000000000f85494fd1dad14be4515920bef869c4251a1bebce64bd29440275e0df5ddb80a462f2970cde38bf93ce7ffac94762f7b23b762fff436f88b5470a1788b3bcf42be9418d067665290a604fc59fa569f1fa359568b3797808400000000c0"
  // }

  // data-path="/home/sysadmin/privateNetwork/data"
  // genesis-file="/home/sysadmin/privateNetwork/genesis.json"
  // network-id="5758"
  // bootnodes=["enode://2232f5be1303386aa5be75ee8bc8d85a978c6f0fed444454b132cdea3a446d0699b49794b93615b8251e408480deec505a13cf738b403bf81710b80b2eaa4d5e@10.9.23.7:50050"]
  // min-gas-price=0
  
  // p2p-host="10.9.23.7"
  // p2p-port="50050"
  
  // rpc-http-enabled=true
  // rpc-http-api=["ETH","NET","IBFT","TXPOOL","TRACE"]
  // rpc-http-port="50051"
  // rpc-http-host="0.0.0.0"
  // host-allowlist=["10.9.23.7"]
  // rpc-http-cors-origins=["all"]
  
  // metrics-enabled=true
  // metrics-host="0.0.0.0"
  // metrics-port="50052"
  // metrics-protocol="PROMETHEUS"
  

//   data-path="data"
// genesis-file="../genesis.json"
// rpc-http-enabled=true
// rpc-ws-enabled=true
// rpc-http-api=["ETH","NET","IBFT","WEB3"]
// rpc-ws-api=["ETH","NET","IBFT","WEB3"]
// rpc-http-cors-origins=["all"]
// host-allowlist=["*"]
// p2p-host="10.9.23.7"
// p2p-interface="10.9.23.7"
// rpc-http-port="8545"
// rpc-ws-port="6174"
// rpc-http-host="0.0.0.0"
// rpc-ws-host="0.0.0.0"
// min-gas-price=0

 
 
  // network-id="5758"
  // bootnodes=["enode://2232f5be1303386aa5be75ee8bc8d85a978c6f0fed444454b132cdea3a446d0699b49794b93615b8251e408480deec505a13cf738b403bf81710b80b2eaa4d5e@10.9.23.7:50050"]

  
  
  // p2p-port="50050"
  
  // rpc-http-enabled=true

  
  
  // host-allowlist=["10.9.23.7"]
  
  
  // metrics-enabled=true
  // metrics-host="0.0.0.0"
  // metrics-port="50052"
  // metrics-protocol="PROMETHEUS"

// data-path="data"  // data-path="/home/sysadmin/privateNetwork/data"
// genesis-file="../genesis.json"  // genesis-file="/home/sysadmin/privateNetwork/genesis.json"
// host-allowlist=["*"] // host-allowlist=["10.9.23.7"]
// rpc-http-enabled=true  // rpc-http-enabled=true
// rpc-http-api=["ETH","NET","IBFT","WEB3"]   // rpc-http-api=["ETH","NET","IBFT","TXPOOL","TRACE"]
// rpc-http-cors-origins=["all"] // rpc-http-cors-origins=["all"]
// rpc-http-port="8545" // rpc-http-port="50051"
// rpc-http-host="0.0.0.0" // rpc-http-host="0.0.0.0"
// p2p-host="10.9.23.7" // p2p-host="10.9.23.7"
// p2p-interface="10.9.23.7"
// min-gas-price=0   // min-gas-price=0

// data-path="data"  
// genesis-file="../genesis.json"  
// host-allowlist=["10.9.23.7"]
// rpc-http-enabled=true  
// rpc-http-api=["ETH","NET","IBFT","TXPOOL","TRACE"]
// rpc-http-cors-origins=["all"] 
// rpc-http-port="8545" 
// rpc-http-host="0.0.0.0" 
// p2p-host="10.9.23.7" 
// p2p-interface="10.9.23.7"
// min-gas-price=0   
// network-id="5454"

// p2p-port="50050"
// rpc-http-enabled=true
// host-allowlist=["10.9.23.7"]
// metrics-enabled=true
// metrics-host="0.0.0.0"
// metrics-port="50052"
// metrics-protocol="PROMETHEUS"

};
