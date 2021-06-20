const db = require("../models");
const Passenger = db.passengers;
const Op = db.Sequelize.Op;

//Create and save a new passenger
exports.create = (req, res) => {
  // Validate request
  if (!req.body.document_number) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Passenger
  const passenger = {
    document_type: req.body.document_type,
    document_number: req.body.document_number,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
  };

  // Save Passenger in the database
  Passenger.create(passenger)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Passenger."
      });
    });
};

//Retrieve all passengers from the database.
exports.findAll = (req, res) => {
  const document_number = req.query.document_number;
  var condition = document_number ? { document_number: { [Op.like]: `%${document_number}` } } : null;

  Passenger.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while consulting" })
    })

};

//Find a single passenger with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Passenger.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving passenger with id=" + id
      });
    });
};

//Update a passenger data by the id in the request 
exports.update = (req, res) => {
  const id = req.params.id;

  Passenger.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Passenger was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Passenger with id=${id}. Maybe Passenger was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Passenger with id=" + id
      });
    });
};

//Delete a passenger with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Passenger.delete({ where: { id: id } }).then(
    num => {
      if (num == 1) {
        res.send({
          message: "Passenger was DELETED of the database successfully"
        });
      } else {
        res.send({
          message: `Cannot delete passenger with id=${id}`
        });
      }
    }
  ).catch(err => {
    res.status(500).send({
      message: "Could not delete passenger with id = " + id
    });
  });
};

//Delete all the passengers from the database. DANGER!
exports.deleteAll = (req, res) => {
  Passenger.deleteAll()
    .then(num => {
      res.send({
        message: "Deleted ALL passengers from the database"
      })
    }).catch(err => {
      res.status(500).send({
        message: "Could not delete all passengers from the database"
      })
    });

};

//Find all published passengers (future)
exports.findAllPublished = (req, res) => {

};