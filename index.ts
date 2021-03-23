class Adder {

    constructor(private a: number) {
    }

    add = (b: number): number => this.a + b;

}

class Child extends Adder {

    callAdd(num): number {
        return this.add(num);
    }
}

const child = new Child(10);
console.log(child.callAdd(20));