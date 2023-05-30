// import { Teacher, Course, Lesson, LearningPath } from "./routes.js";
import Lesson from "./lesson.mjs";
import Course from "./course.mjs";
import Teacher from "./teachers.mjs";
import LearningPath from "./learningpath.mjs";
import PlatziClass from "./videos.mjs";
import { FreeStudent, BasicStudent, ExpertStudent } from "./student.mjs"

// --------------------------> Course <---------------------------

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  id: 340462029,
  isFree: true,
});
// console.log(cursoProgBasica);

// cursoProgBasica.setName = "El Mejor Curso Gratis de Programación Básica";
// console.log(cursoProgBasica.getName);

// cursoProgBasica.setName = "Curso Malito de programacion basica";
// console.log(cursoProgBasica.getName);

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: 'english'
});
// --------------------------> LearningPath <-------------------------

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
],
});
const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
],
}); 
const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
],
});



// --------------------------> Student <-------------------------

const juan = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
],
});
juan.approveCourse(cursoProgBasica)
juan.approveCourse(cursoDefinitivoHTML)
const miguelito = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
],
});
miguelito.approveCourse(cursoProgBasica)
miguelito.approveCourse(cursoPracticoHTML)
const ana = new ExpertStudent({
name: 'Anita',
username: 'anitafeliz33',
email: 'anita33@gmail.com',
instagram: 'anita33',
learningPaths: [
  escuelaData,
  escuelaVgs,
]
})
ana.approveCourse(cursoProgBasica)
ana.approveCourse(cursoPracticoHTML)



// --------------------------> Platzi Clases <--------------------

const clase67 = new PlatziClass({
  name: 'JavaScript orientado a objetos basado en prototipos',
  videoID: 'sadfasdfgdfgsdfgsdfga'
})
clase67.reproducri();
clase67.pausar();


// --------------------------> Teachers <-------------------------

const FreddyVega = new Teacher({
  id: 1,
  name: 'Freddy Vega',
  speciality: 'CEO'
});
console.log(FreddyVega);
const ClauAlderete = new Teacher({
  id: 2, 
  name: 'Clau Alderete',
  speciality: 'Digital Marketing'
});
console.log(ClauAlderete);

// --------------------------> Lecciones <------------------------

const lesson1PB = new Lesson({
  id: 1,
  title: 'Clase 1 Programación Básica'
});
console.log(lesson1PB);
const lesson1DM = new Lesson({
  id: 2,
  title: 'Clase 1 Marketing Digital'
});
console.log(lesson1DM);

  
