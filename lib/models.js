const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');

class Portfolio extends Model {
}

Portfolio.init({
    symbol: {
        type: DataTypes.STRING,
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    price: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.INTEGER

    }
}, {
    sequelize,
    modelName: 'Porfolio',
});

class Wallet extends Model {
}

Wallet.init({
    value: {
        type: DataTypes.STRING,
    }
}, {
    sequelize, 
    modelName: 'Wallet',
});

class User extends Model {

}

User.init({
    name: {
        type: DataTypes.STRING,
    },
    walletId: {
        type: DataTypes.INTEGER,
    }
}, {
    // Other model options go here
    sequelize, 
    modelName: 'User', 
});


sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. Please use only in localhost. I have added a condition that checks for localhost before it runs
 //if(process.env.BASE_URL.match('localhost')){
    // sequelize.sync({force: true});
 //}

module.exports = {
    Portfolio, Wallet, User
};
