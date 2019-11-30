const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const telefon = document.getElementById('telefon');
const send = document.getElementById('send');

//signatures
const signName = document.getElementById('signName');
const signEmail = document.getElementById('signEmail');
const signTelefon = document.getElementById('signTelefon');
const signMessage = document.getElementById('signMessage');


name.addEventListener('keyup', (e) => {
    initialState.name =  e.currentTarget.value;
    initialState.isReady.name = initialState.name.length >= 2;
    
})

email.addEventListener('keyup', (e) => {
    initialState.email =  e.currentTarget.value;
    initialState.isReady.email = patternEmail.test(initialState.email);
})

telefon.addEventListener('keyup', (e) => {
    initialState.telefon =  e.currentTarget.value;
    initialState.isReady.telefon = patternTelefon.test(initialState.telefon);
})

message.addEventListener('keyup', (e) => {
    initialState.message =  e.currentTarget.value;
    initialState.isReady.message = initialState.message.length > 10;
})

send.addEventListener('click', (e) => {
    if(initialState.isReady.name && initialState.isReady.email && initialState.isReady.message && initialState.isReady.telefon){
        console.log(ok);
    }
    else{
        e.preventDefault();
        if(!initialState.isReady.name){
            signName.innerHTML = 'поле некоректно заполнено';
            signName.style.display = 'block';
        }
        if(!initialState.isReady.email){
            signEmail.innerHTML = 'поле некоректно заполнено';
            signEmail.style.display ='block';

        }
        if(!initialState.isReady.telefon){
            signTelefon.innerHTML = 'поле некоректно заполнено +7/8 ';
            signTelefon.style.display ='block';
        }
        if(!initialState.isReady.message){
            signMessage.innerHTML = 'поле незаполнено';
            signMessage.style.display ='block';

        }
    }
})

