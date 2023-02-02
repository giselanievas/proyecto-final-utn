
//SCRIPT DE VIDEO////

let video=document.querySelector(".video")


const iniciar=()=>{
   
    document.querySelector("#duracion").innerText="Duración video "+video.duration.toFixed(2);
    video.play()
    
}
const pausar=()=>{
    video.pause()
}


///SCRIPT DE JUEGO////



let arreglo =["","",""]



const prevenirDefault =(evento)=>{
    evento.preventDefault()
};


///drag
const inicioDeArraste=(evento)=>{

    evento.dataTransfer.setData("Text",evento.target.id);
 

};


const soltarElemento =(evento)=>{
    if (arreglo[parseInt(evento.target.id)]==""){
        var data = evento.dataTransfer.getData("text");
        arreglo[parseInt(evento.target.id)]=data;
        evento.target.appendChild(document.getElementById(data));
     
       
    }
    if(arreglo[0]!="" && arreglo [1]!="" && arreglo[2]!=""){
        if (arreglo[0]=="img1" && arreglo[1]=="img2" && arreglo[2]=="img3"){
            document.querySelector("h4").innerHTML="Excelente! Lo Lograste!";
        }else{
            document.querySelector("h4").innerHTML="No te desanimes, vuelve a intentarlo!"; 
        }
        }
    
     
};



const reinicio=()=>{

    window.location.reload();
  
}