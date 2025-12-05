export class TransferenciaService {
    constructor(TransferenciaRepository) {
        this.TransferenciaRepository = TransferenciaRepository;
    }

    async getAllTransferencias() {
        return await this.TransferenciaRepository.findAll();
    }

    async getTransferenciaById(id) {
        return await this.TransferenciaRepository.findById(id);
    }

    async createTransferencia(TransferenciaData) {
        try {
            console.log("TRANSFERENCIAAAAAAAAAAAAAA SERVICEEEEEEEEEEEEEEEEEEEEE", TransferenciaData)
            return await this.TransferenciaRepository.create(TransferenciaData);
        } catch (e) {
            console.error('Erro ao inserir Transferencia:', e);
            throw e;
        }
    }

    async updateTransferencia(id, TransferenciaData) {
        try {
            return await this.TransferenciaRepository.update(id, TransferenciaData);
        } catch (e) {
            throw e
        }
    }

    async deleteTransferencia(id) {
        return await this.TransferenciaRepository.remove(id);
    }
}