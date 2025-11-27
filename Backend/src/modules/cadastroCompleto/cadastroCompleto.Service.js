export class CadastroCompletoService {
    constructor(CadastroService, EnderecoService, ContaService) {
        this.CadastroService = CadastroService;
        this.EnderecoService = EnderecoService;
        this.ContaService = ContaService;
    }

    async cadastrarTudo(data) {
        const { cliente, endereco, conta } = data;

        const novoEndereco = await this.EnderecoService.createEndereco(endereco);

        const novoCliente = await this.CadastroService.createCliente({
            ...cliente,
            idendereco: novoEndereco.id
        });

        const novaConta = await this.ContaService.createConta({
            ...conta,
            idcliente: novoCliente.id,
        });

        return {
            cliente: novoCliente,
            endereco: novoEndereco,
            conta: novaConta
        };
    }
}
