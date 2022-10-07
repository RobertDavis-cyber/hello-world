'use strict'

function checkPassword() {
    var password = document.getElementByID("passwordBox");
    var passwordText = password.value;
    if(passwordText == "Seattle102") {
        return true;
    }
    alert("Access denied!  Incorrect password!");
    return false;   
}

  function sayHello(name) {
    alert("Hello, " + name);
}
sayHello("Rad Student!");
}


    }
    
}