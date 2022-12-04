import {raizProyecto} from '../controllers/controler.js';
import { Router } from "express";
const raiz = Router();

raiz.get("/", raizProyecto);

export default raiz;