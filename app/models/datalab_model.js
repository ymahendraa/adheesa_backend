module.exports = (sequelize, Sequelize) => {
    const DataLab = sequelize.define("DataLab", {
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
              model: 'Pasien',
              key: 'pasien_id'
            }  
        },
        tanggal:{
            type: Sequelize.STRING(12),
            allowNull:false
        },
        jenis_pekerjaan:{
            type: Sequelize.STRING(30),
            allowNull:false,
        },
        jumlah:{
            type: Sequelize.STRING(30),
            allowNull:false,
        },
        lab:{
            type: Sequelize.STRING(30),
            allowNull:false,
        },
        biaya:{
            type: Sequelize.INTEGER(10),
            allowNull:false
        },
        dpjp:{
            type: Sequelize.STRING(30),
            allowNull:false
        }

    });

    DataLab.associate = (models) =>{
        DataLab.belongsTo(models.Pasien,{ foreignKey:'pasien_id' });
    }
    return DataLab;
}