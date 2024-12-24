const fp = require("fastify-plugin");
// const todoRepository = require("../repositories/todoRepository");

class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async getAll() {
    return this.todoRepository.getAll();
  }

  async getOne(id) {
    return this.todoRepository.getOne(id);
  }

  async create(todoText) {
    return this.todoRepository.create(todoText);
  }

  async deleteOne(id) {
    return this.todoRepository.deleteOne(id);
  }

  async deleteAll() {
    return this.todoRepository.deleteAll();
  }
}

async function todoService(fastify, options) {
  const { db } = fastify;
  const service = new TodoService(db);
  fastify.decorate("todoService", service);
}

module.exports = fp(todoService);
