const { getAllTodos, createTodo, getOneTodo } = require("../../../../controllers/todoController");

async function todoRouter(fastify, options) {
  console.log("Inside Todo Router");
  fastify.get("/", getAllTodos);
  fastify.post("/", createTodo);
  fastify.get("/:id", getOneTodo);
}

module.exports = todoRouter;
