module.exports = function(sequelize, Sequelize) {
 
    var Product = sequelize.define('product', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        productTypeFk: {
            type: Sequelize.INTEGER,
            allowNull:false
        },
 
        name: {
            type: Sequelize.STRING,
            allowNull:false,
            unique: true
        },

        description:{

            type:Sequelize.STRING,
            allowNull:false
        },

        picturesFk:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        
        sizeQuantityFk:{
            type: Sequelize.INTEGER,
            allowNull: true
        },

        quantity:{
            type: Sequelize.INTEGER,
            allowNull: true
        },

        productColorsFk:{
            type: Sequelize.INTEGER,
            allowNull: true
        },

        bestSellerFl:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        newArrivalFl:{
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
 
    return Product;
 
}