import { randomUUID } from 'node:crypto';
import { db } from '../../infra/database.js';
import { eq, sql } from 'drizzle-orm';
import { conta, transferencia } from '../../infra/schema/schema.js';

export class TransferenciaRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return this.db.select()
      .from(transferencia);
  }

  async findById(id) {
    const result = await this.db.select()
      .from(transferencia)
      .where(eq(transferencia.id, id));

    return result[0] || null;
  }

  // async create(transferenciaData) {
  //   try {
  //     const result = await this.db.insert(transferencia).values({
  //       idconta: transferenciaData.idconta,
  //       idcontadestino: transferenciaData.idcontadestino,
  //       comentario: transferenciaData.comentario,
  //       valor: transferenciaData.valor,
  //       datatransf: transferenciaData.datatransf,
  //       chavedestino: transferenciaData.chavedestino,
  //     }).returning();

  //     return result[0];

  //   } catch (e) {
  //     console.error('Erro ao inserir link:', e);
  //     throw e;
  //   }
  // }

  async create(transferenciaData) {
    try {
      const result = await this.db.transaction(async (tx) => {
        const valor = Number(transferenciaData.valor);

        const [contaOrigem] = await tx.select()
          .from(conta)
          .where(eq(conta.id, transferenciaData.idconta));

        const [contaDestino] = await tx.select()
          .from(conta)
          .where(eq(conta.id, transferenciaData.idcontadestino));

        if (!contaOrigem || !contaDestino) {
          throw new Error("Conta de origem ou destino não encontrada");
        }

        if (contaOrigem.saldo < valor) {
          throw new Error("Saldo insuficiente");
        }

        await tx.update(conta)
          .set({ saldo: contaOrigem.saldo - valor })
          .where(eq(conta.id, transferenciaData.idconta));

        await tx.update(conta)
          .set({ saldo: contaDestino.saldo + valor })
          .where(eq(conta.id, transferenciaData.idcontadestino));

        const [novaTransferencia] = await tx.insert(transferencia).values({
          idconta: transferenciaData.idconta,
          idcontadestino: transferenciaData.idcontadestino,
          comentario: transferenciaData.comentario,
          valor: transferenciaData.valor,
          datatransf: transferenciaData.datatransf,
          chavedestino: transferenciaData.chavedestino,
        }).returning();

        return novaTransferencia;
      });

      return result;

    } catch (e) {
      console.error("Erro ao inserir transferência:", e);
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
    const result = await this.db.update(cliente)
      .set({ isativo: false })
      .where(eq(cliente.id, id))
      .returning({ id: cliente.id });

    return result.length > 0;
  }
}