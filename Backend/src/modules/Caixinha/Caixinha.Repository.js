import { randomUUID } from 'node:crypto';
import { db } from '../../infra/database.js';
import { eq } from 'drizzle-orm';
import { caixinha } from '../../infra/schema/schema.js'; // tabela caixinha

export class CaixinhaRepository {
  constructor() {
    this.db = db;
  }

  // Pega todas as caixinhas
  async findAll() {
    return this.db.select().from(caixinha);
  }

  // Pega caixinha por ID
  async findById(id) {
    const result = await this.db.select()
      .from(caixinha)
      .where(eq(caixinha.id, id));
    return result[0] || null;
  }

  // Pega todas as caixinhas de uma conta específica
  async findByContaId(idConta) {
    return this.db.select()
      .from(caixinha)
      .where(eq(caixinha.idConta, idConta));
  }

  // Cria uma nova caixinha
  async create(caixinhaData) {
    try {
      const result = await this.db.insert(caixinha).values({
        id: caixinhaData.id || randomUUID(),
        idConta: caixinhaData.idConta,
        idTipoCaixinha: caixinhaData.idTipoCaixinha,
        valorInvestido: caixinhaData.valorInvestido,
        valorResgatado: caixinhaData.valorResgatado || 0,
        criadoEm: caixinhaData.criadoEm || new Date(),
        valorRendido: caixinhaData.valorRendido || 0
      }).returning();

      return result[0];
    } catch (e) {
      console.error('Erro ao inserir caixinha:', e);
      throw e;
    }
  }

  // Atualiza caixinha existente
  async update(id, caixinhaData) {
    const result = await this.db.update(caixinha)
      .set(caixinhaData)
      .where(eq(caixinha.id, id))
      .returning();
    return result[0] || null;
  }

  // Remove caixinha
  async remove(id) {
    const result = await this.db.delete(caixinha)
      .where(eq(caixinha.id, id))
      .returning({ id: caixinha.id });
    return result.length > 0;
  }
}
