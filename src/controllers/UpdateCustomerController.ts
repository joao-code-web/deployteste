// controllers/UpdateCustomerController.ts
import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomersService } from "../services/Customer";

class UpdateCustomerController {
    private updateCustomerService: UpdateCustomersService;

    constructor() {
        this.updateCustomerService = new UpdateCustomersService();
    }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        try {
            const customerId = req.params.id;
            const { name, email } = req.body as { name: string; email: string };

            const updatedCustomer = await this.updateCustomerService.execute({ id: customerId, name, email });

            reply.send(updatedCustomer);
        } catch (error) {
            console.error("Erro ao atualizar cliente:", error);
            reply.status(500).send({ error: "Erro ao atualizar cliente" });
        }
    }
}

export { UpdateCustomerController };
