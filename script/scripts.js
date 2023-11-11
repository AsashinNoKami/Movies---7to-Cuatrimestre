document.getElementById("formulario").addEventListener('submit', function (e) {
    

    e.preventDefault();

    var pelicula = {
        id : document.getElementById("title").value + document.getElementById("year").value,
        title : document.getElementById("title").value,
        year : document.getElementById("year").value,
        duration : document.getElementById("duration").value,
        gender : document.getElementById("gender").value,
        director : document.getElementById("director").value,
        sinopsis : document.getElementById("sinopsis").value
    }

    agregarEstudiante(pelicula);

    this.reset();

});

function agregarEstudiante(pelicula) {
    var tbody = document.getElementById("cuerpoTabla");

    var fila = document.createElement("tr");

    for(var key in pelicula){
        var td = document.createElement("td");
        td.textContent = pelicula[key];
        fila.appendChild(td);
    }    
    var td = document.createElement("td");
    var boton = document.createElement("button");
    boton.textContent = "Eliminar"
    boton.classList.add('btn','btn-danger');
    boton.onclick = function(){
        tbody.removeChild(fila)
    }
    td.appendChild(boton);
    fila.appendChild(td);

    var td2 = document.createElement("td");
    var boton2 = document.createElement("button");
    boton2.textContent = "Editar"
    boton2.classList.add('btn','btn-success');
    boton2.onclick = function(){
        document.getElementById("btnEdit").removeAttribute('disabled');;
        document.getElementById("id").value = fila.children[0].innerHTML;
        document.getElementById("title").value = fila.children[1].innerHTML;
        document.getElementById("year").value = fila.children[2].innerHTML;
        document.getElementById("duration").value = fila.children[3].innerHTML;
        document.getElementById("gender").value = fila.children[4].innerHTML;
        document.getElementById("director").value = fila.children[5].innerHTML;
        document.getElementById("sinopsis").value = fila.children[6].innerHTML;
        

    }
    td2.appendChild(boton2);
    fila.appendChild(td2);
    tbody.appendChild(fila)

}

function Edit(){
    


}