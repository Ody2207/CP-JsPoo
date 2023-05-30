function videoPlay(id) {
    const urlSecreta = 'https://platziulstrasecretomasquelanasa.com' + id;
    console.log('Se está reproduciendo por la url secreta' + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = 'https://platziulstrasecretomasquelanasa.com' + id;
    console.log('Pausamos la url' + urlSecreta);
}

export default class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducri() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}