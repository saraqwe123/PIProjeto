export async function CadastroCompletoRoutes(fastify, options, {
    CadastroCompletoController
}) {
    fastify.post('/cadastroCompleto', (req, reply) =>
        CadastroCompletoController.cadastrarTudo(req, reply)
    )
}