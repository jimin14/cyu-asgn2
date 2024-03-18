document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs


  // Check Passcode
  let code = document.getElementById("code-in").value;
  let username = document.getElementById("username-in").value;
  if ( username == "admin" && code == "1234" ) {
      document.getElementById("output1").innerHTML = "Login Successful";
    } else if (code !== "1234") { 
      document.getElementById("output1").innerHTML = "Invalid Password";
    } else if (username !== "admin") {
      document.getElementById("output1").innerHTML = "Invalid username";
    }
}