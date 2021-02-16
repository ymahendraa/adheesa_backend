module.exports = app => {
    const riwayat = require('../controllers/riwayat_penyakit_controller');

    var router = require("express").Router();
  
    // Create a new Pasien
    router.post("/", riwayat.create);
  
    // Retrieve all Pasien
    router.get("/", riwayat.findAll);
    router.get("/:pasien_id", riwayat.findAllOne);
    router.get("/dpjp/drg.kamil", riwayat.findKamil);
    router.get("/dpjp/drg.ammar", riwayat.findAmmar);
    router.get("/dpjp/drg.resya", riwayat.findResya);

    router.get("/laporan/dpjp/drg.kamil", riwayat.findKamilLaporan);
    router.get("/laporan/dpjp/drg.ammar", riwayat.findAmmarLaporan);
    router.get("/laporan/dpjp/drg.resya", riwayat.findResyaLaporan);
  
    // Retrieve a single Pasien with id
    router.get("/:riwayat_id", riwayat.findOne);
  
    // Update a Pasien with id
    router.put("/:riwayat_id", riwayat.update);
  
    // Delete a Pasien with id
    router.delete("/:riwayat_id", riwayat.delete);
    
    app.use('/api/riwayat', router);
  };