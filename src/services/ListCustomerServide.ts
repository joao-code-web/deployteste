import prismaClient from "../prisma";

class ListCustomerServide {
    async execute() {
        const customers = await prismaClient.customer.findMany();

        return customers
    }
}

export { ListCustomerServide }