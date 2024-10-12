let canti=localStorage.getItem('cant_libros')
let cantidad=parseInt(canti)
let libros_agre=localStorage.getItem('libros_agregados')
let libros_agregados = Array.from(libros_agre.split(","));
let precios_agre=localStorage.getItem('precios_agregados')
let precios_agregados= Array.from(precios_agre.split(","));


calcula_costo()

function calcula_costo() {
    let costo_libros=0
    let costo_envio=0
    for (precio of precios_agregados) {
        costo_libros=costo_libros+parseInt(precio)
        costo_envio=costo_envio+5  // Se asume un costo de 5 por libro enviado
    }
    let costo_total=costo_libros+costo_envio
    let mensaje=document.getElementById("resultado_pag")
    mensaje.className = "pago_container";
    if (!isNaN(costo_total)) {
        texto1 = "Costo de " + cantidad + " libro(s) = " + costo_libros.toString()
        texto2 = "Costo de envío = " + costo_envio.toString()
        texto3 = "Costo total = " + costo_total.toString()
        mensaje.innerHTML=`${texto1}<br>
                            ${texto2}<br>
                            ${texto3}`
        
        const elemento = document.createElement("div");
        elemento.className = "pago_container";
        elemento.innerHTML=`<a class="pago" href="./pago_final.html">Efectuar el pago</a>`
        mensaje.appendChild(elemento)
    } else {
        const elemento = document.createElement("div");
        elemento.innerHTML="No hay libros agregados al carrito"
        mensaje.appendChild(elemento)
    }

}