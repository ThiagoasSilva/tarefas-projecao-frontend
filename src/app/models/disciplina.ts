export class Disciplina {
    id!: number;
    nome!: string;
    nomeProfessor!: string;
    horario!: string;
    sala!: number;

    constructor(id: number, nome: string, nomeProfessor: string, horario: string, sala: number) {
        this.id = id;
        this.nome = nome;
        this.nomeProfessor = nomeProfessor;
        this.horario = horario;
        this.sala = sala;
    }
}
