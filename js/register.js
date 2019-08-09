const email = document.querySelector("#inputEmail4")
const password = document.querySelector("#register-senha")
const co_password = document.querySelector("#co-senha")
const register = document.querySelector("#submit")

register.addEventListener("click", (e) => {
    e.preventDefault()
    if (password.value == co_password.value){
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = "Usuário já cadastrado!";

            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
          })
          
          // [END createwithemail]
        }
    
    else{
        alert("Senha Incorreta")
    }
})
