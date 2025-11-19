import { ContaRepository } from "./Conta.Repository.js";
import { ContaService } from "./Conta.Service.js";
import { ContaController } from "./Conta.Controller.js";

const contaRepository = new ContaRepository();
const contaService = new ContaService(contaRepository);
const contaController = new ContaController(contaService);

export async function ContaRoutes(fastify, options) {
  
  fastify.get('/Contas', (request, reply) => 
    contaController.getAllContas(request, reply)
  );
  fastify.get('/Contas/:id', (request, reply) => 
    contaController.getContaById(request, reply)
  );
  fastify.post('/Contas/:contaData', (request, reply) => 
    contaController.createConta(request, reply)
  );
  fastify.put('/Contas/:id', (request, reply) => 
    contaController.updateConta(request, reply)
  );
  fastify.delete('/Contas/:id', (request, reply) => 
    contaController.deleteConta(request, reply)
  );
}