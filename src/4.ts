class Key {
    constructor(private signature: number = Math.random()){}

    getSignature(): number{
        return this.signature;
    }
}

class Person{
    constructor(private key: Key){
        this.key = key;

    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
   protected door: boolean;
   protected key: Key;
   private tenants: Person[]=[];

   constructor(key: Key){
    this.key = key;
}

abstract openDoor(key: Key): void;

    comeIn(person: Person){
        if(this.door===true){
            this.tenants.push(person);
            console.log('The door is opened, welcome to house.')

        }else{
            console.log('The door is closed, you can not come in.');
        }
    }

}

class MyHouse extends House{
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()){
            this.door===true;
            console.log('You choose the right key, door is opened.');
        }else{
            console.log('You use the wrong key. Door is closed. Please try another key.');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};