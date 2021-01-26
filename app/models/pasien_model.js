module.exports = (sequelize, Sequelize) => {
    const Pasien = sequelize.define("pasien", {
        pasien_id:{
            type: Sequelize.INTEGER(5),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        nama_pasien:{
            type: Sequelize.STRING(35),
            allowNull:false
        },
        jenis_kelamin:{
            type:Sequelize.STRING(6),
            allowNull:false
        },
        tempat_lahir:{
            type: Sequelize.STRING(15),
            allowNull:false
        },
        tanggal_lahir:{
            type: Sequelize.STRING(12),
            allowNull:false
        },
        alamat:{
            type: Sequelize.STRING(30),
            allowNull:false
        },
        no_hp:{
            type: Sequelize.STRING(13),
            allowNull:false
        },
        pekerjaan:{
            type: Sequelize.STRING(20),
            allowNull:false
        },
        riwayat_penyakit_sistemik:{
            type: Sequelize.STRING(50),
            allowNull:true
        },
        info_klinik:{
            type:Sequelize.STRING(10),
            allowNull:true
        },
        alergi_obat:{
            type: Sequelize.STRING(50),
            allowNull:true,
        }
    });
  
    return Pasien;
  };