<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = "jacobsnchan@icloud.com";
  $subject = "Button Clicked";
  $body = $_POST["message"];
  $headers = "From: wendywongrthk@gmail.com";

  if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email.";
  }
}
?>
