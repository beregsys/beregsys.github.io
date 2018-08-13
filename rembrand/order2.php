<?php
$phone = isset($_POST["phone"]) ? $_POST["phone"] : null;
$text = isset($_POST["text"]) ? $_POST["text"] : null;
$capt = isset($_POST["capt"]) ? $_POST["capt"] : null;

	$email_to = 'beregsys@gmail.com';
	$subj = "Заявка с сайта";
	$message  = "Название формы: $capt\r\nНомер телефона: $phone\r\nВопрос: $text";
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/plain; charset=utf-8\r\n";


	if (mail($email_to, $subj, $message, $headers)){
		echo 'Спасибо за заявку!';
	} else {
		echo 'Ошибка';
	}
?>
