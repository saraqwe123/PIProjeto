
export class CaixinhaService {
    constructor(CaixinhaRepository) {
        this.CaixinhaRepository = CaixinhaRepository;
    }

    async getAllcaixinhas() {
        return await this.CaixinhaRepository.findAll();
    }

    async getcaixinhaById(id) {
        return await this.CaixinhaRepository.findById(id);
    }

    async createcaixinha(caixinhaData) {
        try {
            // console.log("SERVICEEEEEEEEEEEEEEEEEEEEE", caixinhaData)
            return await this.CaixinhaRepository.create(caixinhaData);
        } catch (e) {
            console.error('Erro ao criar caixinha:', e);
            throw e;
        }
    }

    async updatecaixinha(id, caixinhaData) {
        try {
            return await this.CaixinhaRepository.update(id, caixinhaData);
        } catch (e) {
            throw e
        }
    }

    async deletecaixinha(id) {
        return await this.CaixinhaRepository.remove(id);
    }
}