import { CaixinhaRepository } from "./Caixinha.Repository.js";
import { CaixinhaService } from "./Caixinha.Service.js";
import { CaixinhaController } from "./Caixinha.Controller.js";

const CaixinhaRepository = new CaixinhaRepository();
const CaixinhaService = new CaixinhaService(CaixinhaRepository);
const CaixinhaController = new CaixinhaController(cadastroService);

export async function CaixinhaRoutes(fastify, options) {
  
  fastify.get('/caixinhas', (request, reply) => 
    CaixinhaController.getAll(request, reply)
  );

  fastify.get('/caixinhas/:id', (request, reply) => 
    CaixinhaController.getById(request, reply)
  );

  fastify.post('/caixinhas', (request, reply) => 
    CaixinhaController.create(request, reply)
  );

  fastify.put('/caixinhas/:id', (request, reply) => 
    CaixinhaController.update(request, reply)
  );

  fastify.delete('/caixinhas/:id', (request, reply) => 
    CaixinhaController.delete(request, reply)
  );
}