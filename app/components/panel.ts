export class Panel {

  private rate: number;
  private reviews: string;
  private author: string;

  constructor(
    rate: number,
    reviews: string,
    author: string
    /*(?) facultatif et le constructeur nous permet de l'omettre.*/
  ){
  this.rate = rate;
  this.reviews = reviews;
  this.author = author;
  }

  public getRate(){
    return this.rate;
  }

  public getReviews(){
    return this.reviews;
  }

  public getAuthor(){
    return this.author;
  }

  public setRate(rate: number){
    this.rate = rate;
  }

  public setReviews(reviews: string){
    this.reviews = reviews;
  }

  public setAuthor(author: string){
    this.author = author;
  }

  public toString(){
    return this;
  }

}
