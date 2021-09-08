export class dropList {
    #id = "#";
    #name = "Default" + this.#id;
    #values = [];
    #value;
    #css = {
        background: "white",
        borderColor: "grey",
        borderWidth: "1px",
        borderRadius: '0px',
        color: "grey",
        fontSize: "Arial",
        padding: "5px"
    }
    constructor (id, name, values) {
        this.#id += id;
        this.#name = name;
        this.#values = values;
    }
    get id () {
        return this.#id
    }
    get name () {
        return this.#name
    }
    get values () {
        return this.#values
    }
    get value () {
        return this.#value
    }
    set setValue (value) {
        this.#value = value
    }
    set background (par) {
        this.#css.background = par
    }
    set borderColor (par) {
        this.#css.borderColor = par
    }
    set borderWidth (par) {
        this.#css.borderWidth = par
    }
    set borderRadius (par) {
        this.#css.borderRadius = par
    }
    set color (par) {
        this.#css.color = par
    }
    set fontSize (par) {
        this.#css.fontSize = par
    }
    set padding (par) {
        this.#css.padding = par
    }
}