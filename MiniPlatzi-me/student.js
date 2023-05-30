class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCurses = [],
        learningPathc = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCurses = approvedCurses;
        this.learningPathc = learningPathc;

    }
}

const juan3 = new Student3({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juanito@gmail.com',
    twitter: 'fjuandc'

})

const migelito3 = new Student3({
    name: 'Miguelito',
    username: 'miguelitoFeliz',
    email: 'nuguelitoFeliz@gmail.com',
    instagram: 'miguelito_Feliz'

    }
)