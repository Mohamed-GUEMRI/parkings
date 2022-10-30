export class Parking{
  public Parking(id: number, capacity: number, location: string){
    this.id = id;
    this.capacity = capacity;
    this.location = location;

  }
  public id: number | undefined;
  public capacity: number | undefined;
  public location: string | undefined;
}
