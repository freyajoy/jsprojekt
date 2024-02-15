document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    let modal = document.getElementById("myModal");
  
    // Get the button that opens the modal
    let btn = document.getElementById("myBtn");
  
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // Funktion for at åbne Google-login i et popup-vindue
    function openGoogleLoginPopup() {
        window.open("https://accounts.google.com/ServiceLogin", "GoogleLoginPopup", "width=500, height=600");
    }
  
    // Lyt efter klik på Google-login-knappen og åbn popup
    document.querySelector('.google-login-button').addEventListener('click', openGoogleLoginPopup);
  
    const data = [
      { username: 'Lotte', password: 34 },
      { username: 'Laura', password: 27 },
      { username: 'Aleksandra', password: 21 },
      { username: 'Freya', password: 21 },
      { username: 'Thomas', password: 11357 },
    ];
    
 // Funktion for at håndtere login og linke til en ny side
 function handleLoginAndRedirect() {
    // Hent værdier fra inputfelterne
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    console.log("Username input:", usernameInput);
    console.log("Password input:", passwordInput);

    // Søg efter brugeren i data-arrayet
    let user = data.find(u => u.username === usernameInput && u.password == parseInt(passwordInput));

    console.log("User found:", user);

    // Hvis brugeren er fundet, log ind og omdiriger
    if (user) {
        // Implementer din logik for login her

        // Efter en succesfuld login, kan du linke til en ny side
        window.location.href = "logged-in.html";
    } else {
        // Hvis brugeren ikke er fundet, vis en fejlmeddelelse (du kan tilpasse dette efter behov)
        alert("Wrong username or password. Try again.");
    }
  }
  
  // Lyt efter klik på login-knappen og udfør login-håndteringen
  document.querySelector(".button").addEventListener('click', handleLoginAndRedirect);
});