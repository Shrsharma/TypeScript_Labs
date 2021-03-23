

namespace Employee {

    export class Developer implements IEmployeeAction {

        print(): string {
            console.log("Print method called");
            return "OK";
        }
    }
    
    const test = new Developer();
    test.print();
}

