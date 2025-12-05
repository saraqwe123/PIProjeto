import path from "path";
import bcrypt from "bcrypt";
import { log } from "console";


export class TransferenciaController {
    constructor(TransferenciaService) {
      this.TransferenciaService = TransferenciaService;
    }
  
    async getAllTransferencias(request, reply) {
      try {
        const transferencias = await this.TransferenciaService.getAllTransferencias();
        return reply.code(200).send(transferencias);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Transferencias', error: error.message });
      }
    }
  
    async getTransferenciaById(request, reply) {
      const { id } = request.params;
      
      try {
        const transferencia = await this.TransferenciaService.getTransferenciaById(id);
        if (!transferencia) return reply.code(404).send({ message: `Transferencia com ID ${id} não encontrado.` });
        return reply.code(200).send(transferencia);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Transferencia por ID', error: error.message });
      }
    }
  
    async createTransferencia(request, reply) {
      try {
        const { idconta, idcontadestino, valor, datatransf, comentario, chavedestino } = request.body;

        const transferencia = {
          idconta,
          idcontadestino,
          valor,
          datatransf,
          comentario,
          chavedestino,
        };
        console.log("TRANSFERENCIAAAAAAAAA CONTROLLERRRRRRRRRRRRRRR", transferencia)
        const novaTransferencia = await this.TransferenciaService.createTransferencia(transferencia);
        return reply.code(201).send(novaTransferencia);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao criar Transferencia', error: error.message });
      }
    }
  
    async updateTransferencia(request, reply) {
      const { id } = request.params;
      const { login, senha, email, telefone } = request.body
      const saltRounds = 10;
      const senhaHash = await bcrypt.hash(senha, saltRounds);
      const transferenciaUpdate = {
        login: login,
        senha: senhaHash,
        email: email,
        telefone: telefone
      }
      try {
        const updatedTransferencia = await this.TransferenciaService.updateTransferencia(id, transferenciaUpdate);
        if (!updatedTransferencia) return reply.code(404).send({ message: `Transferencia com ID ${id} não encontrado para atualização.` });
        return reply.code(200).send(updatedTransferencia);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao atualizar Transferencia', error: error.message });
      }
    }
  
    async deleteTransferencia(request, reply) {
      const { id } = request.params;
      try {
        const deletedTransferencia = await this.TransferenciaService.deleteTransferencia(id);
        if (!deletedTransferencia) return reply.code(404).send({ message: `Transferencia com ID ${id} não encontrado para exclusão.` });
        return reply.code(200).send({ message: `Transferencia com ID ${id} deletado com sucesso.` });
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao deletar Transferencia', error: error.message });
      }
    }
  }
  