import path from "path";
import bcrypt from "bcrypt";


export class EnderecoController {
    constructor(CadastroService) {
      this.CadastroService = CadastroService;
    }
  
    async getAllEnderecos(request, reply) {
      try {
        const Enderecos = await this.CadastroService.getAllEnderecos();
        return reply.code(200).send(Enderecos);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Enderecos', error: error.message });
      }
    }
  
    async getEnderecoById(request, reply) {
      const { id } = request.params;
      
      try {
        const Endereco = await this.CadastroService.getEnderecoById(id);
        if (!Endereco) return reply.code(404).send({ message: `Endereco com ID ${id} não encontrado.` });
        return reply.code(200).send(Endereco);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar Endereco por ID', error: error.message });
      }
    }
  
    async createEndereco(request, reply) {
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
        const novoEndereco = await this.CadastroService.createEndereco(novoUsuario);
        return reply.code(201).send(novoEndereco);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao criar Endereco', error: error.message });
      }
    }
  
    async updateEndereco(request, reply) {
      const { id } = request.params;
      try {
        const updatedEndereco = await this.CadastroService.updateEndereco(id, request.body);
        if (!updatedEndereco) return reply.code(404).send({ message: `Endereco com ID ${id} não encontrado para atualização.` });
        return reply.code(200).send(updatedEndereco);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao atualizar Endereco', error: error.message });
      }
    }
  
    async deleteEndereco(request, reply) {
      const { id } = request.params;
      try {
        const deletedEndereco = await this.CadastroService.deleteEndereco(id);
        if (!deletedEndereco) return reply.code(404).send({ message: `Endereco com ID ${id} não encontrado para exclusão.` });
        return reply.code(200).send({ message: `Endereco com ID ${id} deletado com sucesso.` });
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao deletar Endereco', error: error.message });
      }
    }
  }
  