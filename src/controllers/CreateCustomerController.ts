import { FastifyRequest, FastifyReply } from "fastify";

import { CreateCustomersService } from "../services/CreateCustomersService";

class CreateCustomerController {
    async handle(req: FastifyRequest, reply: FastifyReply) {


        const { name, email } = req.body as { name: string, email: string }

        const customersSerivce = new CreateCustomersService();

        const customer = await customersSerivce.execute({ name, email });

        reply.send(customer)
    }
}


export { CreateCustomerController }