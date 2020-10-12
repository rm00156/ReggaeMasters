module.exports = function(sequelize, Sequelize) {
 
    var Color = sequelize.define('color', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        color: {
            type: Sequelize.INTEGER,
            allowNull:false
        },
 
        rgb: {
            type: Sequelize.STRING,
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
 
    return Color;
 
}