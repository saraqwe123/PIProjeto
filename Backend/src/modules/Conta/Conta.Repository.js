import { randomUUID } from 'node:crypto';
import { db } from '../../infra/database.js';
import { eq, sql } from 'drizzle-orm';
import { conta } from '../../infra/schema/schema.js';

export class ContaRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return this.db.select()
      .from(conta);
  }

  async findById(id) {
    const result = await this.db.select()
      .from(conta)
      .where(eq(conta.id, id));

    return result[0] || null;
  }

  async create(ContaData, chavePixAleatorio, numeroDaConta) {
    try {
      // console.log("REPOSITORY", ContaData)
      const result = await this.db.insert(conta).values({
        idcliente: ContaData.idcliente,
        chavepixemail: ContaData.chavepixemail,
        chavepixtel: ContaData.chavepixtel,
        chavepixcpf: ContaData.chavepixcpf,
        chavepixaleatorio: chavePixAleatorio,
        saldo: ContaData.saldo,
        numerodaconta: numeroDaConta
      }).returning();

      return result[0];

    } catch (e) {
      console.error('Erro ao inserir conta:', e);
      throw e;
    }
  }

  async update(id, ContaData) {
    const result = await this.db.update(conta)
      .set(ContaData)
      .where(eq(conta.id, id))
      .returning();
    return result[0] || null;
  }

  async remove(id) {
    const result = await this.db.delete(conta)
      .where(eq(conta.id, id))
      .returning({ id: conta.id });

    return result.length > 0;
  }
}