<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin");
header('P3P: CP="CAO PSA OUR"');
if(true)
{
$email = $_POST['email'];
$to = "mumnafrikan@gmail.com";
//subject
$sub = "Notify Me about Mum n Afrikan";
// Sender's Email
$header ='From:'. $email . "\r\n";
$send = "Email".  $email . "\r\n";
//send the mesaage
mail($to, $sub, $send, $header);
}
?>