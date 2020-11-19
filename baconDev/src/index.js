const express = require ('express');
const cors = require ('cors');
const routes = require ('./routes')

const app = express();

app.use(cors());
app.use(express.json());//falar para aplicação que estou usando json
app.use(routes);

app.listen(3333);

/** 
 * Tipos de paramentros:
 * 
 * Query Paramns: Parametros nomeados enviados na rota após o simbolo de ?, servem para filtros, paginação // users?name = lolo
 * Route Paramns: paramentros utilizados para indentificar recursos// users/:id
 * Request body: Corpo da requisição, utilizado para criar ou alterar recurso
**/

/**
 * SQL: mySQL, SQLite
 * NoSQL: MongoDB, CouchDB
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */