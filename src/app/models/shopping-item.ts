export class ShoppingItem {

    constructor(private _name: string, private _amount: number) {}

    get name() {
        return this._name;
    }
    get amount() {
        return this._amount;
    }

    set name(name: string) {
        this._name = name;
    }
    set amount(amount: number) {
        this._amount = amount;
    }
    
}
