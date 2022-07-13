const user=JSON.parse(localStorage.getItem('user'));
const loginForm=document.getElementById('login');
const logoutForm=document.getElementById('logout');
const currentPath=window.location.pathname.split('/');
const currentSearch=window.location.search;
const mangaOnline=document.getElementById('mangaOnline');
const newestManga=document.getElementById('newestManga');
const loginpath=document.getElementById('login');
const register=document.getElementById('register');
if(currentPath[2]=='index.php'){
    mangaOnline.classList.add('active');
}else{
    mangaOnline.classList.remove('active');
}
if(currentPath[2]=='newest.php'){
    newestManga.classList.add('active');
}else{
    newestManga.classList.remove('active');
}
if(currentPath[2]=='login.php'){
    loginpath.classList.add('active');
}else{
    loginpath.classList.remove('active');
}
if(currentPath[2]=='register.php'){
    register.classList.add('active');
}else{
    register.classList.remove('active');
}

if(user){
    loginForm.classList.add('hidden');
    logoutForm.classList.remove('hidden');
    register.classList.add('hidden');
}else{
    logoutForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    register.classList.remove('hidden');
}
logoutForm.children[0].addEventListener('click',function(){
    localStorage.removeItem('user');
    document.cookie = "LoginId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
   if(!currentSearch){
    window.location.href=`index.php`;
   }else{
    window.location.href=`${currentPath[2]+''+currentSearch}`;
   }

})