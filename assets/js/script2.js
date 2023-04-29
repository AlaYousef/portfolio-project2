/**
 * contact us page  handleSubmit function
 */
let form = document.getElementById("feedback-form");
form.addEventListener('submit',handleSubmit);

/**
 * function to handle the click event on submit button and display a confirmation msg
 */
function handleSubmit(event){
    event.preventDefault();
    
    let name = document.getElementById('full-name').value;
    Swal.fire(`Submitted! Thank you '${name}' for your feedback`);

    
    form.reset();
}
/**
 * function to empty the form fields */
function reset(){
    document.getElementById('full-name').innerText = " ";
}
