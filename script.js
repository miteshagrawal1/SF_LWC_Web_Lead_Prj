function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value,
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);


let captchaChecked = false;
function captchaSuccess(){
    captchaChecked = true;
}

function checkRequirements(e){
    if(captchaChecked == false){
        alert('check recaptcha box');
        e.preventDefault();
    }
}