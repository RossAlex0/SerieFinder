// Some data to make the trick

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
  
  const browse = (req, res) => {
    const categorieFilter = 
        req.query.q
        ? categories.filter((category) => category.name.toLowerCase().includes(req.query.q.toLowerCase()))
        : categories;

    res.json(categorieFilter);
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