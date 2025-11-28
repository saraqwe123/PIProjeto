import cpfValidate from "cpf";


function validateCPF(cpf) {
    const valido = cpfValidate.isValid(cpf);
    return valido
}

export class CadastroService {
    constructor(CadastroRepository) {
        this.CadastroRepository = CadastroRepository;
    }

    async getAllClientes() {
        return await this.CadastroRepository.findAll();
    }

    async getClienteById(id) {
        return await this.CadastroRepository.findById(id);
    }

    async createCliente(clienteData) {
        try {
            console.log("SERVICEEEEEEEEEEEEEEEEEEEEE", clienteData)
            if (validateCPF(clienteData.cpf)) return await this.CadastroRepository.create(clienteData);
        } catch (e) {
            console.error('Erro ao inserir Cliente:', e);
            throw e;
        }
    }

    async updateCliente(id, clienteData) {
        try {
            if (validateCPF(clienteData.cpf)) return await this.CadastroRepository.update(id, clienteData);
        } catch (e) {
            throw e
        }
    }

    async deleteCliente(id) {
        return await this.CadastroRepository.remove(id);
    }
}