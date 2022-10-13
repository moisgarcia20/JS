const mostrarReloj=()=>{
    let fecha=new Date();
    //Extraigo hora, minutos y segundo
    let hr=formatoHora(fecha.getHours());
    let min=formatoHora(fecha.getMinutes());
    let seg=formatoHora(fecha.getSeconds());
    //Recuperamos la hora, min y 
    
    document.getElementById("hora").innerHTML=`${hr}:${min}:${seg}`

    const meses=["En", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    const dias=["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"]
    let diaSem=dias[fecha.getDay()]
    let dia=fecha.getDate()
    let mes=meses[fecha.getMonth()]
    let fechaTexto=`${diaSem}, ${dia} ${mes}`;
    document.getElementById("fecha").innerHTML=fechaTexto;
    
    //Se recupera todas las clases en donde se aplica ese estilo
    // toggle funciona como un interruptor, se apaga y se prende
    //document.getElementById("contenedor").classList.toggle(`animar`)
} 

const formatoHora=(hora)=>{
        if(hora<10){
            hora="0" + hora
            
        }
        return hora
}

setInterval(mostrarReloj,1000)