const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Kunjungan = sequelize.define("Kunjungan", {
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
              model: 'RiwayatPenyakit',
              key: 'riwayat_id'
            } 
        }
    });
    Kunjungan.associate = (models) =>{
        Kunjungan.belongsTo(models.RiwayatPenyakit,{ foreignKey:'riwayat_id' });
    }
}