// services/UpdateCustomersService.js
import prismaClient from "../prisma";

interface UpdateCustomerProps {
  id: string;
  name: string;
  email: string;
}

class UpdateCustomersService {
  async execute({ id, name, email }: UpdateCustomerProps) {
    if (!id || !name || !email) {
      throw new Error("Preencha todos os campos");
    }

    const updatedCustomer = await prismaClient.customer.update({
      where: { id },
      data: { name, email },
    });

    return updatedCustomer;
  }
}

export { UpdateCustomersService };
