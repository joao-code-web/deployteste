import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./Routes";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

const start = async () => {
    await app.register(cors); // Registrar o plugin CORS antes de rotas
    await app.register(routes);

    try {
        const PORT = process.env.PORTS || 3000;
        await app.listen(PORT);
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
};

start();
