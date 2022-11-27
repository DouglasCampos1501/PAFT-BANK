const buttonLogin = document.getElementById('buttonLogin');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const emailLogin = 'paft@bank.com'
const passwordLogin = '123'

buttonLogin.addEventListener('click', () => {
  event.preventDefault()

  const loginEmail = inputEmail.value.trim()
  const loginPassword = inputPassword.value.trim()

  if (loginEmail === '' || loginPassword === '') {
    alert('Por favor é obrigatótio preencher o EMAIL e SENHA')
    return
  }

  if (loginEmail == 'paft@bank.com' || loginPassword == '123') {
    window.open('index.html', '_self');
    return
  } else {
    console.log(loginEmail)
    console.log(loginPassword)
    alert('Dados incorretos, verifique')
    return
  }

})