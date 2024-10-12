/////////////////////////////////////////////////////
// Aplicación de e-commerce de libros de computación
/////////////////////////////////////////////////////


const base = [
    {
        id : 1,
        lenguaje : "python",
        titulo : "Python for Data Science: A Hands-On Introduction",
        autor : "Yuli Vasiliev",
        anio : "2022",
        precio : 55,
        imagen : "./img/python01.jpg"
    },
    {
        id : 2,
        lenguaje : "python",
        titulo : "Python Crash Course, 2nd Edition",
        autor : "Eric Matthes",
        anio : "2019",
        precio : 56,
        imagen : "./img/python02.jpg"
    },
    {
        id : 3,
        lenguaje : "python",
        titulo : "The Big Book of Small Python Projects: 81 Easy Practice Programs",
        autor : "Al Sweigart",
        anio : "2021",
        precio : 57,
        imagen : "./img/python03.jpg"
    },
    {
        id : 4,
        lenguaje : "python",
        titulo : "Impractical Python Projects: Playful Programming Activities ",
        autor : "Lee Vaughan",
        anio : "2018",
        precio : 58,
        imagen : "./img/python04.jpg"
    },
    {
        id : 5,
        lenguaje : "python",
        titulo : "Serious Python",
        autor : "Julien Danjou",
        anio : "2018",
        precio : 59,
        imagen : "./img/python05.jpg"
    },

    {
        id : 6,
        lenguaje : "javascript",
        titulo : "JavaScript Crash Course",
        autor : "Nick Morgan",
        anio : "2024",
        precio : 65,
        imagen : "./img/js01.jpg"
    },    
    {
        id : 7,
        lenguaje : "javascript",
        titulo : "JavaScript for Kids: A Playful Introduction to Programming",
        autor : "Nick Morgan",
        anio : "2014",
        precio : 66,
        imagen : "./img/js02.jpg"
    },    
    {
        id : 8,
        lenguaje : "javascript",
        titulo : "Eloquent JavaScript, 4th Edition",
        autor : "Marijn Haverbeke",
        anio : "2024",
        precio : 67,
        imagen : "./img/js03.jpg"
    },    
    {
        id : 9,
        lenguaje : "javascript",
        titulo : "La Guia Básica de JavaScript",
        autor : "Miguel A. Arias",
        anio : "2013",
        precio : 68,
        imagen : "./img/js04.jpg"
    },    
    {
        id : 10,
        lenguaje : "javascript",
        titulo : "Creación de componentes en JavaScript Curso practico",
        autor : "Pablo E. Fernández Casado",
        anio : "2023",
        precio : 69,
        imagen : "./img/js05.jpg"
    },    

    {
        id : 11,
        lenguaje : "sql",
        titulo : "SQL para Principiantes",
        autor : "Preston Prescott",
        anio : "2015",
        precio : 75,
        imagen : "./img/sql01.jpg"
    },    
    {
        id : 12,
        lenguaje : "sql",
        titulo : "Aprende SQL",
        autor : "María Mercedes Marqués Andrés, Gregorio Quintana Ortí",
        anio : "2008",
        precio : 76,
        imagen : "./img/sql02.jpg"
    },    
    {
        id : 13,
        lenguaje : "sql",
        titulo : "Practical SQL, 2nd Edition",
        autor : "Anthony DeBarros",
        anio : "2022",
        precio : 77,
        imagen : "./img/sql03.jpg"
    },   
    
    {
        id : 14,
        lenguaje : "c++",
        titulo : "Programación orientada a objetos con C++, 5ª edición.",
        autor : "Fco. Javier Ceballos Sierra",
        anio : "2020",
        precio : 85,
        imagen : "./img/c++01.jpg"
    },    
    {
        id : 15,
        lenguaje : "c++",
        titulo : "C/C++ Curso de programación. 5a. Edición",
        autor : "Francisco Javier Ceballos",
        anio : "2022",
        precio : 86,
        imagen : "./img/c++02.jpg"
    }, 
    {
        id : 16,
        lenguaje : "c++",
        titulo : "C++ cómo programar",
        autor : "Harvey M. Deitel, Paul J. Deitel",
        anio : "2015",
        precio : 87,
        imagen : "./img/c++03.jpg"
    },    

    {
        id : 17,
        lenguaje : "c#",
        titulo : "Aprende a programar en C#",
        autor : "Ángel Arias",
        anio : "2014",
        precio : 95,
        imagen : "./img/cs01.jpg"
    },   
    {
        id : 18,
        lenguaje : "c#",
        titulo : "Microsoft C#. Lenguaje y Aplicaciones. 2ª Edición.",
        autor : "Fco. Javier Ceballos Sierra",
        anio : "2007",
        precio : 96,
        imagen : "./img/cs02.jpg"
    }
] 

