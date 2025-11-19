import { randomUUID } from 'node:crypto';
import { db } from '../../infra/database.js';
import { eq, sql } from 'drizzle-orm';
import { cliente } from '../../infra/schema/schema.js';

export class CadastroRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return this.db.select()
      .from(cliente);
  }

  async findById(id) {
    const result = await this.db.select()
      .from(cliente)
      .where(eq(cliente.id, id));

    return result[0] || null;
  }

  async create(clienteData) {
    try {
      console.log("REPOSITORY", clienteData)
      const result = await this.db.insert(cliente).values({
        cpf: clienteData.cpf,
        login: clienteData.login,
        senha: clienteData.senha,
        email: clienteData.email,
        dataNasc: clienteData.dataNasc,
        endereco: clienteData.endereco,
        fotoPerfil: clienteData.fotoPerfil
      }).returning();

      return result[0];

    } catch (e) {
      console.error('Erro ao inserir link:', e);
      throw e;
    }
  }

  async update(id, clienteData) {
    const result = await this.db.update(cliente)
      .set(clienteData)
      .where(eq(cliente.id, id))
      .returning();
    return result[0] || null;
  }

  async remove(id) {
    const result = await this.db.delete(cliente)
      .where(eq(cliente.id, id))
      .returning({ id: cliente.id });

    return result.length > 0;
  }
}