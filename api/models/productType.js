module.exports = function(sequelize, Sequelize) {
 
    var ProductType = sequelize.define('productType', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        productTypeGroupFk: {
            type: Sequelize.INTEGER,
            allowNull:false
        },

        name:{
            type: Sequelize.STRING,
            allowNull: false,
            unique:true
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
 
    return ProductType;
 
}