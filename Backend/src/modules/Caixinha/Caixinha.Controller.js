import path from "path";
import bcrypt from "bcrypt";
import { log } from "console";


export class CaixinhaController {
    constructor(CaixinhaService) {
        this.CaixinhaService = CaixinhaService;
    }

    async getAllcaixinhas(request, reply) {
        try {
            const caixinhas = await this.CaixinhaService.getAllcaixinhas();
            return reply.code(200).send(caixinhas);
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao buscar caixinhas', error: error.message });
        }
    }

    async getcaixinhaById(request, reply) {
        const { id } = request.params;

        try {
            const caixinha = await this.CaixinhaService.getcaixinhaById(id);
            if (!caixinha) return reply.code(404).send({ message: `caixinha com ID ${id} não encontrado.` });
            return reply.code(200).send(caixinha);
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao buscar caixinha por ID', error: error.message });
        }
    }

    async createcaixinha(request, reply) {
        try {
            const { idConta, valorInvestido, tipo } = request.body;

            const novaCaixinha = {
                idConta,
                idTipoCaixinha: tipo,
                valorInvestido,
                valorResgatado: 0,
                criadoEm: new Date(),
                valorRendido: 0
            };

            const caixinhaCriada = await this.caixinhaService.createCaixinha(novaCaixinha);
            return reply.code(201).send(caixinhaCriada);
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao criar caixinha', error: error.message });
        }


    }

    async updatecaixinha(request, reply) {
        const { id } = request.params;
        try {
            const updatedcaixinha = await this.CaixinhaService.updatecaixinha(id, request.body);
            if (!updatedcaixinha) return reply.code(404).send({ message: `caixinha com ID ${id} não encontrado para atualização.` });
            return reply.code(200).send(updatedcaixinha);
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao atualizar caixinha', error: error.message });
        }
    }

    async deletecaixinha(request, reply) {
        const { id } = request.params;
        try {
            const deletedcaixinha = await this.CaixinhaService.deletecaixinha(id);
            if (!deletedcaixinha) return reply.code(404).send({ message: `caixinha com ID ${id} não encontrado para exclusão.` });
            return reply.code(200).send({ message: `caixinha com ID ${id} deletado com sucesso.` });
        } catch (error) {
            return reply.code(500).send({ message: 'Erro ao deletar caixinha', error: error.message });
        }
    }
}
