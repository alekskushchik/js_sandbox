import randomEmail from 'random-email';
import emailValidator from 'email-validator'; 

const generate = document.getElementById('generate');
const popup = document.getElementById('popup');
const email = document.getElementById('email');

	generate.addEventListener('click', (event) => {
        popup.style.display = "block";
        email.value = randomEmail({domain: 'gmail.com'});
    });

    document.getElementById('close').addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
    })

    document.getElementById('validateEmail').addEventListener('change',()=>{
        if(emailValidator.validate(document.getElementById('validateEmail').value)){
            document.getElementById('validateEmail').style.border = '2px solid green';
        } else {
            document.getElementById('validateEmail').style.border = '2px solid red';
        }
    })
    document.getElementById('validateEmail').addEventListener('keyup',()=>{
        if (emailValidator.validate(document.getElementById('validateEmail').value)){
            document.getElementById('validateEmail').style.border = '2px solid green';
        }else {
            document.getElementById('validateEmail').style.border = '2px solid red';
        }
    })
