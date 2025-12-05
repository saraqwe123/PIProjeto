import { TransferenciaRepository } from "./Transferencia.Repository.js";
import { TransferenciaService } from "./Transferencia.Service.js";
import { TransferenciaController } from "./Transferencia.Controller.js";

const transferenciaRepository = new TransferenciaRepository();
const transferenciaService = new TransferenciaService(transferenciaRepository);
const transferenciaController = new TransferenciaController(transferenciaService);

export async function TransferenciaRoutes(fastify, options) {
  
  fastify.get('/Transferencia', (request, reply) => 
    transferenciaController.getAllTransferencias(request, reply)
  );
  fastify.get('/Transferencia/:id', (request, reply) => 
    transferenciaController.getTransferenciaById(request, reply)
  );
  fastify.post('/Transferencia', (request, reply) => 
    transferenciaController.createTransferencia(request, reply)
  );
  fastify.put('/Transferencia/:id', (request, reply) => 
    transferenciaController.updateTransferencia(request, reply)
  );
  fastify.put('/TransferenciaExcluir/:id', (request, reply) => 
    transferenciaController.deleteTransferencia(request, reply)
  );
}