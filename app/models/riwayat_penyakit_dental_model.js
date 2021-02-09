module.exports = (sequelize, Sequelize) => {
    const RiwayatPenyakit = sequelize.define("RiwayatPenyakit", {
      riwayat_id:{
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
      unsur_regio:{
        type: Sequelize.STRING(30),
        allowNull:false
      },
      keluhan:{
        type: Sequelize.STRING(20),
        allowNull:false
      },
      tekanan_darah:{
        type:Sequelize.STRING(7),
        allowNull:true
      },
      obat:{
          type:Sequelize.STRING(10),
          allowNull:true
      },
      perawatan:{
        type: Sequelize.STRING(30),
        allowNull:false
      },
      keterangan:{
        type: Sequelize.STRING(150),
        allowNullL:true
      },
      rencana_perawatan:{
        type: Sequelize.STRING(30),
        allowNull:false
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
  
    RiwayatPenyakit.associate = (models) =>{
      RiwayatPenyakit.belongsTo(models.Pasien,{ foreignKey:'pasien_id' });
    }

    return RiwayatPenyakit;
  };