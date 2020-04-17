const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
    // const {title} =  req.query;

    // const results = title
    // ? repositories.filter(repository => repository.title.includes(title))
    // : repositories;
    
    // return res.json(results);
    return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const {title, techs} =  request.body;
  
  const repository = {
    id: uuid(),
    title, 
    url:'https://github.com/thofurtado/desafio-conceitos-node',
    techs,
    likes:0
  }

  repositories.push(repository);

  return response.json(repositories);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
