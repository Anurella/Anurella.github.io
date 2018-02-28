<?php
   if(true)
   {
      $email = $_POST['email'];
      $to = "vivian_ella@yahoo.com";
      //subject
      $sub = "Notify Me about Mum n Afrikan";
         // Sender's Email
      $header ='From:'. $email . "\r\n";
      $send = "Email".  $email . "\r\n";
      //send the mesaage
      mail($to, $sub, $send, $header);
   }
?>