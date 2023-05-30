class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get getname() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito != 'string'){
          this._name = 'hola';
      }
    }
  }

  const nuevoNombre = new Course({
    name: 'como estas'
  })

  console.log(nuevoNombre);
  console.log(nuevoNombre.getname);