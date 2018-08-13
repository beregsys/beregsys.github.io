<?php
$data = [];
parse_str($_POST['data'], $data);
$sendto = "beregsys@gmail.com,in-link@mail.ru";
$subject  = "Заявка с LP steklotermos.ru";

$headers = "From: Заявка с лэнда steklotermos.ru\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$name = $data['name'];
$phone = $data['phone'];
$email = $data['email'];
if (!empty($data['comment'])){
	$comment = "<b>Комментарий клиента</b> - " . $data['comment'] . "<br>";
}else $comment = '';
if (!empty($data['product_info'])){
	$product_info = explode(';', $data['product_info']);
	$product_sum = "<b>О товаре:</b><br>
					<ul>
					<li>Наименование товара: {$product_info[0]}</li>
					<li>{$product_info[1]}</li>
					<li>Стоимость: {$product_info[2]}</li>
					</ul>";
}else $product_sum = '';


$message = "<b>Имя клиента</b> - $name<br>
			<b>Телефон клиента</b> - $phone<br>
			<b>Email клиента</b> - $email<br>
			$comment
			$product_sum
			";

mail($sendto, $subject, $message, $headers);