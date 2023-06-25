if (typeof localStorage === "undefined" || localStorage == null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./storage");
}

const dataService = {
  getAll: (model) => {
    return JSON.parse(localStorage.getItem(model));
  },

  find: (model_name, id) => {
    const prods = dataService.getAll(model_name);

    if (!prods) {
      return null;
    }
    return prods.find((prod) => prod.id == id);
  },
  findBy: () => {},
  create: (model_name, data) => {},
  edit: (model_name, data, id) => {
    // let product = dataService.find(model_name, id);
    // let fillable_fields = ["description", "name"];
    // data.map((key, value) => {
    //   if (fillable_fields.includes(key)) {
    //     product[key] = value;
    //   }
    // });
  },
};

module.exports = dataService;
