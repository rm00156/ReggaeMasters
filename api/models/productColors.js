module.exports = function(sequelize, Sequelize) {
 
    var ProductColor = sequelize.define('productColor', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        productFk: {
            type: Sequelize.INTEGER,
            allowNull:false
        },

        color1Fk:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        color2Fk:{
            type: Sequelize.INTEGER,
            allowNull: true
        },

        color3Fk:{
            type: Sequelize.INTEGER,
            allowNull: true
        },

        color4Fk:{
            type: Sequelize.INTEGER,
            allowNull: true
        },

        color5Fk:{
            type: Sequelize.INTEGER,
            allowNull: true
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
 
    return ProductColor;
 
}