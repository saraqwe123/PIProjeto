import { randomUUID } from 'node:crypto';
import { db } from '../../infra/database.js';
import { eq, sql } from 'drizzle-orm';
import { Conta } from '../../infra/schema/schema.js';

export class ContaRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return this.db.select()
      .from(Conta);
  }

  async findById(id) {
    const result = await this.db.select()
      .from(Conta)
      .where(eq(Conta.id, id));

    return result[0] || null;
  }

  async create(ContaData) {
    try {
      console.log("REPOSITORY", ContaData)
      const result = await this.db.insert(Conta).values({
        cpf: ContaData.cpf,
        login: ContaData.login,
        senha: ContaData.senha,
        email: ContaData.email,
        dataNasc: ContaData.dataNasc,
        endereco: ContaData.endereco,
        fotoPerfil: ContaData.fotoPerfil
      }).returning();

      return result[0];

    } catch (e) {
      console.error('Erro ao inserir link:', e);
      throw e;
    }
  }

  async update(id, ContaData) {
    const result = await this.db.update(Conta)
      .set(ContaData)
      .where(eq(Conta.id, id))
      .returning();
    return result[0] || null;
  }

  async remove(id) {
    const result = await this.db.delete(Conta)
      .where(eq(Conta.id, id))
      .returning({ id: Conta.id });

    return result.length > 0;
  }
}