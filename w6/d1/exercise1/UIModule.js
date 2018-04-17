var UIModule = (function(){

var UISelectors = {
    usernameSelector : "#username",
    passwordSelector: "#password",
    errorSelector:"#error-block",
    loginButton:"#login_button"
}

    
    
    var usernameInput = document.querySelector( UISelectors.usernameSelector);
    var passwordInput=document.querySelector( UISelectors.passwordSelector);
    var errorBlock=document.querySelector( UISelectors.errorSelector);



    var status = {
        OK : "OK",
        MISSING_DATA : "Please insert username and/or password",
        WRONG_DATA : "Please check user name and password"
    }
    //dohvati podatke
function getFormData(){

    var formData = {};
    formData.username=usernameInput.value;
    formData.password=passwordInput.value;

    return formData;
}

    //validacija podataka
    function validateData(username,password){
        if(username==""||password==""){
            return status.MISSING_DATA;
        }
        return status.OK;
    }

    //prikaz freske

    function setError(message){
        errorBlock.textContent = message;
    }


    //brisanje gereseke

    function clearError(){
        errorBlock.textContent="";
    }
    return{
        getFormData: getFormData,
        validateData:validateData,
        setError:setError,
        clearError:clearError,
        status:status,
        UISelectors
    }
})();