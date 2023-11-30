    //variables 
    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const listaCursos = document.querySelector('#lista-cursos');
    let articulosCarrito = [];
    
    cargarEventlistener();
    function cargarEventlistener() {
        //Cuando agregas un curso presionando "agregar al carrito"
        listaCursos.addEventListener('click', agregarCurso);
    
        //Elimina curso del carrito
        carrito.addEventListener('click', eliminarCurso);
    
        //Vaciar el carrito
        vaciarCarritoBtn.addEventListener('click', () =>{
            articulosCarrito = []; //reseteamos el arreglo
    
            LimpiarHTML(); //Elimnamos todo el HTML
        })
    }
    
    //Funciones
    function agregarCurso(e){
        e.preventDefault();
    
    
        if(e.target.classList.contains('agregar-carrito')){
            const cursoSeleccionado = e.target.parentElement.parentElement;
            
    
            leerDatosCurso(cursoSeleccionado);
        }
    }
    
    //Elimina un curso del carrito
    function eliminarCurso(e){
        if(e.target.classList.contains('borrar-curso')){
            const cursoId = e.target.getAttribute('data-id');
    
            //Elimina del arrego de articulosCarrito por el data-id
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId); 
    
            carritoHTML(); //Iterar sobre el carrito y mostrar el HTML
        }
    }
    
    //Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
    function leerDatosCurso(curso){
        // console.log(curso);
    
        //Crear un objeto con el contenido del curso actual
        const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
    
        //Revisa si un elemento ya existe en el carrito
        const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
        if(existe){
            //Actualizamos la cantidad
            const cursos = articulosCarrito.map(curso => {
                if(curso.id === infoCurso.id){
                    curso.cantidad++;
                    return curso;//retorna el objeto actuaizado
                } else{
                    return curso; //retorna los objetos que nos son los duplicados
                }
            });
            articulosCarrito =[...cursos];
        } else{
            //Agregar elementos al arreglo de carrito
            articulosCarrito = [...articulosCarrito, infoCurso];
        }
    
        console.log(articulosCarrito);
    
        carritoHTML();
    }
    
    function carritoHTML(){
        LimpiarHTML();
    
        articulosCarrito.forEach(curso =>{
            const{imagen, titulo, precio, cantidad, id} = curso;
            const row = document.createElement('tr');
            row.innerHTML= `
            <td>
                <img src = "${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href ="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
    
        `;
        
            //Agregar el HTML del carrito en el tbody
            contenedorCarrito.appendChild(row);
        })
    }
    
    //Elimina los cursos del tbody
    function LimpiarHTML() {
        //Forma lenta
        // contenedorCarrito.innerHTML = '';
    
        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    }

window.addEventListener("keydown",(e)=>{
    if(e.key=="+"){
        increment()
    }
    else if(e.key=="-"){
        decrement()
    }
})


let count=0;
const valor=document.getElementById("valor")

function increment(){
    //alert("incremento")
    count+=1;
    //localstorage.setItem("contador",contador)
    valor.innerHTML=count
}
function decrement(){
    //alert("decremento")
    if(count>0){
        count-=1;
        valor.innerHTML=count;
    }else{
        count=0;
        valor.innerHTML=count;
    }
}
function reset(){
    count=0;
    valor.innerHTML=count;
}