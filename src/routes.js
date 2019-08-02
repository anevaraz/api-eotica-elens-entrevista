import { Router } from 'express';

import ProductsController from './controllers/ProductsController'
import ProductIdController from './controllers/ProductIdController'
import AddProductController from './controllers/AddProductController'

const routes = new Router();

routes.get('/produtos', ProductsController.index);

routes.get('/produto/:id', ProductIdController.index);

routes.post('/produto/add', AddProductController.store);

export default routes;
