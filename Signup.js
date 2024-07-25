     function togglePasswordVisibility() 
      {
  var passwordInput = document.getElementById("i2");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    document.querySelector(".show-password-btn").textContent = "Hide";
  }
   else {
    passwordInput.type = "password";
    document.querySelector(".show-password-btn").textContent = "Show";
  }
}

function togglePassword1Visibility() 
      {
  var passwordInput = document.getElementById("i3");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    document.querySelector(".show-fpassword-btn").textContent = "Hide";
  }
   else {
    passwordInput.type = "password";
    document.querySelector(".show-fpassword-btn").textContent = "Show";
  }
}

