//KUTE Paths
const tween = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat: 999, duration: 3000, yoyo: true}
)
tween.start();

//Email functionality
(function() {
    emailjs.init('HxL4eu69UX7_3razC');
})();


document.getElementsByClassName("form-container")[0].addEventListener("submit",(event) => {
    event.preventDefault();
    let data = {
        user_name : document.getElementById("user-name").value,
        user_email : document.getElementById("user-email").value,
        user_message : document.getElementById("user-message").value,
    }
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    document.getElementById("user-message").value = "";
    emailjs.send('service_n68lsfu','template_c3luu7g',data).then(function (){
        alert("Success!");
    });
}, function(error) {
    alert.log('Error. Message not Sent',error);
}
)

