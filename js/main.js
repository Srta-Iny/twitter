//realizar funcion que guarde las tareas indicadas en el caja mensajes
// crear var para recorrer DOM
// crear var para guardar respuesta
//hay que confirmar si hay informacion en la caja de mansajes
//guardar tarea y asignar un checkbox para dicha tarea

var listaTareas = document.getElementById("tareas");
// variables contadores
var numTareas = document.getElementById("contador");
var meGusta = document.getElementById("like");
var cont = 0;
var like = 0;

function anadirTarea(){
//rescatar texto
	var textMensaje = document.getElementById("mensaje").value;
//nodo texto
	var textTarea = document.createTextNode(textMensaje);
//var elementos de las tareas
	var cajaTarea = document.createElement("div");
	var labelTarea = document.createElement("label");
	var inputTarea = document.createElement("input");
	var spanTarea = document.createElement("span");
	var iconTrash = document.createElement("i");
	var iconHeart = document.createElement("i");
// añadir atributos
 	cajaTarea.setAttribute("class", "checkbox");
	inputTarea.setAttribute("type", "checkbox");
	iconTrash.setAttribute("class", "fa fa-trash icon-ba");
	iconTrash.setAttribute("aria-hidden", "true");
	iconHeart.setAttribute("class", "fa fa-heart icon-co");
	iconHeart.setAttribute("aria-hidden", "true");
// borrar, cambio de color y tachado
	iconTrash.addEventListener("click", function(event){
		eliminar(cajaTarea);
	});
	inputTarea.addEventListener("click", function(){
		spanTarea.classList.toggle("tachado");
	});
	iconHeart.addEventListener("click", function(){
		iconHeart.classList.toggle("rojo");
		//suma like
		if(iconHeart.classList.contains("rojo")){
			like++;
		    meGusta.innerHTML=like;
		}else{
			like--;
			meGusta.innerHTML=like;
		}
	});
//existe texto?
	if(textMensaje === ""){
		return false;
	}else{
	//sumar contador
		cont++;
		numTareas.innerHTML=cont;
	//agregando tareas
		labelTarea.appendChild(inputTarea);
		spanTarea.appendChild(textTarea);
		labelTarea.appendChild(spanTarea);
		cajaTarea.appendChild(labelTarea);
		cajaTarea.appendChild(iconTrash);
		cajaTarea.appendChild(iconHeart);
		listaTareas.appendChild(cajaTarea);
	}
// dejando espacio en blanco
	textMensaje = document.getElementById("mensaje").value = "";
}

//funcion para borrar
function eliminar(trash) {
	// borra
	trash.parentNode.removeChild(trash);
	//resta contador
	cont--;
	numTareas.innerHTML=cont;
	like--;
	meGusta.innerHTML=like;
	

}