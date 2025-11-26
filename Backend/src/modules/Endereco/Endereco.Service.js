export class EnderecoService {
    constructor(EnderecoRepository) {
        this.EnderecoRepository = EnderecoRepository;
    }

    async getAllEnderecos() {
        return await this.EnderecoRepository.findAll();
    }

    async getEnderecoById(id) {
        return await this.EnderecoRepository.findById(id);
    }

    async createEndereco(enderecoData) {
        try {
            console.log("ENDEREÇOOOOOOOOOOOOOOOOOOOOOOOOOO",enderecoData)
            return await this.EnderecoRepository.create(enderecoData);
        } catch (e) {
            console.error('Erro ao inserirendereco:', e);
            throw e;
        }
    }

    async updateEndereco(id,enderecoData) {
        try {
            if (validateCPF(enderecoData.cpf)) return await this.EnderecoRepository.update(id,enderecoData);
        } catch (e) {
            throw e
        }
    }

    async deleteEndereco(id) {
        return await this.EnderecoRepository.remove(id);
    }
}