import {logoutUser} from '../controllers/controler.js';
import { Router } from "express";
const logout = Router();

logout.get("/", logoutUser);

export default logout;