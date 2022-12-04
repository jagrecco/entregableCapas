import logger from "../loggers/logger.js";
import User from "../models/user.js";
import { promises } from 'fs'

async function verficarUsuario(query){
    User.findOne(query, async (err, user) => {
        if (err) {
          logger.error(`Error al consultar usuario: ${err} `)
          res.status(500).render('errorRegistro');
        };
        if (user) {
          logger.error(`El usuario ya existe ${user}`)
          res.status(500).render('errorRegistro');
        }
        
        if (!user) {
          const newUser = new User({ username, email, password });
          const hashedPassword= await newUser.encryptPassword(password);
          newUser.password=hashedPassword;
          
          await newUser.save();
          res.redirect("/");
        }
      
    })
}

const persiste = async(ruta, data)=>{

    try {
        await promises.writeFile(ruta, JSON.stringify(data, null, 2))
      }
      catch(error){
        logger.error(`Problemas al acceder al archivo ${ruta} ${error}`)
      }
  }
  
  const leedata = async(ruta)=>{
    try {
      return JSON.parse(await promises.readFile(ruta,"utf-8"), null, 2);
    }
    catch (error) {
      logger.error(`Problemas al acceder al archivo ${ruta} ${error}`);
    }
  }
  


export {verficarUsuario, persiste, leedata};