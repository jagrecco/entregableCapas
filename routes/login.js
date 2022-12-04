import {loginUser} from '../controllers/controler.js';
import { Router } from "express";
const login = Router();

import passport from "passport";

login.post("/", passport.authenticate('local', { failureRedirect: "errorLogin.html"}), loginUser);

export default login;