const username = document.querySelector("#email")
const passwd= document.querySelector("#senha")
const submit = document.querySelector("login") 

submit.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("voce click")
    firebase.auth().signInWithEmailAndPassword(username.value, passwd.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert("Senha e/ou Usuário Incorreto(s)");
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
    })
