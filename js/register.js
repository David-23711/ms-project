const baseUrl = "http://127.0.0.1:8000/api";
const regbtn = document.querySelector(".regbtn");
let alertBox = document.querySelector(".alertbox");
let alertOutput = "";
regbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let nameValue = document.querySelector(".name").value;
  let emailValue = document.querySelector(".email").value;
  let passwordValue = document.querySelector(".password").value;
  let conpasValue = document.querySelector(".conpas").value;
  let phoneValue = document.querySelector(".ph").value;
  let roleValue='user';
  if(passwordValue != conpasValue){
    alertOutput=`<div class="alert alert-danger loginAlert" role="alert">
   Confirm Password Not Match
 </div>`;
 alertBox.innerHTML=alertOutput;
 setTimeout(()=>{
    alertBox.innerHTML="";
},1500)
  return;
  }
  axios
    .post(`${baseUrl}/msmanga/register`, {
      name:nameValue,
      email: emailValue,
      password: passwordValue,
      phone:phoneValue,
      role:roleValue
    })
    .then((resp) => {
      if (resp.data.message) {
        alertOutput = `<div class="alert alert-success loginAlert" role="alert">
         ${resp.data.message}
      </div>`;
      alertBox.innerHTML=alertOutput;
      setTimeout(()=>{
        alertBox.innerHTML="";
    },1500)
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
        // window.location.replace(document.referrer)
        window.location.href="index.php"
       },1500);
    })
    .catch((error)=>{

        if(error.response.data.error.name){
          alertOutput = `<div class="alert alert-danger loginAlert" role="alert">
          ${error.response.data.error.name[0]}
       </div>`;
       alertBox.innerHTML=alertOutput;
        }else if(error.response.data.error.email){
          alertOutput = `<div class="alert alert-danger loginAlert" role="alert">
          ${error.response.data.error.email[0]}
       </div>`;
       alertBox.innerHTML=alertOutput;
        }else if(error.response.data.error.password){
          alertOutput = `<div class="alert alert-danger loginAlert" role="alert">
          ${error.response.data.error.password[0]}
       </div>`;
       alertBox.innerHTML=alertOutput;
        }else if(error.response.data.error.phone){
          alertOutput = `<div class="alert alert-danger loginAlert" role="alert">
          ${error.response.data.error.phone[0]}
       </div>`;
       alertBox.innerHTML=alertOutput;
        }
        setTimeout(()=>{
          alertBox.innerHTML="";
      },1500)
    })
});

      // window.history.back();
        // window.location.href = document.referrer;
        // if(!search){
        //   window.location.href=`index.php`;
        // }else{
        //   window.location.href=`${path[2]+''+search}`;
        // }