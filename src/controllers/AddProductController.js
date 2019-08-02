import fs from 'fs';
import csvWriter from 'csv-write-stream';
import csv from 'csvtojson';

const csvFilePath = 'products.csv';

class AddProductController {
  async store(req, res) {
    const writer = await csvWriter({sendHeaders: false})
    writer.pipe(fs.createWriteStream('products.csv', {flags: 'a'}))

    const jsonArray = await csv().fromFile(csvFilePath);
    
    const igual = await jsonArray.find(element => element.ID == req.body.ID || element.nome == req.body.nome);
    
    if (igual) {
      return res.status(400).json({ error: 'Produto já Cadastrado' });
    }
    writer.write(req.body)
    writer.end()

    return res.status(201).json({ message: 'Cadastrado com Sucesso'})
  }
}

export default new AddProductController();