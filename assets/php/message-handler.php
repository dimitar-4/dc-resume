<!-- This code is just a php exemle of how to make functional 
 contact form. It is not connected to this project. GitHub Pages 
 does not support languages like php, python, ruby... -->

<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];


    $email_from = 'https://dimitar-4.github.io/dc-resume/contact.html';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";


    $to = "dimitar.e.cholakov@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");


?>