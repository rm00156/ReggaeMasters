module.exports = function(sequelize, Sequelize) {
 
    var IdGenerator = sequelize.define('idGenerator', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        entity: {
            type: Sequelize.STRING,
            allowNull:false
        },
 
        nextId: {
            type: Sequelize.INTEGER,
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
 
    return IdGenerator;
 
}