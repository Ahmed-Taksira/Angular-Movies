export class Movie {
  constructor(
    public id: number,
    public title: string,
    public overview: string,
    public imagePath: string,
    public rating: number,
    public votesCount: number,
    public releaseDate: string
  ) {}
}
