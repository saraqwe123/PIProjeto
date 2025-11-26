import path from "path";
import bcrypt from "bcrypt";


export class EnderecoController {
    constructor(EnderecoService) {
      this.EnderecoService = EnderecoService;
    }
  
    async getAllEnderecos(request, reply) {
      try {
        const Enderecos = await this.EnderecoService.getAllEnderecos();
        return reply.code(200).send(Enderecos);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Enderecos', error: error.message });
      }
    }
  
    async getEnderecoById(request, reply) {
      const { id } = request.params;
      
      try {
        const Endereco = await this.EnderecoService.getEnderecoById(id);
        if (!Endereco) return reply.code(404).send({ message: `Endereco com ID ${id} não encontrado.` });
        return reply.code(200).send(Endereco);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Endereco por ID', error: error.message });
      }
    }
  
    async createEndereco(request, reply) {
      try {
        const { rua, cep, numeroCasa, complemento, bairro, estado, cidade } = request.body;
        const endereco = {
          rua: rua,
          cep: cep,
          numerocasa: numeroCasa,
          complemento: complemento,
          bairro: bairro,
          estado: estado,
          cidade: cidade,
        };
        const novoEndereco = await this.EnderecoService.createEndereco(endereco);
        return reply.code(201).send(novoEndereco);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao criar Endereco', error: error.message });
      }
    }
  
    async updateEndereco(request, reply) {
      const { id } = request.params;
      try {
        const updatedEndereco = await this.EnderecoService.updateEndereco(id, request.body);
        if (!updatedEndereco) return reply.code(404).send({ message: `Endereco com ID ${id} não encontrado para atualização.` });
        return reply.code(200).send(updatedEndereco);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao atualizar Endereco', error: error.message });
      }
    }
  
    async deleteEndereco(request, reply) {
      const { id } = request.params;
      try {
        const deletedEndereco = await this.EnderecoService.deleteEndereco(id);
        if (!deletedEndereco) return reply.code(404).send({ message: `Endereco com ID ${id} não encontrado para exclusão.` });
        return reply.code(200).send({ message: `Endereco com ID ${id} deletado com sucesso.` });
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao deletar Endereco', error: error.message });
      }
    }
  }
  