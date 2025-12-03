import { EnderecoRepository } from "./Endereco.Repository.js";
import { EnderecoService } from "./Endereco.Service.js";
import { EnderecoController } from "./Endereco.Controller.js";

const enderecoRepository = new EnderecoRepository();
const enderecoService = new EnderecoService(enderecoRepository);
const enderecoController = new EnderecoController(enderecoService);

export async function EnderecoRoutes(fastify, options) {
  
  fastify.get('/Enderecos', (request, reply) => 
    enderecoController.getAllEnderecos(request, reply)
  );
  fastify.get('/Enderecos/:id', (request, reply) => 
    enderecoController.getEnderecoById(request, reply)
  );
  fastify.post('/Enderecos', (request, reply) => 
    enderecoController.createEndereco(request, reply)
  );
  fastify.put('/Enderecos/:id', (request, reply) => 
    enderecoController.updateEndereco(request, reply)
  );
  fastify.put('/EnderecosExcluir/:id', (request, reply) => 
    enderecoController.deleteEndereco(request, reply)
  );
}