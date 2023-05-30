export default class Commet {
    constructor({
        content,
        studentName,
        studentRole = 'estudiantes',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + ' (' + this.studentRole + ') ');
        console.log(this.likes + ' likes');
        console.log(this.content);
    }
}