export class Panel {

  private stars: number;
  private body: string;
  private author: string;

  constructor(
    stars: number,
    body: string,
    author: string
    /*(?) facultatif et le constructeur nous permet de l'omettre.*/
  ){
  this.stars = stars;
  this.body = body;
  this.author = author;
  }

  public getRate() : number{
    return this.stars;
  }

  public getReviews(){
    return this.body;
  }

  public getAuthor(){
    return this.author;
  }

  public setRate(stars: number){
    this.stars = stars;
  }

  public setReviews(body: string){
    this.body = body;
  }

  public setAuthor(author: string){
    this.author = author;
  }

  public toString(){
    return this;
  }

}
