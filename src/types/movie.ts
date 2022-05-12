

export interface IMovie{
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isPopular: boolean;
  datePublished: Date;
}

export class Movie{

  public id: string;
  public title: string;
  public description: string;
  public imageUrl: string;
  public isPopular: boolean;
  public datePublished: Date;


  constructor(id: string, title: string, description: string, imageUrl: string, isPopular: boolean, datePublished: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.isPopular = isPopular;
    this.datePublished = datePublished;
  }
}