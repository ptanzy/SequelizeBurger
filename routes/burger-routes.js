var db = require("../models");

module.exports = function(app) {

  app.get("/burgers", function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      db.Burger.findAll({}).then(function(dbBurger) {
          res.render("index", { burger_data: dbBurger });
      //res.json(dbBurger);
      });
  });

  app.post("/burgers/create", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
      res.redirect("/");
    });
  });

  app.put("/burgers/:id", function(req, res) {
    db.Burger.update(
    {
      devoured: true
    },{
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.sendStatus(200);
    });
  });

};
