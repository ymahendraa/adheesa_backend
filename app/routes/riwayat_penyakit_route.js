module.exports = app => {
    const riwayats = require('../controllers/riwayat_penyakit_controller');

    var router = require("express").Router();
  
    // Create a new Pasien
    router.post("/", riwayats.create);
  
    // Retrieve all Pasien
    router.get("/:pasien_id", riwayats.findAll);
    router.get("/dpjp/drg.kamil", riwayats.findKamil);
    router.get("/dpjp/drg.ammar", riwayats.findAmmar);
    router.get("/dpjp/drg.resya", riwayats.findResya);
  
    // Retrieve a single Pasien with id
    router.get("/riwayat/:riwayat_id", riwayats.findOne);
  
    // Update a Pasien with id
    router.put("/:riwayat_id", riwayats.update);
  
    // Delete a Pasien with id
    router.delete("/:riwayat_id", riwayats.delete);
    
    app.use('/api/riwayats', router);
  };