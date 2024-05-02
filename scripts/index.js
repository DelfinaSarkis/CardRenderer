class Activity {
    constructor(id, title, description, imgUrl) {
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
    deleteActivity(id){
        this.activities = this.activities.filter(actividad => actividad.id !== id);
    }
}
//.1
const repository = new Repository();

//.2
function ActividadHTML(actividad) {
    const {id, title, description, imgUrl} = actividad; //destructing
    const divTarjeta = document.createElement('div');
    const titulo = document.createElement('h3');
    const descripcion = document.createElement('p');
    const imagen = document.createElement('img');

    titulo.innerHTML = title;
    descripcion.innerHTML = description;
    imagen.src = imgUrl;

    divTarjeta.classList.add('tarjeta');
    titulo.classList.add('titulo-actividad');
    descripcion.classList.add('descripcion-actividad');
    imagen.classList.add('imagen-actividad');

    divTarjeta.appendChild(titulo);
    divTarjeta.appendChild(descripcion);
    divTarjeta.appendChild(imagen);
    divTarjeta.classList.add('tarjeta-actividad');

    return divTarjeta;
}

//.3
function refresh(){
    const contenedorActividades = document.getElementById('activityCards');
    contenedorActividades.innerHTML = '';
    const actividades = repository.getAllActivities();
    const elementosHTML = actividades.map(ActividadHTML);
    elementosHTML.forEach(elemento => contenedorActividades.appendChild(elemento));
}

//.4
function handleSubmit(event) {
    event.preventDefault();
    const inputTitulo = document.getElementById('título');
    const inputDescripcion = document.getElementById('descripción');
    const inputImagen = document.getElementById('url-imagen');
    
    const titulo = inputTitulo.value;
    const descripcion = inputDescripcion.value;
    const imgUrl = inputImagen.value;

    if (!titulo || !descripcion || !imgUrl){
        alert('Por favor completa todos los campos.');
        return;
    }

    const nuevaActividad = new Activity(Date.now(), titulo, descripcion, imgUrl);
    repository.createActivity(nuevaActividad);
    refresh();
    inputTitulo.value = '';
    inputDescripcion.value = '';
    inputImagen.value = '';
}

//.5
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', handleSubmit);

//Extra credit
document.addEventListener('click', function(event){
    if(event.target.classList.contains('tarjeta-actividad')) {
        event.target.remove();
    }
});
});