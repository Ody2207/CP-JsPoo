export default class Course {
    constructor({
      name,
      classes = [],
      id,
      isFree = false,
      lang = 'spanish'
    }) {
      this._name = name;
      this.classes = classes;
      this.id = id;
      this.isFree = isFree;
      this.lang = lang;
    }

    get getName() {
      return this._name
    }

    set setName(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de programacion basica") {
        console.error("Wey... no");
        return;
      }
      this._name = nuevoNombrecito
    }
}

