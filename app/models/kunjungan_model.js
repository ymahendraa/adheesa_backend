const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Kunjungan = sequelize.define("kunjungan", {
        kunjungan_id:{
            type : Sequelize.INTEGER(5),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        riwayat_id:{
            type: Sequelize.INTEGER(5),
            allowNull:false,
            references:{
              model: 'riwayat_penyakit',
              key: 'riwayat_id'
            } 
        }
    });
    Kunjungan.associate = (models) =>{
        kunjungan.belongsTo(models.riwayat_penyakit,{ foreignKey:'riwayat_id' });
    }
}