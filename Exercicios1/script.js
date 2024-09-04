document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("registrationForm");
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError= document.getElementById('nameError');
    const emailError= document.getElementById('emailError');
    const passwordError= document.getElementById('passwordError');
    
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'O nome é obrigatório.';
            nameError.style.display = 'block';
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
        }
    }    
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'E-mail inválido.';
            emailError.style.display = 'block';
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }
    }
    function validatePassword() {
        const password = passwordInput.value;
        if (password.length < 8) {
            passwordError.textContent = 'A senha deve ter pelo menos 8 caracteres.';
            passwordError.style.display = 'block';
        } else {
            passwordError.textContent = '';
            passwordError.style.display = 'none';
        }
    }
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (event) => {
        validateName();
        validateEmail();
        validatePassword();

        if (nameError.textContent || emailError.textContent || passwordError.textContent) {
            event.preventDefault(); // Evita o envio do formulário se houver erros
        }
    });
});
    
