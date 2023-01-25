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
  }
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
const juanita = new Student(
  'Juanita Alejandra',
  18,
  ['Curso de Introducción a la Producción de Videojuegos', 'Curso de Creación de Personajes para Videojuegos']
);