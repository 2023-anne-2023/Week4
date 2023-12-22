const form = document.getElementById("messageForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const formValues = Object.fromEntries(formData);


const response= await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const json= await response.json();
  console.log(json);
});

async function getfeedback(){
    const response= await fetch("http://localhost:8080/messages");
    const messages= await response.json();
    
    messages.forEach(function (feedback){
        const h= document.createElement("h");
        const p= document.createElement("p");
        
        h.textContent = feedback.username;
        p.textContent = feedback.message;

        const messagecontainer = document.getElementById("massagecontainer");

        messagecontainer.appendChild(h);
        messagecontainer.appendChild(p);
   
    });
}
getfeedback();