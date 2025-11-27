import path from "path";
import bcrypt from "bcrypt";


export class CadastroController {
    constructor(CadastroService) {
      this.CadastroService = CadastroService;
    }
  
    async getAllClientes(request, reply) {
      try {
        const clientes = await this.CadastroService.getAllClientes();
        return reply.code(200).send(clientes);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Clientes', error: error.message });
      }
    }
  
    async getClienteById(request, reply) {
      const { id } = request.params;
      
      try {
        const cliente = await this.CadastroService.getClienteById(id);
        if (!cliente) return reply.code(404).send({ message: `Cliente com ID ${id} não encontrado.` });
        return reply.code(200).send(cliente);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Cliente por ID', error: error.message });
      }
    }
  
    async createCliente(request, reply) {
      try {
        const { senha, cpf, ...rest } = request.body;
        let fileName = null;
        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);
        if (request.files && request.files.photo) {
          const photo = request.files.photo;
          fileName = `${Date.now()}_${photo.name}`;
          const uploadPath = path.join("src", "imagens", fileName);

          await photo.mv(uploadPath);
        }

        const novoUsuario = {
          ...rest,
          senha: senhaHash,
           ...(fileName && { fotoPerfil: fileName }),
          cpf: cpf,
        };
        console.log("LOGGGGGGGGG AQQQQQQQQQQQQQQQQ", novoUsuario)
        const novoCliente = await this.CadastroService.createCliente(novoUsuario);
        return reply.code(201).send(novoCliente);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao criar Cliente', error: error.message });
      }
    }
  
    async updateCliente(request, reply) {
      const { id } = request.params;
      try {
        const updatedCliente = await this.CadastroService.updateCliente(id, request.body);
        if (!updatedCliente) return reply.code(404).send({ message: `Cliente com ID ${id} não encontrado para atualização.` });
        return reply.code(200).send(updatedCliente);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao atualizar Cliente', error: error.message });
      }
    }
  
    async deleteCliente(request, reply) {
      const { id } = request.params;
      try {
        const deletedCliente = await this.CadastroService.deleteCliente(id);
        if (!deletedCliente) return reply.code(404).send({ message: `Cliente com ID ${id} não encontrado para exclusão.` });
        return reply.code(200).send({ message: `Cliente com ID ${id} deletado com sucesso.` });
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao deletar Cliente', error: error.message });
      }
    }
  }
  