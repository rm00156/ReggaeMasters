module.exports = function(sequelize, Sequelize) {
 
    var SizeQuantity = sequelize.define('sizeQuantity', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        productFk: {
            type: Sequelize.INTEGER,
            allowNull:false
        },

        sQuantity:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        mQuantity:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        xlQuantity:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        xxlQuantity:{
            type: Sequelize.INTEGER,
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
 
    return SizeQuantity;
 
}