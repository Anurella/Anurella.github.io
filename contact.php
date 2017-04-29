<?php  
if (isset($_POST['submit'])) {
	# code...
	//no need to check for blank fields 
   $name = $_POST['name'];
   $lname = $_POST['lname'];
   $email = $_POST['email'];
   $num = $_POST['num'];
   $message = $_POST['message'];
   $sub = "CONTACT FORM ON WEBSITE";
   $to = "Bsteamentertainment@gmail";

   $header = 'From:'. $email . "\r\n"; // Sender's Email
   $send = "Name: " . $name . "\n\n";
   $send += "Telephone: " . $num . "\n\n";
   $send += "Message: " . $message . "\n\n";
   //send the mesaage 
   mail($to, $subject, $send, $header);
   echo "Dear" + $name + "\r\n" + "Thank you for Message!!";
   
}

?>