const app = require("./app");
const { PORT } = require("./config/serverConfig");

const fastify = require("fastify")({ logger: true });

fastify.register(app);

fastify.listen({ port: PORT }, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
