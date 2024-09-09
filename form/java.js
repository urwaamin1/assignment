
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('demo').addEventListener('click', function() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            console.log('Username:', username);
            console.log('Password:', password);
        });
    });