const basejson = JSON.stringify(base);
localStorage.setItem('basejson',basejson)

// Variables globales
let a = 0
let resultados = []
let libros_agregados = []
let precios_agregados = []
let cant_libros = 0

// Detecta datos previamente guardados en el storage
let cant=localStorage.getItem('cant_libros')
if (parseInt(cant)>0) {
    cant_libros=cant
    let libros_agre=localStorage.getItem('libros_agregados')
    libros_agregados = Array.from(libros_agre.split(","));
    precios_agre=localStorage.getItem('precios_agregados')
    precios_agregados= Array.from(precios_agre.split(","));
    update_carrito()
}

// Comienzo
let boton_buscar=document.getElementById("boton_buscar")

boton_buscar.onclick = () => {
    texto=document.getElementById("lenguaje").value
    let salida=document.getElementById("resultado")
    switch (texto.toLowerCase()) {
        case "python":
            a=base.filter(e => e.lenguaje == "python")
            salida.innerHTML="Mostrando "+ a.length +" resultados de Python"
            resultados=mostrar_libros(a)
            break
        case "javascript":
            a=base.filter(e => e.lenguaje == "javascript")
            salida.innerHTML="Mostrando "+ a.length +" resultados de Javascript"
            resultados=mostrar_libros(a)
            break
        case "sql":
            a=base.filter(e => e.lenguaje == "sql")
            salida.innerHTML="Mostrando "+ a.length +" resultados de SQL"
            resultados=mostrar_libros(a)
            break
        case "c++":
            a=base.filter(e => e.lenguaje == "c++")
            salida.innerHTML="Mostrando "+ a.length +" resultados de C++"
            resultados=mostrar_libros(a)
            break
        case "c#":
            a=base.filter(e => e.lenguaje == "c#")
            salida.innerHTML="Mostrando "+ a.length +" resultados de C#"
            resultados=mostrar_libros(a)
            break
        default:
            salida.innerHTML="No encontrado. Ingrese nuevamente"
    }
}

function mostrar_libros(libros) {
    let etiqueta = document.getElementById("resultado")
    for (let libro of libros) {

        const elemento = document.createElement("div");
        elemento.className = "product_container";
        texto1 = libro.titulo
        texto2 = libro.autor
        texto3 = libro.anio
        texto4 = libro.precio
        texto5 = libro.imagen
        texto6 = libro.id

        elemento.innerHTML=`<div class="item"><img src=${texto5} /></div>
                        <div class="item">
                        <b>Título:</b> ${texto1}<br>
                        <b>Autor:</b> ${texto2}<br>
                        <b>Año:</b> ${texto3}<br>
                        <b>Precio:</b> ${texto4}<br>
                        <button class="item" type="button" id="${texto6}" onclick="agrega(${texto6})">Agregar al carrito</button>
                        </div>`
        
        etiqueta.appendChild(elemento)
    }
}

function agrega(id_agregado) {
    cant_libros++;
    libros_agregados.push(id_agregado)
    precios_agregados.push(base[id_agregado-1].precio)
    localStorage.setItem('cant_libros',cant_libros)
    localStorage.setItem('libros_agregados',libros_agregados)
    localStorage.setItem('precios_agregados',precios_agregados)
    update_carrito()
}

function update_carrito() {
    let c=document.getElementById("carrito")
    let total=0
    for (precio of precios_agregados) {
        total=total+parseInt(precio)
    }
    let texto="Ver el carrito (" + cant_libros + ") " + total + " $ 🛒"
    c.innerHTML=texto
}

//Boton Vaciar carrito
let boton_reset=document.getElementById("boton_reset")

boton_reset.onclick = () => {
    libros_agregados.length=0
    precios_agregados.length=0
    cant_libros = 0
    localStorage.setItem('cant_libros',cant_libros)
    localStorage.setItem('libros_agregados',libros_agregados)
    localStorage.setItem('precios_agregados',precios_agregados)
    let c=document.getElementById("carrito")
    let texto="Ver el carrito (0) 0 $ 🛒"
    c.innerHTML=texto
}
