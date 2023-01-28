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
    cursosAprobados = [], // valores por defecto
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

// ventajas de OOP
// Creación de estudiantes con objetos literales
/*
const juan1 = {
  name: 'Juan',
  username: 'juandc',
  points: 100,
  socialMedia: {
    twitter: 'fjuandc',
    instagram: 'fjuandc',
    facebook: undefined,
  },
  approvedCourses: [
    'Curso Definitivo de HTML y CSS',
    'Curso Práctico de HTML y CSS',
  ],
  learningPaths: [
    {
      name: 'Escuela de Desarrollo Web',
      courses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
        'Curso de Responsive Design',
      ],
    },
    {
      name: 'Escuela de Videojuegos',
      courses: [
        'Curso de Introducción a la Producción de Vgs',
        'Curso de Unreal Engine',
        'Curso de Unity 3D',
      ],
    },
  ],
};

const miguelito1 = {
  name: 'Miguelito',
  username: 'miguelitofeliz',
  points: 1000,
  socialMedia: {
    twitter: 'miguelitofeliz',
    instagram: 'miguelito_feliz',
    facebook: undefined,
  },
  approvedCourses: ['Curso DataBusiness', 'Curso DataViz'],
  learningPaths: [
    {
      name: 'Escuela de Desarrollo Web',
      courses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
        'Curso de Responsive Design',
      ],
    },
    {
      name: 'Escuela de Data Science',
      courses: [
        'Curso DataBusiness',
        'Curso DataViz',
        'Curso Tableau'
      ],
    },
  ],
};

*/

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: 'Curso de programación básica',
});
const cursoDefinitivoHTML = new Course({
  name: 'Curso Definitivo de HTML y CSS',
});
const cursoPracticoHTML = new Course({
  name: 'Curso Práctico de HTML y CSS',
});

// Reto: Crear un prototipo para las leraningPaths
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: 'Escuela de Desarrollo Web',
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
    'Curso de Responsive Design',
  ],
});

const escuelaData = new LearningPath({
  name: 'Escuela de Data Science',
  courses: [
    cursoProgBasica,
    'Curso DataBusiness',
    'Curso DataViz',
    'Curso Tableau',
  ],
});

const escuelaVgs = new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: [
    cursoProgBasica,
    'Curso de Introducción a la Producción de Vgs',
    'Curso de Unreal Engine',
    'Curso de Unity 3D',
  ],
});

// Creación de estudiantes con prototipos con la sintaxis de clases
class Student3 {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

// Instancias de la clase (prototipo) Student3
const juan2 = new Student3({
  name: 'JuanDC',
  username: 'juandc',
  email: 'juanito@juanito.com',
  twitter: 'fjuandc',
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito2 = new Student3({
  name: 'Miguelito',
  username: 'miguelitofeliz',
  email: 'miguelito@feliz.com',
  instagram: 'miguelito_feliz',
  learningPaths: [escuelaWeb, escuelaData],
});
