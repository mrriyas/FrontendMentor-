/*
document.addEventListener('DOMContentLoaded', () => {
    const App = () => {
        const getFirstName = document.getElementById("firstName");
        const getSecondName = document.getElementById("secondName");
        const getEmail = document.getElementById("email");
        const getPassword = document.getElementById("password");
        const getSubmitButton = document.getElementById("sub-btn");
        const getErrorFirst = document.getElementById("errorFirst");
        const getErrorSecond = document.getElementById("errorSecond");
        const getErrorEmail = document.getElementById("errorEmail");
        const getErrorPassword = document.getElementById("errorPassword");
        const getErrorMsg = document.querySelector(".errorMsg p");
        console.log(getErrorMsg);

        const checkingValidation = () => {

            if (getFirstName.value === "") {
                getErrorFirst.innerHTML = "First Name cannot be empty";
                
            } else if(getSecondName ==="") {
                getErrorSecond.innerHTML = "Last Name cannot be empty";
                console.log(getError);
              
            }   else if(getEmail===""){
                    getErrorEmail.innerHTML ="Email cannot be empty";

            }  else if(getPassword===""){
                getErrorPassword.innerHTML ="password cannot be empty";
                
        }else {
                getErrorMsg.style.display= "none";
            }
        };
        const looping = ()=> {
            for(i=0; i<=4;i++ ){
                return checkingValidation();
            }
        };
        getSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
            looping();
        });
    };

    App();
});

*/


document.addEventListener('DOMContentLoaded', () => {
    const App = () => {
        const getFirstName = document.getElementById("firstName");
        const getSecondName = document.getElementById("secondName");
        const getEmail = document.getElementById("email");
        const getPassword = document.getElementById("password");
        const getSubmitButton = document.getElementById("sub-btn");
        const getErrorFirst = document.getElementById("errorFirst");
        const getErrorSecond = document.getElementById("errorSecond");
        const getErrorEmail = document.getElementById("errorEmail");
        const getErrorPassword = document.getElementById("errorPassword");
        const getErrorMsg = document.querySelector(".errorMsg p");

        const clearErrors = () => {
            getErrorFirst.innerHTML = "";
            getErrorSecond.innerHTML = "";
            getErrorEmail.innerHTML = "";
            getErrorPassword.innerHTML = "";
        };

        const checkingValidation = () => {
            clearErrors();

            let hasError = false;

            if (getFirstName.value === "") {
                getErrorFirst.innerHTML = "First Name cannot be empty";
                hasError = true;
            }
            if (getSecondName.value === "") {
                getErrorSecond.innerHTML = "Last Name cannot be empty";
                hasError = true;
            }
            if (getEmail.value === "") {
                getErrorEmail.innerHTML = "Email cannot be empty";
                hasError = true;
            }
            if (getPassword.value === "") {
                getErrorPassword.innerHTML = "Password cannot be empty";
                hasError = true;
            }

            if (!hasError) {
                console.log("Form submitted successfully");
            }
        };

        getSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
            checkingValidation();
        });
    };

    App();
});



