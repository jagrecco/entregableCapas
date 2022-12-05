import { config } from 'dotenv';
import mongoose from "mongoose";
import logger from "../loggers/logger.js";

if (process.env.NODE_ENV === 'dev'){
    config()
  }  

const mongoUsuario=process.env.MONGOURI

mongoose
  .connect(mongoUsuario,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    try {
      logger.info(`${mongoUsuario} connectada`)
    } catch (error) {
      logger.error(`Erro al conectar con ${mongoUsuario}:  ${error}`)
    }
  })
  .catch((err) => console.log(err));