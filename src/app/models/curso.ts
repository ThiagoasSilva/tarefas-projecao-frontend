export class Curso {
id!: number;
nome!: string
semestres!: number
area!: string

constructor(id: number, nome: string, semestres: number, area: string) {
    this.id = id;
    this.nome = nome;
    this.semestres = semestres;
    this.area = area;
  }
}
