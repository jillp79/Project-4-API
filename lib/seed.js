const {Wallet} = require('../lib/models');
const {User} = require('../lib/models');

const seedTheDatabase = async () => {
    let currentWallet = await Wallet.findAll({});
    let currentUser = await Wallet.findAll({});

    if(currentWallet.length == 0){
        await Wallet.create({value: 200000});
        await Wallet.create({value: 600000});
        await Wallet.create({value: 800000});
    }

    if(currentUser.length == 0){
        await User.create({name: 'Jill Plansky', walletId:1}); //hard coding 
        await User.create({name: 'Janet McFly', walletId:2});
        await User.create({name: 'Marty McFly', walletId:3});
    }

};

seedTheDatabase()
