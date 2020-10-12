module.exports = function(sequelize, Sequelize) {
 
    var Account = sequelize.define('account', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        email: {
            type: Sequelize.STRING,
            allowNull:true
        },

        password:{
            type: Sequelize.STRING,
            allowNull: true
        },

        accountTypeFk: {
            type:Sequelize.INTEGER,
            allowNull:false
        },
        
        createdDttm: {
            field:'createdDttm',
            type: Sequelize.DATE,
            default: Date.now()
        },
        
        defaultPassword:{
            type:Sequelize.BOOLEAN,
            allowNull:false,
            default:false
        },

        dummyFl:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        },
        
        deleteFl:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        },

        versionNo:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    },{
        timestamps:false
    }
);
 
    return Account;
 
}