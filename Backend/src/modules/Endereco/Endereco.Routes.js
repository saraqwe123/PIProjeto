import { CadastroRepository } from "./Cadastro.Repository.js";
import { CadastroService } from "./Cadastro.Service.js";
import { CadastroController } from "./Cadastro.Controller.js";

const cadastroRepository = new CadastroRepository();
const cadastroService = new CadastroService(cadastroRepository);
const cadastroController = new CadastroController(cadastroService);

export async function CadastroRoutes(fastify, options) {
  
  fastify.get('/Enderecos', (request, reply) => 
    cadastroController.getAllEnderecos(request, reply)
  );
  fastify.get('/Enderecos/:id', (request, reply) => 
    cadastroController.getEnderecoById(request, reply)
  );
  fastify.post('/Enderecos', (request, reply) => 
    cadastroController.createEndereco(request, reply)
  );
  fastify.put('/Enderecos/:id', (request, reply) => 
    cadastroController.updateEndereco(request, reply)
  );
  fastify.delete('/Enderecos/:id', (request, reply) => 
    cadastroController.deleteEndereco(request, reply)
  );
}