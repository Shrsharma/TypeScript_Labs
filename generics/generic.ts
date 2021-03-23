

class GenericMap<T extends number | string> {

    private items: { [key: string]: T } = {};

    setItem(key: string, item: T) {
        this.items[key] = item
    }

    getItem(key: string): T {
        return this.items[key];
    }

    print() {
        const itemsString = Object.getOwnPropertyNames(this.items)
            .map(key => `${key}: ${this.getItem(key)}`).join(",");
        console.log(itemsString);
    }

}

const num = new GenericMap();
num.setItem('alpha', 7);
num.setItem('beta', 7);
num.print();

const cjars = new GenericMap();
num.setItem('alpha', 'A');
num.setItem('beta', 'B');
num.print();