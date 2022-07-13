const baseUrl = "http://127.0.0.1:8000/api";
const signinbtn = document.querySelector(".signinbtn");
let alertBox = document.querySelector(".alertbox");
let alertOutput = "";
// const path=window.location.pathname.split('/');
// const search=window.location.search;
signinbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let emailValue = document.getElementById("email").value;
  let passwordValue = document.getElementById("password").value;
  if(emailValue==""){
    alertOutput = `<div class="alert alert-danger loginAlert" role="alert">
         Email is required!
      </div>`;
      alertBox.innerHTML=alertOutput;
      setTimeout(()=>{
        alertBox.innerHTML="";
    },1500)
        return;
  }else if(passwordValue==""){
    alertOutput = `<div class="alert alert-danger loginAlert" role="alert">
        Password is required
      </div>`;
      alertBox.innerHTML=alertOutput;
      setTimeout(()=>{
        alertBox.innerHTML="";
    },1500)
      return
  }else{
    axios
    .post(`${baseUrl}/msmanga/login`, {
      email: emailValue,
      password: passwordValue,
    })
    .then((resp) => {
      if (resp.data.message) {
        alertOutput = `<div class="alert alert-success loginAlert" role="alert">
         ${resp.data.message}
      </div>`;
      alertBox.innerHTML=alertOutput;
      }else if(resp.data.error){
        alertOutput=`<div class="alert alert-danger loginAlert" role="alert">
        ${resp.data.error}
        </div>`;
        alertBox.innerHTML=alertOutput;
        setTimeout(()=>{
            alertBox.innerHTML="";
        },1500)
     return;
      }
       setTimeout(()=>{
        alertBox.innerHTML="";
        document.cookie = `LoginId=${resp.data.data.id}`;
        localStorage.setItem('user', JSON.stringify(resp.data.data));
        window.location.replace(document.referrer)
       },1500);
    })
    .catch((resp)=>{
        console.log(resp);
    })
  }
  
});

