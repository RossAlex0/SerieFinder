// Some data to make the trick

const tables = require("../../database/tables");

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Declare the actions
  
  const browse = async (req, res) => {
    const categoriesFromDB = await tables.category.readAll();
  
    res.json(categoriesFromDB);
  };

  const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);  
    const categorie = categories.find((category) => category.id === parsedId);
  
    return categorie
    ? res.json(categorie)
    : res.sendStatus(404)
  };
  
  // Export them to import them somewhere else
  
  module.exports = { browse, read };