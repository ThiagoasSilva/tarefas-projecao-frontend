export class Usuario {
  id!: number;
  nome! : string;
  cpf!: string;
  endereco!: string;
  telefoneUsuario!: string;

  constructor(id: number, nome: string, cpf: string, endereco: string, telefoneUsuario: string) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefoneUsuario = telefoneUsuario;
  }
}
