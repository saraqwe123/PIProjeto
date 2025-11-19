import { pgTable, serial, varchar, char, date, integer, real } from "drizzle-orm/pg-core";

export const cliente = pgTable("cliente", {
  id: serial("id").primaryKey(),
  cpf: char("cpf", { length: 11 }),
  login: varchar("login", { length: 255 }),
  senha: varchar("senha", { length: 255 }),
  email: varchar("email", { length: 255 }),
  datanasc: date("datanasc"),
  endereco: varchar("endereco", { length: 255 }),
  fotoperfil: varchar("fotoperfil", { length: 255 }),
});

export const conta = pgTable("conta", {
  id: serial("id").primaryKey(),
  idcliente: integer("idcliente").references(() => cliente.id),

  chavepixcpf: char("chavepixcpf", { length: 11 }),
  chavepixemail: varchar("chavepixemail", { length: 255 }),
  chavepixtel: char("chavepixtel", { length: 11 }),
  chavepixaleatorio: varchar("chavepixaleatorio", { length: 255 }),

  saldo: real("saldo"),
  numerodaconta: varchar("numerodaconta", { length: 255 }),
});

export const transferencia = pgTable("transferencia", {
  id: serial("id").primaryKey(),

  idconta: integer("idconta").references(() => conta.id),
  idcontadestino: integer("idcontadestino").references(() => conta.id),

  valor: real("valor"),
  datatransf: date("datatransf"),
  comentario: varchar("comentario", { length: 255 }),
  chavedestino: varchar("chavedestino", { length: 255 }),
});

export const tipocaixinha = pgTable("tipocaixinha", {
  id: serial("id").primaryKey(),
  rentabilidade: real("rentabilidade"),
  prazoresgate: varchar("prazoresgate", { length: 255 }),
});

export const caixinha = pgTable("caixinha", {
  id: serial("id").primaryKey(),

  idconta: integer("idconta").references(() => conta.id),
  idtipocaixinha: integer("idtipocaixinha").references(() => tipocaixinha.id),

  valorinvestido: real("valorinvestido"),
  valorresgatado: real("valorresgatado"),
  datacriacao: date("datacriacao"),
  valorrendido: real("valorrendido"),
});

export const histrendcaixinha = pgTable("histrendcaixinha", {
  id: serial("id").primaryKey(),

  idcaixinha: integer("idcaixinha").references(() => caixinha.id),

  valorrendido: real("valorrendido"),
  datarendimento: date("datarendimento"),
});

export const histtranscaixinha = pgTable("histtranscaixinha", {
  id: serial("id").primaryKey(),

  idcaixinha: integer("idcaixinha").references(() => caixinha.id),

  valormovimentado: real("valormovimentado"),
});

export const acao = pgTable("acao", {
  id: serial("id").primaryKey(),

  idconta: integer("idconta").references(() => conta.id),

  valorinvestido: real("valorinvestido"),
  datacompra: date("datacompra"),
  valorvendido: real("valorvendido"),
  valorrendido: real("valorrendido"),
});

export const histrendacao = pgTable("histrendacao", {
  id: serial("id").primaryKey(),

  idacao: integer("idacao").references(() => acao.id),

  valorrendido: real("valorrendido"),
  datarendimento: date("datarendimento"),
});

export const histtransfacao = pgTable("histtransfacao", {
  id: serial("id").primaryKey(),

  idacao: integer("idacao").references(() => acao.id),

  valormovimentado: real("valormovimentado"),
});
