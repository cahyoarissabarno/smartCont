const Web3 = require('web3')
const MyContract = require('./build/contracts/Counter2.json')

const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKeys = ["c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"];
// const privateKeyProvider = new PrivateKeyProvider(privateKey, "http://10.9.23.7:8545", {chainId:5454});
const privateKeyProvider = new PrivateKeyProvider({ privateKeys, providerOrUrl: "http://10.9.23.7:8545", chainId: 5454});
// ({ mnemonic, providerOrUrl: 'wss://ropsten.infura.io/ws/v3/.....', chainId: 5454}),


const init = async()=>{
    // const web3 = new Web3('http://10.9.23.7:8545')
    const web3 = new Web3(privateKeyProvider);
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
        console.log('deployedNetwork = ', deployedNetwork.address)
        // console.log('contract = ', await contract.methods.get().call())
        contract.methods.inc().call()
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
    })
    .catch(e => console.log('Wow. Something went wrong: '+ e));
}

init()