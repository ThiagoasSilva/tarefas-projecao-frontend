export class Tarefa {
id!: number;
prioridade!: number;
nome!: string;
descricao!: string;
disciplina!: string;

constructor(id: number, prioridade: number, nome: string, descricao: string, disciplina: string) {
    this.id = id;
    this.prioridade = prioridade;
    this.nome = nome;
    this.descricao = descricao;
    this.disciplina = disciplina;
  }

}
