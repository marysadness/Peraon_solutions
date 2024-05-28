var db = [
    {
        "email": "mary1234may@yandex.ru",
        "password": "qwerty"
    },

    {
        "email": "maryfigma@yandex.ru",
        "password": "zxcvbn"
    }

]

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var feedback = document.getElementById('feedback');
    var feedback1 = document.getElementById('feedback1');
    var feedback2 = document.getElementById('feedback2');
    var feedback3 = document.getElementById('feedback3');
    valid = true;
    feedback.innerHTML = '';
    feedback1.innerHTML = '';
    feedback2.innerHTML = '';
    feedback3.innerHTML = '';
    const user = db.find(user => user.email === email);
    if (user) {
        feedback1.innerHTML += 'The email is used.<br>';
        valid = false;
    }
    

    if (email == '') {
        feedback1.innerHTML += 'This field is empty.<br>';
        valid = false;
    }
    

    if (password == '') {
        feedback2.innerHTML += 'This field is empty.<br>';
        valid = false;
    }
    else {
        if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
            feedback2.innerHTML += 'The password is too simple. Must contain letters and numbers.<br>';
            valid = false;
        }
    }

    if (username == '') {
        feedback.innerHTML += 'This field is empty.<br>';
        valid = false;
    }
    else {
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            feedback.innerHTML += 'The username contains invalid characters.<br>';
            valid = false;
        }
    }

    

    if (password !== confirmPassword) {
        feedback3.innerHTML += 'Password mismatch.<br>';
        alert(password,confirmPassword);
        valid = false;
    }
    if (valid == true) {
        alert('You are successfully registered');
        return valid;
    }

    return valid;
}


// Функция для проверки соответствия email и пароля
function checkdb() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var feedback = document.getElementById('feedback');
    valid = true;
    feedback.innerHTML = '';
    
    const user = db.find(user => user.email === email);
    if (user) {
        if (user.password === password) {
            alert('You are successfully registered');
            return valid;
        }
        else {
            feedback.innerHTML += 'Invalid password entered.<br>';
            valid = false;
        }
    } else {
        feedback.innerHTML += 'This user is not registered.<br>';
            return valid;
    };
    return valid;
}