import {getProductos, postProductos} from '../controllers/controler.js';
import { Router } from "express";
const product = Router();

product.get('/', getProductos)

product.post('/', postProductos)


export default product