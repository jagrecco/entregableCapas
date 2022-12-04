import {prodTest} from '../controllers/controler.js';
import { Router } from "express";
const productosTest = Router();

productosTest.get('/', prodTest);

export default productosTest;