const resultado = document.querySelector(".resultado");
const visor = document.querySelector(".visor");
const botones = document.querySelectorAll(".boton");


botones.forEach(boton => {

    boton.addEventListener("click", () => {
        console.log(boton.textContent);

        const tipoBoton = boton.getAttribute("class")

        console.log(tipoBoton)

      
        if (tipoBoton == "boton") {
            if(visor.textContent.length<7){
                visor.textContent = visor.textContent + boton.textContent

                resultado.style.backgroundColor = visor.textContent
            }
          else{
            alert("SOLO SE PUEDE PONER 6 CARACTERES")
            visor.style.backgroundColor = visor.textContent
          }

        }
        else {
            visor.textContent = visor.textContent.substring(0,visor.textContent.length-1)
        
        }



    });
});