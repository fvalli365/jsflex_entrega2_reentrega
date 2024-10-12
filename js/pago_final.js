
let cantidad=localStorage.getItem('cant_libros')
let libros_agre=localStorage.getItem('libros_agregados')
let libros_agregados = Array.from(libros_agre.split(","));
let precios_agre=localStorage.getItem('precios_agregados')
let precios_agregados= Array.from(precios_agre.split(","));


localStorage.removeItem('cant_libros')

localStorage.removeItem('libros_agregados')

localStorage.removeItem('precios_agregados')



