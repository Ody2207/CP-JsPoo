// clases
class School {
    constructor({
        nameSchool,
        curses = [],
        approvedCourses = [],
    }) {
        this.nameSchool = nameSchool;
        this.curses = curses;
        this.approvedCourses = approvedCourses;
    }


    schoolWeb() {
        this.curses.push([
            'Cuso Definitivo de HTML y CSS',
            'Cuso Practico de HTML y CSS',
            'Cuso Responsive Desing',
        ])
    }
    schoolVideoGame() {
        this.curses.push([
            'Cuso Introducción ala Produccion de Vgs',
            'Cuso de Unreal Engine',
            'Cuso de Unity 3D',
        ])
    }
    schoolBusness() {
        this.curses.push([
            'Curso Analisis de Negocios para Ciencia de Datos',
            'Curso Princiopos de visualización de Datos para BI'
        ])
    }
}


class Student extends School{
    constructor({
        nameSchool,
        curses,
        approvedCourses = [],
        name, 
        age, 
        email,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
    }) {
        super({
            nameSchool, 
            curses, 
            approvedCourses
        })
        this.name = name;
        this.age = age;
        this.email = email;
        this.socialMedia = {
            twitter,
            facebook,
            instagram
        }
    }

    aprobarCursos(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}


const pancho = new Student({
    name: 'Pancho',
    age: 12,
    email: 'pancho@gmail.com',
    twitter: 'pancho123',
    instagram:  'pancho_123',
    nameSchool: 'Escuela de Diseño Web',
    approvedCourses: [
        'Cuso Definitivo de HTML y CSS',
        'Cuso Practico de HTML y CSS',
    ]
})
pancho.schoolWeb()
console.log(pancho)

const juanita = new Student({
    name: 'Juanita',
    age: 34,
    email: 'juanitaOMG@gmail.com',
    instagram: 'lajuana',
    nameSchool: 'Escuela de videojuegos',
    approvedCourses: [
        'Cuso Introducción ala Produccion de Vgs'
    ]
})
juanita.schoolVideoGame()
console.log(juanita)