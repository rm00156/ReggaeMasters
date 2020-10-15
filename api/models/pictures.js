module.exports = function(sequelize, Sequelize) {
 
    var Pictures = sequelize.define('pictures', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        path1: {
            type: Sequelize.STRING,
            allowNull:false
        },
 
        path2: {
            type: Sequelize.STRING,
            allowNull:true
        },

        path3: {
            type: Sequelize.STRING,
            allowNull:true
        },
 
        path4: {
            type: Sequelize.STRING,
            allowNull:true
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
 
    return Pictures;
 
}