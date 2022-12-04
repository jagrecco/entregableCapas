import {apiRandomFork} from '../controllers/controler.js';

import { Router } from "express";

const apiRandom = Router();

apiRandom.get('/', apiRandomFork)

export default apiRandom;