import { CaixinhaRepository } from "./Caixinha.Repository.js";
import { CaixinhaService } from "./Caixinha.Service.js";
import { CaixinhaController } from "./Caixinha.Controller.js";

const caixinhaRepository = new CaixinhaRepository();
const caixinhaService = new CaixinhaService(caixinhaRepository);
const caixinhaController = new CaixinhaController(caixinhaService);

export async function CaixinhaRoutes(fastify, options) {
  
  fastify.get('/caixinhas', (request, reply) => 
    caixinhaController.getAll(request, reply)
  );

  fastify.get('/caixinhas/:id', (request, reply) => 
    caixinhaController.getById(request, reply)
  );

  fastify.post('/caixinhas', (request, reply) => 
    caixinhaController.create(request, reply)
  );

  fastify.put('/caixinhas/:id', (request, reply) => 
    caixinhaController.update(request, reply)
  );

  fastify.delete('/caixinhas/:id', (request, reply) => 
    caixinhaController.delete(request, reply)
  );
}