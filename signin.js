  function signIn() {
        // Add your Google sign-in logic here
        // alert("Signing in...");
      }

      function signInWithGoogle() {
        // Add your Apple ID sign-in logic here
        alert("Signing in with Google...");
      }

      function signInWithApple() {
        // Add logic to send one-time code to user's email
        alert("Signing in with Apple ID...");
      }


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

/*For onclick slide-out effect*/

// document.getElementById('bu2').addEventListener('click', () => {
//   document.getElementById('bu2').classList.add('slide-out');

//   // Reset slide out after 3 seconds
//   setTimeout(() => {
//     document.getElementById('bu2').classList.remove('slide-out');
//   }, 3000);
// });

/*For immediate mouseenter and leave*/

// document.getElementById('bu2').addEventListener('mouseenter', () => {
//   document.getElementById('bu2').classList.add('slide-out');
// });

// document.getElementById('bu2').addEventListener('mouseleave', () => {
//   document.getElementById('bu2').classList.remove('slide-out');
// });

let timeoutId;

document.getElementById('bu2').addEventListener('mouseenter', () => {
  clearTimeout(timeoutId); // Clear any existing timeout to prevent conflicting animations
  document.getElementById('bu2').classList.add('slide-out');
});

document.getElementById('bu2').addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    document.getElementById('bu2').classList.remove('slide-out');
  }, 1000); // Adjust the delay time (in milliseconds) as needed
});

document.getElementById('btn1').addEventListener('click', function() {
    // Display the image
    // Wait for 3 seconds and then redirect to the next page
    setTimeout(function() {
        window.location.href = 'menu.html'; // Replace 'next-page.html' with the URL of your next page
    }, 1000);
});
