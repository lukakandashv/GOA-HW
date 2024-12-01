
const form = document.getElementById('myForm');

function formSubmit() {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.pass.value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);

    form.reset();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formSubmit();
})