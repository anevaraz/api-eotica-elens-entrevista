import csv from 'csvtojson';

const csvFilePath = 'products.csv';

class ProductIdController {
  async index(req, res) {
    const jsonArray = await csv().fromFile(csvFilePath);
    const produto = await jsonArray.find(element => element.ID == req.params.id);
    if(!produto){
      return res.status(400).json({error: 'Id Inválido'})
    }
    return res.status(200).json(produto)
  }
}

export default new ProductIdController();