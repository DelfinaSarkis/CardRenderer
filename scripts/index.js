class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities = [];
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(actividad){
        this.activities.push(actividad)
    }
}

const miRepository = new Repository();

const activity1 = new Activity(1, "Actividad 1", "Descripción de la actividad 1", "url1.jpg");

miRepository.createActivity(activity1);

console.log(miRepository.getAllActivities());
