const Web3 = require('web3')
const MyContract = require('./build/contracts/Counter2.json')

const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKeys = ["0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"];
// const privateKeyProvider = new PrivateKeyProvider(privateKey, "http://10.9.23.7:8545", {chainId:5454});
const privateKeyProvider = new PrivateKeyProvider({ privateKeys, providerOrUrl: "http://10.9.23.7:8545", chainId: 5454});

const web3 = new Web3('http://10.9.23.7:8545')
// const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://10.9.23.7:6174') )
// const web3 = new Web3(privateKeyProvider);
// const id = await web3.eth.net.getId()
// const deployedNetwork = MyContract.networks[id]
// const contract = new web3.eth.Contract(
//     MyContract.abi,
//     deployedNetwork.address
// )

const printData = async () =>{
    const id = await web3.eth.net.getId()
    const deployedNetwork = MyContract.networks[id]
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    )
    web3.eth.net.isListening()
    .then(async () => {
        const data = await contract.methods.get().call()
        console.log(data)
    })
    .catch(e => console.log('Wow. Something went wrong: '+ e));
}

const callInc = async()=>{
    const id = await web3.eth.net.getId()
    const deployedNetwork = MyContract.networks[id]
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    )
    web3.eth.net.isListening()
    .then(async () => {
        // console.log('is connected')
        var encodedABI = await contract.methods.inc().encodeABI();
        var tx = {
            // from: defaultAddress,
            to: deployedNetwork.address, //contractInstance.options.address,
            gas: 200000,
            data: encodedABI,
        };
        
        web3.eth.accounts.signTransaction(tx, privateKeys[0]).then((res)=>{
            web3.eth.sendSignedTransaction(res.rawTransaction).on('receipt', console.log);
        });
        await printData()
    })
    .catch(e => console.log('Wow. Something went wrong: '+ e));
}

const callDec = async()=>{
    const id = await web3.eth.net.getId()
    const deployedNetwork = MyContract.networks[id]
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    )
    web3.eth.net.isListening()
    .then(async () => {
        // console.log('is connected')
        var encodedABI = await contract.methods.dec().encodeABI();
        var tx = {
            // from: defaultAddress,
            to: deployedNetwork.address, //contractInstance.options.address,
            gas: 200000,
            data: encodedABI,
        };
        
        web3.eth.accounts.signTransaction(tx, privateKeys[0]).then((res)=>{
            web3.eth.sendSignedTransaction(res.rawTransaction).on('receipt', console.log);
        });
        await printData()
    })
    .catch(e => console.log('Wow. Something went wrong: '+ e));
}

const callLog = async()=>{
    const id = await web3.eth.net.getId()
    const deployedNetwork = MyContract.networks[id]
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    )
    web3.eth.net.isListening()
    .then(async () => {
        // console.log('is connected')
        // console.log()
        var options = {
            fromBlock: 0,
            address: deployedNetwork.address,
            topics: [web3.utils.soliditySha3('Data(uint256)')]
        };
        web3.eth.getPastLogs(options).then((results) => {
            // results.map((val)=>{console.log(val.data)})
            for(i=0; i<results.length; i++){
                console.log(web3.utils.hexToNumber(results[i].data))
            }
        }).catch((err) => {
            console.log(err)
        });
    })
    .catch(e => console.log('Wow. Something went wrong: '+ e));
}

// printData()
// callInc()
// callDec()
callLog()

// 26788

