const form  = document.querySelector('form');
const pass_error = document.querySelector('#passerror');
const name_error = document.querySelector('#namerror');
const submit = document.querySelector('#submit_message');

form.addEventListener('submit', (e) => {
    is_ok = true;
  e.preventDefault();
  console.log('Form Submitted');

  const formData = new FormData(e.target);
    const data = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    if(data.username){
        console.log(data.username.length);
        if(data.username.length<3){
            is_ok = false;
            name_error.textContent = 'Username must be at least 3 characters long';
        }
    }

    if(data.password){
        if(data.password.length<8){
            is_ok = false;
            pass_error.textContent = 'Password must be at least 8 characters long';
        }
    }

    if(is_ok){
        form.reset();
        submit.textContent = 'Signup successful!';
    }

}); 