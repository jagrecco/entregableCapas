import logger from "../loggers/logger.js";
import { leedata, persiste } from '../persistencia/data.js'

let productos=[]
let mensajes=[]

leedata('./data/prod2.json').then((result) => {productos=result})
leedata('./data/mensajes.json').then((result) => {mensajes=result})

function chat(socket) {

    logger.info(`¡Nuevo cliente conectado!`)
    socket.emit("mensajes", mensajes);
    socket.emit("productos", productos);
  
    socket.on("mensaje", (data) => {
      try {
        mensajes.push(data)
        persiste('./data/mensajes.json', mensajes)
        socket.emit("mensajes", mensajes);
      } catch (error) {
        logger.error(`ERROR AL INTENTAR ENVIAR CHAT: ${data}:  ${error} `)
      }
    });
  
    socket.on("producto", (prod) => {
      try {
        productos.push(prod)
        socket.emit("productos", productos);
      } catch (error) {
        logger.error(`ERROR AL INTENTAR ENVIAR PRODUCTO: ${prod}:  ${error} `)
      }
  
    });
  
  }

export {chat}