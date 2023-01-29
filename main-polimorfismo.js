// Polimorfismo
class Comment {
  constructor({ content, studentName, studentRole = 'estudiante' }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + ' (' + this.studentRole + ')');
    console.log(this.likes + ' likes');
    console.log(this.content);
  }
}

function videoPlay(id) {
  const urlSecreta = 'https://platziultrasecretomasquelanasa.com/' + id;
  console.log('Se está reproduciendo desde la url ' + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = 'https://platziultrasecretomasquelanasa.com/' + id;
  console.log('Pausamos la url ' + urlSecreta);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = 'spanish' }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  // Getters y Setters
  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === 'Curso Malito de Programación Básica') {
      console.error('Web... no');
    } else {
      this._name = newName;
    }
  }
}

const cursoProgBasica = new Course({
  name: 'Curso de programación básica',
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: 'Curso Definitivo de HTML y CSS',
});
const cursoPracticoHTML = new Course({
  name: 'Curso Práctico de HTML y CSS',
  lang: 'english',
});

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

// Superclase o superprototipo
class Student {
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

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    })
    comment.publicar();
  }
}

// Subclase o subprototipo
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        'Lo sentimos, ' + this.name + ', solo puedes tomar cursos abiertos.'
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        'Lo sentimos, ' + this.name + ', no puedes tomar cursos en ingles.'
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  // Polimorfismo: sobreescribir el método publicarComentario de la super clase Student
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'teacher',
    });
    comment.publicar();
  }
}

// Instancias
const juan2 = new FreeStudent({
  name: 'JuanDC',
  username: 'juandc',
  email: 'juanito@juanito.com',
  twitter: 'fjuandc',
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito2 = new BasicStudent({
  name: 'Miguelito',
  username: 'miguelitofeliz',
  email: 'miguelito@feliz.com',
  instagram: 'miguelito_feliz',
  learningPaths: [escuelaWeb, escuelaData],
});

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'f@gep.com',
  instagram: 'freddier',
});
