
function toggleSenhaVisibility() {
    var senhaInput = document.getElementById("senha");
    var toggleIcon = document.querySelector(".senha-toggle");
    
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      senhaInput.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  }
  


function entrar() {
    var loginInput = document.getElementById("login");
    var labelLogin = document.getElementById("labelLogin");
    var loginError = document.getElementById("loginError");
  
    var senhaInput = document.getElementById("senha");
    var labelSenha = document.getElementById("labelSenha");
    var senhaError = document.getElementById("senhaError");
  
    if (loginInput.value === "") {
      loginError.innerHTML = "*Por favor, digite seu Login";
      loginInput.style.borderColor = "red";
      labelLogin.classList.add("error-label");
      loginInput.focus();
      return false;
    } else {
      loginError.innerHTML = "";
      loginInput.style.borderColor = "";
      labelLogin.classList.remove("error-label");
    }
  
    if (senhaInput.value === "") {
      senhaError.innerHTML = "*Por favor digite a sua senha*";
      senhaInput.style.borderColor = "red";
      labelSenha.classList.add("error-label");
      senhaInput.focus();
      return false;
    } else {
      senhaError.innerHTML = "";
      senhaInput.style.borderColor = "";
      labelSenha.classList.remove("error-label");
    }
  
    var cadastroJSON = localStorage.getItem("cadastro");
  
  
    var cadastro = JSON.parse(cadastroJSON);
  
    if (cadastro && cadastro.login === loginInput.value) {
      if (cadastro.senha === senhaInput.value) {
        localStorage.setItem("login", loginInput.value);
        window.location.href = "http://127.0.0.1:5501/index.html";
      } else {
        loginError.innerHTML = "";
        loginInput.style.borderColor = "";
        labelLogin.classList.remove("error-label");
        senhaError.innerHTML = "*Senha incorreta*";
        senhaInput.style.borderColor = "red";
        labelSenha.classList.add("error-label");
      }
    } else {
      loginError.innerHTML = "*Login incorreto*";
      loginInput.style.borderColor = "red";
      labelLogin.classList.add("error-label");
      senhaError.innerHTML = "";
      senhaInput.style.borderColor = "";
      labelSenha.classList.remove("error-label");
    }
  }
  