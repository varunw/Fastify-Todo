async function getAllTodos(req, res) {
  const { todoService } = this;
  return await todoService.getAll();
}

async function createTodo(req, res) {
  const { todoService } = this;

  return await todoService.create(req.body.todoText);
}

async function getOneTodo(req, res) {
  const { todoService } = this;

  return await todoService.getOneTodo(req.params.id);
}

module.exports = {
  getAllTodos,
  createTodo,
  getOneTodo,
};
