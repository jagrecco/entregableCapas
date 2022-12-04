import {registerUserGet, registerUserPost} from '../controllers/controler.js';
import { Router } from "express";
const register = Router();

register.get('/', registerUserGet)

register.post('/', registerUserPost)

export default register;