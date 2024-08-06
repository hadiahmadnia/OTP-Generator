function otpGenerate(){
    let otpShow = document.getElementById("otp");
    let digits = "0123456789";
    let otp = "";

    for(let i = 1; i <= 6; i++){
        otp += digits[Math.floor(Math.random() * 10)];
    }

    otpShow.innerHTML = "<span></span>";

    document.getElementById("otp").style.color = "white";
    document.getElementById("otp").style.cursor = "pointer";

    setTimeout(() => {
        otpShow.innerHTML = otp;
    }, 1000);
}

var copying = document.getElementById("otp");

copying.addEventListener('click', () =>{
    var text = copying.textContent;
    alert("Your code has been copied😊");
    navigator.clipboard.writeText(text);
})
