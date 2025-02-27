let si = document.querySelector('.s-i'); 
let nae = document.querySelector('.name-div'); 
let signupbtn = document.querySelector('.sign-up');
let signinbtn = document.querySelector('.sign-in');
let lostPWD = document.querySelector('.l-p');
let line = document.querySelector('.hr-div');

signinbtn.addEventListener('click', ()=>{
    nae.style.maxHeight = '0';  
    si.innerHTML = 'Sign in';  
    lostPWD.innerHTML= 'lost Password  ';
    signinbtn.classList.remove('disable-button');
    signupbtn.classList.add('disable-button')
    line.style.transform = 'translateX(35px)';
});
signupbtn.addEventListener('click', ()=>{
    nae.style.maxHeight = '60px';  
    si.innerHTML = 'Sign Up';  
    lostPWD.innerHTML= 'Password Suggestion ';
    signupbtn.classList.remove('disable-button');
    signinbtn.classList.add('disable-button');
    line.style.transform = 'translateX(0px)';
});
