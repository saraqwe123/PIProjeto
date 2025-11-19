import path from "path";
import bcrypt from "bcrypt";


export class ContaController {
    constructor(ContaService) {
      this.ContaService = ContaService;
    }
  
    async getAllContas(request, reply) {
      try {
        const Contas = await this.ContaService.getAllContas();
        return reply.code(200).send(Contas);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Contas', error: error.message });
      }
    }
  
    async getContaById(request, reply) {
      const { id } = request.params;
      
      try {
        const Conta = await this.ContaService.getContaById(id);
        if (!Conta) return reply.code(404).send({ message: `Conta com ID ${id} não encontrado.` });
        return reply.code(200).send(Conta);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Conta por ID', error: error.message });
      }
    }
  
    async createConta(request, reply) {
      try {
        const { contaData } = request.params;
        const novaConta = {
          idcliente: contaData.idcliente,
          chavepixcpf: contaData.cpf,
          chavepixemail: contaData.chavepixemail,
          saldo: contaData.saldo,
          chavepixtel: contaData.chavepixtel,
        };
        console.log("LOGGGGGGGGG AQQQQQQQQQQQQQQQQ", novoUsuario)
        const novoConta = await this.ContaService.createConta(novaConta);
        return reply.code(201).send(novoConta);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao criar Conta', error: error.message });
      }
    }
  
    async updateConta(request, reply) {
      const { id } = request.params;
      try {
        const updatedConta = await this.ContaService.updateConta(id, request.body);
        if (!updatedConta) return reply.code(404).send({ message: `Conta com ID ${id} não encontrado para atualização.` });
        return reply.code(200).send(updatedConta);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao atualizar Conta', error: error.message });
      }
    }
  
    async deleteConta(request, reply) {
      const { id } = request.params;
      try {
        const deletedConta = await this.ContaService.deleteConta(id);
        if (!deletedConta) return reply.code(404).send({ message: `Conta com ID ${id} não encontrado para exclusão.` });
        return reply.code(200).send({ message: `Conta com ID ${id} deletado com sucesso.` });
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao deletar Conta', error: error.message });
      }
    }
  }
  