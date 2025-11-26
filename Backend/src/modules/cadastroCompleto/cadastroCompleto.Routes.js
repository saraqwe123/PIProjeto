import { CadastroCompletoController } from "./CadastroCompleto.Controller.js"
import { CadastroCompletoService } from "./CadastroCompleto.Service.js"

import { CadastroRepository } from "../Cadastro/Cadastro.Repository.js";
import { CadastroService } from "../Cadastro/Cadastro.Service.js";

import { EnderecoRepository } from "../Endereco/Endereco.Repository.js";
import { EnderecoService } from "../Endereco/Endereco.Service.js";

import { ContaRepository } from "../Conta/Conta.Repository.js";
import { ContaService } from "../Conta/Conta.Service.js";

export async function CadastroCompletoRoutes(fastify, options) {

    const cadastroRepository = new CadastroRepository();
    const cadastroService = new CadastroService(cadastroRepository);

    const enderecoRepository = new EnderecoRepository();
    const enderecoService = new EnderecoService(enderecoRepository);

    const contaRepository = new ContaRepository();
    const contaService = new ContaService(contaRepository);

    const cadastroCompletoService = new CadastroCompletoService(
        cadastroService,
        enderecoService,
        contaService
    );

    const cadastroCompletoController = new CadastroCompletoController(
        cadastroCompletoService
    );

    fastify.post("/cadastro-completo", (req, reply) =>
        cadastroCompletoController.cadastrarTudo(req, reply)
    );
}