// literal object
const natalia = {
  name: 'Natalia',
  age: 30,
  cursosAprobados: [
    'Curso Definitivo de HTML y CSS',
    'Curso Práctico de HTML y CSS',
  ],
  // crear un método en el objeto literal

  // Primera forma
  // aprobarCurso: function () { ... },

  // Segunda forma
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
}; // instancia del Object prototype

// Hacer que Natalia apruebe un curso desde fuera del objeto literal
// natalia.cursosAprobados.push('Curso de Responsive Design');

// Creacion de un prototipo
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  // crear un método en el prototipo

  // Primera forma
  /* this.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }; */

  // Segunda forma: fuera de la función
}
// de esta forma se pueden crear cuantos métodos se quieran
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

// Crear una instancia del prototype Student
const juanita = new Student('Juanita Alejandra', 18, [
  'Curso de Introducción a la Producción de Videojuegos',
  'Curso de Creación de Personajes para Videojuegos',
]);

// Prototipos con la sintaxis de clases
class Student2 {
  // constructor(name, age, cursosAprobados) { // de esta forma se tendria que saber el orden de los parametros
  constructor({
    name,
    age,
    email,
    cursosAprobados = [] // valores por defecto
  }) {
    // de esta forma no importa el orden de los parametros
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

/* const miguelito = new Student2('Miguelito', 15, [
  'Curso de Análisis de Negocios para Ciencia de Datos',
  'Curso de Principios de Visualización de Datos para BI',
]);*/ // FOrma de pasar los parametros ordenadaos

const miguelito = new Student2({
  email: 'miguelito@gmail.com',
  age: 15,
  name: 'Miguelito',
}); // de esta forma, se pasa un objeto literal como parametro sin importar el orden de los datos
// tambien se puede evitar enviar parametros opcionales como null o solo comilas ("")
