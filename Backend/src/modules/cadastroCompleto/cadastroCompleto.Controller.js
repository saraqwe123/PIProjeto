export class CadastroCompletoController{
    constructor(CadastroCompletoService) {
        this.CadastroCompletoService = CadastroCompletoService
    }

    async cadastrarTudo(request, reply) {
        try {
            const resultado = await this.CadastroCompletoService.cadastrarTudo(request.body)

            return reply.code(201).send({
                message: "Cadastro completo concluído",
                ...resultado
            })
        } catch (error) {
            return reply.code(500).send({
                message: "erro ao cadastrar tudo",
                erro: error.message
            })
        }
    }
}

