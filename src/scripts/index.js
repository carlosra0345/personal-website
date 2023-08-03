require('dotenv').config()

function sendEmail(){
    Email.send({
        secureToken: process.env.SMPT_API_SECURE_TOKEN,
        To : 'carlosra0345@gmail.com',
        From : document.getElementById("user-email").value,
        Subject : "New Contact Form from" + document.getElementById("user-name").value,
        Body : "Name: " + document.getElementById("user-name").value 
            + "<br> Email: " + document.getElementById("user-email").value 
            + "<br> Email: " + document.getElementById("user-message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}