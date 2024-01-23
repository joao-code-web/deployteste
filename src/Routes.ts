// routes.ts
import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerControler } from "./controllers/ListCustomerControler";
import { DeleteCustomerControler } from "./controllers/DeleteCustomerControler";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/", async (req: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post("/customer", async (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(req, reply);
  });

  fastify.get("/customer", async (req: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerControler().handle(req, reply);
  });

  fastify.put("/customer/:id", async (req: FastifyRequest, reply: FastifyReply) => {
    return new UpdateCustomerController().handle(req, reply);
  });

  fastify.delete("/customer", async (req: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerControler().handle(req, reply);
  });
}
