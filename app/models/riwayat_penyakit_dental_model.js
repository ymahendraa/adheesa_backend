module.exports = (sequelize, Sequelize) => {
    const RiwayatPenyakitDental = sequelize.define("riwayat_penyakit", {
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
          model: 'pasiens',
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
      perawatan:{
        type: Sequelize.STRING(30),
        allowNull:false
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
        type: Sequelize.STRING(12),
        allowNull:false
      }
    });
  
    RiwayatPenyakitDental.associate = (models) =>{
      riwayat_penyakit.belongsTo(models.pasien,{ foreignKey:'pasien_id' });
    }

    return RiwayatPenyakitDental;
  };