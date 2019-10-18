class Person extends Domer{
    _name = "";
    _age = "";
    constructor(name, age){
        super();
        this._name = name;
        this._age = age;
    }

    render(html){
        return html`
        <section>
        <p>Name: ${this._name}, Age: ${this._age}</p>
        </section>
        `
    }
}