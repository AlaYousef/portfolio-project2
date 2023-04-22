
let form = document.getElementById("feedback-form");
form.addEventListener('submit',handleSubmit);

let errorMsg = document.getElementById("errors");

function handleSubmit(event){
    event.preventDefault();
    
    let name = document.getElementById('full-name').value;
    Swal.fire(`Submitted! Thank you ${name[0]} for your feedback`);
    
    
}
