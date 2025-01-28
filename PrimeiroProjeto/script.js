function showForm(formType) {
    const loginForm = document.getElementById('login-form');
    const cadastroForm = document.getElementById('cadastro-form');
    
    if (formType === 'login') {
        loginForm.classList.remove('hidden');
        cadastroForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        cadastroForm.classList.remove('hidden');
    }
}