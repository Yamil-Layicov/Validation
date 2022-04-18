let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');



// function meyve(alma,num){
//     for(let i=0; i<num; i++){
//         console.log(alma);
//     }
// }

// meyve('nar',12);

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(password.value.length>6){
        document.getElementById('texta').style.visibility = 'hidden';
        document.getElementById('check').style.visibility = 'visible'; 
           
    }else{
        document.getElementById('texta').style.visibility = 'visible';
        document.getElementById('check').style.visibility = 'hidden'; 
        document.getElementById('error').style.visibility = 'visible';  
    }

    function isEmail(email){
        var pattern = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        return pattern.test(email);
    }

    if(isEmail(email.value) == false){
       document.getElementById('invalid').style.visibility = 'visible';
       document.getElementById('checke').style.visibility = 'hidden';
    }else{
        document.getElementById('invalid').style.visibility = 'hidden';
        document.getElementById('checke').style.visibility = 'visible';
    }

    if(username.value[0].toUpperCase() == username.value[0]){
        console.log('balaca');
    }else{
        console.log('boyuk');
    }
})




