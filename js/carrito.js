

class Producto {
    constructor(obj) {
        this.id = parseInt(obj.id);
        this.lenguaje = obj.lenguaje;
        this.titulo = obj.titulo;
        this.autor = obj.autor;
        this.anio = obj.anio;
        this.precio = parseInt(obj.precio);
        this.imagen = obj.imagen;
    }
}

const almacenados = JSON.parse(localStorage.getItem('basejson')); 
const base = [];

for (const objeto of almacenados) 
    base.push(new Producto(objeto));

let canti=localStorage.getItem('cant_libros')
let cantidad=parseInt(canti)
let libros_agre=localStorage.getItem('libros_agregados')
let libros_agregados = Array.from(libros_agre.split(","));
let precios_agre=localStorage.getItem('precios_agregados')
let precios_agregados = Array.from(precios_agre.split(","));

mostrar_carrito()

function mostrar_carrito() {
    if (cantidad==0) {
        let mensaje=document.getElementById("resultado_carr")
        mensaje.innerHTML="No hay libros agregados al carrito"
    } else {
        let mensaje=document.getElementById("resultado_carr")
        mensaje.innerHTML="Mostrando " + cantidad + " libro(s) agregados"

        for (libro of libros_agregados) {
            const elemento = document.createElement("div");
            elemento.className = "product_container";
            texto1 = base[parseInt(libro)-1].titulo
            texto2 = base[parseInt(libro)-1].autor
            texto3 = base[parseInt(libro)-1].anio
            texto4 = base[parseInt(libro)-1].precio
            texto5 = "."+base[parseInt(libro)-1].imagen
            texto6 = base[parseInt(libro)-1].id

            elemento.innerHTML=`<div class="item"><img src=${texto5} /></div>
                            <div class="item">
                            <b>Título:</b> ${texto1}<br>
                            <b>Autor:</b> ${texto2}<br>
                            <b>Año:</b> ${texto3}<br>
                            <b>Precio:</b> ${texto4}<br>
                            <button class="item" type="button" id="${texto6}" onclick="elimina(${texto6},${texto4})">Eliminar</button>
                            </div>`

            mensaje.appendChild(elemento)
        }
        //update_carrito()
    }    
}

function elimina(id,precio) {
    id2=id.toString()
    precio2=precio.toString()
    let libros_agregados3 = []
    for (i of libros_agregados) {
        if (i==id2) {
            continue
        } else {
            libros_agregados3.push(i)
        }
    }
    let precios_agregados3 = []
    for (j of precios_agregados) {
        if (j==precio2) {
            continue
        } else {
            precios_agregados3.push(j)
        }
    }
    libros_agregados.length=0
    precios_agregados.length=0
    for (let i=0; i<=precios_agregados3.length ; i++) {
        libros_agregados.push(libros_agregados3[i])
        precios_agregados.push(precios_agregados3[i])
    }
    libros_agregados.pop()
    precios_agregados.pop()
    cantidad=cantidad-1
    
    localStorage.setItem('cant_libros',cantidad)
    localStorage.setItem('libros_agregados',libros_agregados)
    localStorage.setItem('precios_agregados',precios_agregados)
    mostrar_carrito()
    update_carrito()
}

function update_carrito() {
    let c=document.getElementById("carrito2")
    if (cantidad>0) {
        let total=0
        for (precio of precios_agregados) {
            total=total+parseInt(precio)
        }
        let texto="Ver el carrito (" + cantidad + ") " + total + " $ 🛒"
        c.innerHTML=texto
    } else {
        let texto="Ver el carrito (0) 0 $ 🛒"
        c.innerHTML=texto
    }
}