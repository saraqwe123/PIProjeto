import fastify from "fastify";
import multipart from "@fastify/multipart";
import cors from "@fastify/cors";
import { CadastroRoutes } from "./modules/Cadastro/Cadastro.Routes.js"; 
import { EnderecoRoutes } from "./modules/Endereco/Endereco.Routes.js";
import  { enviarEmail } from './infra/email.js';
// import { CadastroCompletoRoutes } from "./modules/cadastroCompleto/cadastroCompleto.Routes.js";
import 'dotenv/config';
import { join } from 'path';


import dotenv from 'dotenv'
import { ContaRoutes } from "./modules/Conta/Conta.Routes.js";
dotenv.config()

const server = fastify({
  logger: true
});


server.register(multipart, {
  attachFieldsToBody: true
});


const port = process.env.PORT || 3001;

await server.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});
await server.register(EnderecoRoutes); 
await server.register(CadastroRoutes); 
await server.register(ContaRoutes); 
// await server.register(CadastroCompletoRoutes); 

server.get("/", async (request, reply) => {
  return reply.send("Servidor on");
});

server.post("/enviarCaixinhaEmail", async (request, reply) => {
  const { email } = request.body;

  const assunto = "Nova Caixinha Criada!";
  const mensagem = `Você acabou de criar uma nova caixinha`;


  try {
    await enviarEmail(email, assunto, mensagem);
    reply.status(200).send({ sucesso: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    reply.status(500).send({ sucesso: false, erro: error.message });
  }
});


server.listen({ port, host: '0.0.0.0' }).then(() => {
  console.log("Servidor executando na porta", port);  
}).catch((error) => {
  console.error("Erro ao iniciar o servidor:", error);
  process.exit(1);
});