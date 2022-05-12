

export interface ICategory{
  id: number;
  name: string;
}

export class Category{
  public id: number;
  public name: string;

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }
}



