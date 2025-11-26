export class CadastroCompletoService {
    constructor(CadastroService, EnderecoService, ContaService) {
        this.CadastroService = CadastroService;
        this.EnderecoService = EnderecoService;
        this.ContaService = ContaService;
    }

    async cadastrarTudo(data) {
        const { cliente, endereco, conta } = data;

        const novoCliente = await this.CadastroService.createCliente(cliente);

        const novoEndereco = await this.EnderecoService.createEndereco({
            ...endereco,
            idcliente: novoCliente.id
        });

        const novaConta = await this.ContaService.createConta({
            ...conta,
            idcliente: novoCliente.id,
            chavepixcpf: cliente.cpf
        });

        return {
            cliente: novoCliente,
            endereco: novoEndereco,
            conta: novaConta
        };
    }
}
