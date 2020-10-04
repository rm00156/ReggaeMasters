module.exports = function(sequelize, Sequelize) {
 
    var Account = sequelize.define('account', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull:false,
            unique: true
        },

        password:{
            type: Sequelize.STRING,
            allowNull: false
        },

        name:{
            type: Sequelize.STRING,
            allowNull: true
        },

        accountTypeFk: {
            type:Sequelize.INTEGER,
            allowNull:false
        },
        telephoneNumber:{
            type:Sequelize.STRING,
            allowNull:true
        },
        additionalInfo:{
            type:Sequelize.STRING,
            allowNull:true
        },
        createdAt: {
            field:'created_at',
            type: Sequelize.DATE,
            default: Date.now()
        },
        
        defaultPassword:{
            type:Sequelize.BOOLEAN,
            allowNull:false,
            default:false
        },
        firstLoginFl:{
            type:Sequelize.BOOLEAN,
            allowNull:false,
            default:false
        }
        
    }
);
 
    return Account;
 
}