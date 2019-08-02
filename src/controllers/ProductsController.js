import csv from 'csvtojson';

const csvFilePath = 'products.csv';

class ProductsController {
  async index(req, res) {
    const jsonArray = await csv().fromFile(csvFilePath);
    return res.json(jsonArray);
  }
}

export default new ProductsController();