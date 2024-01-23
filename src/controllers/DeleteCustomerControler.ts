import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteCustomerService } from "../services/DeleteCustomerService"

interface DeleteCustomerControlerProps {
    id: string
}

class DeleteCustomerControler {
    async handle(req: FastifyRequest, reply: FastifyReply) {

        const { id } = req.query as { id: string }
        const customersSerivce = new DeleteCustomerService();

        const customer = await customersSerivce.execute({ id })

        reply.send(customer)
    }
}


export { DeleteCustomerControler }