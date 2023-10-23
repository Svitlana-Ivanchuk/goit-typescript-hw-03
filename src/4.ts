class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    //this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

 abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] =[];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: Key): void;

  // я не розумію що тут треба зробити, чому підсвічує class
class MyHouse extends House {

  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door === true
    } else { this.door === false }
      
    
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
