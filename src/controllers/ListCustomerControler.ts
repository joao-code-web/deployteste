import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomerServide } from "../services/ListCustomerServide"

class ListCustomerControler {
    async handle(req: FastifyRequest, reply: FastifyReply) {
        const ListCustomerService = new ListCustomerServide();

        const customers = await ListCustomerService.execute();

        reply.send(customers)
    }
}

export { ListCustomerControler }