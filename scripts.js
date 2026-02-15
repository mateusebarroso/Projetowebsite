const form = document.querySelector("#form");
const nome = document.querySelector("#name")
const emailEl = document.querySelector("#gmail");
const askButton = document.querySelector("#send")
const password = document.getElementById("senha-confirmacao");
const enviarFormulario = (evento)=>{
   evento.preventDefault();
   const inputEl = document.querySelectorAll(".required");
 
   askButton.disabled = true;
   askButton.textContent = "Cadastrando..."
   askButton.classList.add("loading")
  try{
    
   }catch(error){
      console.log("Error na aplicação ")
   } finally {
   askButton.disabled = false;
   askButton.textContent = "Cadastrar"
   askButton.classList.remove("loading")
   }
   

}


 form.addEventListener('submit', enviarFormulario)