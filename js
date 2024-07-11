document.getElementById("button1").addEventListener("click", function() {
  sendEmail("Button 1 clicked");
});

document.getElementById("button2").addEventListener("click", function() {
  sendEmail("Button 2 clicked");
});

document.getElementById("button3").addEventListener("click", function() {
  sendEmail("Button 3 clicked");
});

function sendEmail(message) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Email sent successfully!");
    }
  };
  xhr.send("message=" + encodeURIComponent(message));
}
