const Web3 = require('web3')
const MyContract = require('./build/contracts/Counter2.json')

const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKeys = ["0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"];
// const privateKeyProvider = new PrivateKeyProvider(privateKey, "http://10.9.23.7:8545", {chainId:5454});
const privateKeyProvider = new PrivateKeyProvider({ privateKeys, providerOrUrl: "http://10.9.23.7:8545", chainId: 5454});
// ({ mnemonic, providerOrUrl: 'wss://ropsten.infura.io/ws/v3/.....', chainId: 5454}),


const init = async()=>{
    // const web3 = new Web3('http://10.9.23.7:8545')
    const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://10.9.23.7:6174') )
    // const web3 = new Web3(privateKeyProvider);
    const id = await web3.eth.net.getId()
    // console.log('id = ', id)
    const deployedNetwork = MyContract.networks[id]
    // console.log('deployedNetwork = ', deployedNetwork)
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    )
    // console.log('contract = ', contract)
    
    // const result = await contract.methods.getCount().call()
    // console.log(result)

    // contract.methods.getCount().call()
    // .then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // });

    web3.eth.net.isListening()
    .then(async () => {
        console.log('is connected')
        // console.log('deployedNetwork = ', deployedNetwork.address)
        // // console.log('contract = ', await contract.methods.get().call())
        // contract.methods.inc().call()
        //     .then((result) => {
        //         console.log(result)
        //     }).catch((err) => {
        //         console.log(err)
        //     });
    })
    .catch(e => console.log('Wow. Something went wrong: '+ e));
}

init()

// SimpleStorage.deployed().then( function(instance) { return instance.set.call( web3.eth.accounts[0] ) }).then(function(balance) { console.log(balance) })
// SimpleStorage.deployed().then( function(instance) { return instance.get.call({ from: '0xf25186B5081Ff5cE73482AD761DB0eB0d25abfBF', to: null, gasPrice: '0', gasLimit: '30000'}) })
// SimpleStorage.deployed().then( function(instance) { return instance.get.call({ from: '0xf17f52151EbEF6C7334FAD080c5704D77216b732', to: null, gasPrice: '0', gasLimit: '30000'}) })
// SimpleStorage.deployed().then( function(instance) { return instance.get.call( accounts[0] ) }).then(function(value) { console.log(value) })
// {0xf25186B5081Ff5cE73482AD761DB0eB0d25abfBF
//0x627306090abaB3A6e1400e9345bC60c78a8BEf57
//     nonce: '0x0',
//     from: '0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73',
//     to: null,
//     value: '0x00',
//     data: '0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100c3565b610075565b005b61005f61007f565b60405161006c91906100ff565b60405180910390f35b8060008190555050565b60008054905090565b600080fd5b6000819050919050565b6100a08161008d565b81146100ab57600080fd5b50565b6000813590506100bd81610097565b92915050565b6000602082840312156100d9576100d8610088565b5b60006100e7848285016100ae565b91505092915050565b6100f98161008d565b82525050565b600060208201905061011460008301846100f0565b9291505056fea2646970667358221220970ff25248e53ebd71a8f8d3845612261e26e9dc1b34764cfff8956f46e2bdcb64736f6c63430008100033000000000000000000000000000000000000000000000000000000000000002F',
//     gasPrice: '0x0',
//     gasLimit: '0x24A22'
//   }


// data-path="data"
// genesis-file="../genesis.json"
// rpc-http-enabled=true
// rpc-ws-enabled=false
// rpc-http-api=["ETH","NET","IBFT","WEB3"]
// rpc-ws-api=["ETH","NET","IBFT","WEB3"]
// host-allowlist=["10.9.23.7","10.9.23.8","10.9.23.9","10.9.23.10"]
// rpc-http-cors-origins=["all"]
// p2p-host="10.9.23.7"
// rpc-http-port="8545"
// rpc-ws-port="6174"
// p2p-interface="10.9.23.7"
// rpc-http-host="10.9.23.7"
// rpc-ws-host="10.9.23.7"

// "alloc" : {
//     "fe3b557e8fb62b89f4916b721be55ceb828dbd73" : {
//       "privateKey" : "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd154>
//       "comment" : "private key and this comment are ignored.  In a real chain>
//       "balance" : "0xad78ebc5ac6200000"
//     },
//     "627306090abaB3A6e1400e9345bC60c78a8BEf57" : {
//       "privateKey" : "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a>
//       "comment" : "private key and this comment are ignored.  In a real chain>
//       "balance" : "90000000000000000000000"
//     },
//     "f17f52151EbEF6C7334FAD080c5704D77216b732" : {
//       "privateKey" : "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94>
//       "comment" : "private key and this comment are ignored.  In a real chain>
//       "balance" : "90000000000000000000000"
//     }
//   },
