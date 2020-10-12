module.exports = function(sequelize, Sequelize) {
 
    var ProductTypeGroup = sequelize.define('productTypeGroup', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.STRING,
            allowNull:false,
            unique: true
        },

        sizesFl:{
            type: Sequelize.BOOLEAN,
            allowNull: false
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
 
    return ProductTypeGroup;
 
}