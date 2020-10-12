module.exports = function(sequelize, Sequelize) {
 
    var CookiePermission = sequelize.define('cookiePermission', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        accountFk: {
            type: Sequelize.INTEGER,
            allowNull:false
        },
 
        permissionFl: {
            type: Sequelize.BOOLEAN,
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
 
    return CookiePermission;
 
}