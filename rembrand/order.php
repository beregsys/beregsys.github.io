<?php
$phone = isset($_POST["phone"]) ? $_POST["phone"] : null;
$capt = isset($_POST["capt"]) ? $_POST["capt"] : null;
$email = isset($_POST["email"]) ? $_POST["email"] : null;
$email_to_owner = "";
if ($email) {
	$email_to_owner = "\r\nПочта клиента: $email";
	require 'phpmailer/PHPMailerAutoload.php';
	$mail = new PHPMailer;
	$mail->SetLanguage( 'ru', 'phpmailer/language/phpmailer.lang-ru.php' );
	$mail->CharSet = 'utf-8';
	$mail->setFrom('info@rembrand-remont.ru', 'info@rembrand-remont.ru');
	$mail->addReplyTo('no-reply@rembrand-remont.ru', 'Автоматическая рассылка');
	$mail->addCC($email);
	$mail->addAttachment('book/rembrand.pdf');
	$mail->Subject = 'Три самых дорогих ошибки в ремонте квартиры';
	$mail->Body    = "<h2 style='text-align:center;'>Три самых дорогих ошибки в ремонте квартиры<h2>";
	$mail->IsHTML(true);  
	$mail->send();
}
	$email_to = 'beregsys@gmail.com';
	$subj = "Заявка с сайта";
	$message  = "Название формы: $capt\r\nНомер телефона: $phone . $email_to_owner";
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/plain; charset=utf-8\r\n";


	if (mail($email_to, $subj, $message, $headers)){
		echo 'Спасибо за заявку!';
	} else {
		echo 'Ошибка';
	}
?>
