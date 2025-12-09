import path from "path";
import bcrypt from "bcrypt";
import { log } from "console";


export class CaixinhaController {
    constructor(CaixinhaService) {
        this.CaixinhaService = CaixinhaService;
    }

    async getAllcaixinhas(request, reply) {
        try {
            const caixinhas = await this.CaixinhaService.getAll();
            return reply.code(200).send(caixinhas);
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao buscar caixinhas', error: error.message });
        }
    }

    async getcaixinhaById(request, reply) {
        const { id } = request.params;

        try {
            const caixinha = await this.CaixinhaService.getById(id);
            if (!caixinha) return reply.code(404).send({ message: `caixinha com ID ${id} não encontrado.` });
            return reply.code(200).send(caixinha);
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao buscar caixinha por ID', error: error.message });
        }
    }

    async create(request, reply) {
        try {
            const {caixinhaData } = request.body;

        const novaCaixinha = {
            idconta: caixinhaData.idConta,
            idtipocaixinha: caixinhaData.idTipoCaixinha,
            valorinvestido: caixinhaData.valorInvestido,
            valorresgatado: 0,
            valorrendido: 0,
            datacriacao: new Date()
        };


            const caixinhaCriada = await this.CaixinhaService.createcaixinha(novaCaixinha);
            return reply.code(201).send(caixinhaCriada);
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao criar caixinha', error: error.message });
        }


    }

    async updatecaixinha(request, reply) {
        const { id } = request.params;
        try {
            const updatedcaixinha = await this.CaixinhaService.update(id, request.body);
            if (!updatedcaixinha) return reply.code(404).send({ message: `caixinha com ID ${id} não encontrado para atualização.` });
            return reply.code(200).send(updatedcaixinha);
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao atualizar caixinha', error: error.message });
        }
    }

    async deletecaixinha(request, reply) {
        const { id } = request.params;
        try {
            const deletedcaixinha = await this.CaixinhaService.delete(id);
            if (!deletedcaixinha) return reply.code(404).send({ message: `caixinha com ID ${id} não encontrado para exclusão.` });
            return reply.code(200).send({ message: `caixinha com ID ${id} deletado com sucesso.` });
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao deletar caixinha', error: error.message });
        }
    }
}
