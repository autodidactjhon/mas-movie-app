export class Movie {

  public description:string;
  public id:number;
  public image:string;
  public title:string;
  public releaseDate:string;

  constructor( description:string, image:string, title:string, releaseDate:string ) {
    this.description = description;
    this.id = Math.random();
    this.image = image;
    this.title = title;
    this.releaseDate = releaseDate;
  }
}