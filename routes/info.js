import {infoEnviroment} from '../controllers/controler.js';
import { Router } from "express";

const info = Router();

info.get("/", infoEnviroment);

export default info;