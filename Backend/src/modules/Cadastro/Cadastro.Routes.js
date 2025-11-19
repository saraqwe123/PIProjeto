import { CadastroRepository } from "./Cadastro.Repository.js";
import { CadastroService } from "./Cadastro.Service.js";
import { CadastroController } from "./Cadastro.Controller.js";

const cadastroRepository = new CadastroRepository();
const cadastroService = new CadastroService(cadastroRepository);
const cadastroController = new CadastroController(cadastroService);

export async function CadastroRoutes(fastify, options) {
  
  fastify.get('/Clientes', (request, reply) => 
    cadastroController.getAllClientes(request, reply)
  );
  fastify.get('/Clientes/:id', (request, reply) => 
    cadastroController.getClienteById(request, reply)
  );
  fastify.post('/Clientes', (request, reply) => 
    cadastroController.createCliente(request, reply)
  );
  fastify.put('/Clientes/:id', (request, reply) => 
    cadastroController.updateCliente(request, reply)
  );
  fastify.delete('/Clientes/:id', (request, reply) => 
    cadastroController.deleteCliente(request, reply)
  );
}