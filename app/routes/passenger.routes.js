module.exports = app => {
    const passengers = require("../controllers/passenger.controller.js");

    var router = require("express").Router();

    //Create a new passenger
    router.post("/", passengers.create);

    //Retrieve all passengers
    router.get("/", passengers.findAll);

    //Find specific passenger by id
    router.get("/:id", passengers.findOne);

    app.use('/api/passengers', router);

    
}