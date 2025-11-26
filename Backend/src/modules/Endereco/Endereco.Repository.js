import { randomUUID } from 'node:crypto';
import { db } from '../../infra/database.js';
import { eq, sql } from 'drizzle-orm';
import { endereco } from '../../infra/schema/schema.js';

export class CadastroRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return this.db.select()
      .from(endereco);
  }

  async findById(id) {
    const result = await this.db.select()
      .from(endereco)
      .where(eq(endereco.id, id));

    return result[0] || null;
  }

  async create(enderecoData) {
    try {
      console.log("REPOSITORY", enderecoData)
      const result = await this.db.insert(endereco).values({
        cpf: enderecoData.cpf,
        login: enderecoData.login,
        senha: enderecoData.senha,
        email: enderecoData.email,
        dataNasc: enderecoData.dataNasc,
        endereco: enderecoData.endereco,
        fotoPerfil: enderecoData.fotoPerfil
      }).returning();

      return result[0];

    } catch (e) {
      console.error('Erro ao inserir link:', e);
      throw e;
    }
  }

  async update(id, enderecoData) {
    const result = await this.db.update(endereco)
      .set(enderecoData)
      .where(eq(endereco.id, id))
      .returning();
    return result[0] || null;
  }

  async remove(id) {
    const result = await this.db.delete(endereco)
      .where(eq(endereco.id, id))
      .returning({ id: endereco.id });

    return result.length > 0;
  }
}