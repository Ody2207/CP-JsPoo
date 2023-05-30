import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student {
  constructor(props, skills = []) {
    super(props);
    this.skills = skills;
  }

  publicarComentario(commentContent) {
    const role = `profesor de ${this.skills.join(",")}`;

    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: role
    });

    return comment.publicar();
  }
}