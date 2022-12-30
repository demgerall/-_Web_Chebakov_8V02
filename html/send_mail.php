<?php 

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require __DIR__.'/PHPMailer/src/Exception.php';
   require __DIR__.'/PHPMailer/src/PHPMailer.php';


	$mail = new PHPMailer(true);
	$mail->CharSet = "UTF-8";

	$name = $_POST["name"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$message = $_POST["message"];

	$body = $name . ' ' . $email . ' ' . $phone . ' ' . $message;
	$theme = "[Repair Request]";

	$mail->addAddress("demgerall@mail.ru");

	$mail->Subject = $theme;
	$mail->Body = $body;

	$mail->send();
 