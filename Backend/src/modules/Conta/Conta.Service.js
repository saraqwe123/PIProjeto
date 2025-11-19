import cpfValidate from "cpf";


function validateCPF(cpf) {
    const valido = cpfValidate.isValid(cpf);
    return valido
}

export class ContaService {
    constructor(ContaRepository) {
        this.ContaRepository = ContaRepository;
    }

    async getAllContas() {
        return await this.ContaRepository.findAll();
    }

    async getContaById(id) {
        return await this.ContaRepository.findById(id);
    }

    async createConta(ContaData) {
        try {
            console.log("SERVICEEEEEEEEEEEEEEEEEEEEE", ContaData)
            
            if (validateCPF(ContaData.cpf)) return await this.ContaRepository.create(ContaData);
        } catch (e) {
            console.error('Erro ao inserir Conta:', e);
            throw e;
        }
    }

    async updateConta(id, ContaData) {
        try {
            if (validateCPF(ContaData.cpf)) return await this.ContaRepository.update(id, ContaData);
        } catch (e) {
            throw e
        }
    }

    async deleteConta(id) {
        return await this.ContaRepository.remove(id);
    }
}