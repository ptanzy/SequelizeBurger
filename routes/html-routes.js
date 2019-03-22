var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.redirect("/burgers");
  });

// app.get("/burgers", function(req, res) {
//   // express callback response by calling burger.selectAllBurger
//   res.render("index", { burger_data: burgerData });
// });

};
