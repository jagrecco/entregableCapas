import { fork } from 'child_process';
import prodsFake from '../utils/productosFake.js';
import {verficarUsuario, leedata} from '../persistencia/data.js'
import logger from "../loggers/logger.js";
import informacion from "../utils/info.js";

const productos=leedata('./data/prod2.json');


function loginUser(req, res) {
    const { email } = req.body;
    req.session.user = email;
    res.redirect('/productos')
}

function logoutUser(req, res) {
    const usuario=req.session.user
    req.session.destroy((err) => {
      if (!err) res.render('logout', {usuario})
      else {
        logger.error(`Error al cerrar la sesión: ${user}`)
        res.status(500).send("Error")};
    });
}

function registerUserGet(req, res){

    res.render("register");

}

function registerUserPost(req, res){
  
    const { email, username, password } = req.body;
    const query = { "email" : req.body.email };
    verficarUsuario(query);
    
}

function raizProyecto(req, res) {
    res.render('index.html', {productos});
}

function prodTest(req, res) {
        res.render('tablaFake', {prodsFake})
}

function getProductos(req, res){
    
    const usuario=req.session.user
    if (!usuario) {return res.redirect('/')}
    res.render('index', {productos, usuario});
    
}

function postProductos(req, res){

    productos.push(req.body)

}

function apiRandomFork(req, res){

    const forked = fork('./utils/calculoForked.js')
    const cantidad=parseInt(req.query.cant)

    forked.on('message', msg => {
       if (msg == 'listo') {
           forked.send(cantidad)
       } else {
           
           res.send(JSON.parse(msg))
       }
    })

}

function infoEnviroment(req, res) {
    
    res.send(informacion);
  
}

export { raizProyecto, prodTest, getProductos, postProductos, loginUser, logoutUser, apiRandomFork, registerUserGet, registerUserPost, infoEnviroment };