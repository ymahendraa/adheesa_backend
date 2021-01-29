module.exports = (sequelize, Sequelize) => {
    const DataLab = sequelize.define("data_lab", {
        data_id : {
            type: Sequelize.INTEGER(5),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        pasien_id:{
            type: Sequelize.INTEGER(5),
            allowNull:false,
            references:{
              model: 'pasiens',
              key: 'pasien_id'
            }  
        },
        tanggal:{
            type: Sequelize.STRING(12),
            allowNull:false
        },
        jenis_pekerjaan:{
            type: Sequelize.STRING(20),
            allowNull:false,
        },
        jumlah:{
            type: Sequelize.STRING(20),
            allowNull:false,
        },
        lab:{
            type: Sequelize.STRING(20),
            allowNull:false,
        },
        biaya:{
            type: Sequelize.INTEGER(10),
            allowNull:false
        },
        dpjp:{
            type: Sequelize.STRING(12),
            allowNull:false
        }

    });

    DataLab.associate = (models) =>{
        data_lab.belongsTo(models.pasien,{ foreignKey:'pasien_id' });
    }
    return DataLab;
}