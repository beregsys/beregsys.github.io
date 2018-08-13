<?php
$data = array();
parse_str($_POST['data'], $data);
$sendto = "beregsys@gmail.com";
$subject  = $data['form'];

$headers = "From: {$data['form']}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
print_r($data);
if ($subject == "Узнать стоимость") {
	$square = $data['square'];
	$corners = $data['corners'];
	$lamp = $data['lamp'];
	$luster = $data['luster'];
	$tel = $data['tel'];
	$message = "<b>Площадь помещения(м2)</b> - $square<br>
				<b>Количество углов(шт.)</b> - $corners<br>
				<b>Кол-во светильников(шт.)</b> - $lamp<br>
				<b>Кол-во люстр(шт.)</b> - $luster<br>
				<b>Телефон клиента</b> - $tel
				";
	if(mail($sendto, $subject, $message, $headers)){
		echo "success";
	}else echo "error 123";
}else{
	$message = "<b>Телефон клиента</b> - {$data['tel']}";
	if(mail($sendto, $subject, $message, $headers)){
		echo "success321";
	}else echo $message;
}
