module.exports = app => {
    const datalab = require('../controllers/datalab_controller');

    var router = require("express").Router();
  
    // Create a new Pasien
    router.post("/", datalab.create);
  
    // Retrieve all Pasien
    router.get("/", datalab.findAll);
  
    // Retrieve a single Pasien with id
    router.get("/:data_id", datalab.findOne);
  
    // Update a Pasien with id
    router.put("/:data_id", datalab.update);
  
    // Delete a Pasien with id
    router.delete("/:data_id", datalab.delete);
    
    app.use('/api/datalabs', router);
  };