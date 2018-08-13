<?php
 require 'class.phpmailer.php';

$data = array();
parse_str($_POST['data'], $data);

switch ($data['id']) {
	case '1':		
		$message = "Имя - {$data['name']} <br> Телефон - {$data['tel']}";		
		break;
	
	case '2':
		$message = "Имя - {$data['name']} <br> Телефон - {$data['tel']} <br> E-mail - {$data['email']}";
		break;

	case '3':
		$message = "Имя - {$data['name']}
					<br> Телефон - {$data['tel']} 
					<br> Тип объекта - {$data['type']}
					<br> Расход, м3/ч - {$data['rate']}
					<br> Напор, создаваемый установкой, м.в.с. - {$data['pressure']}
					<br> Давление на входе, м.в.с. - {$data['push']}
					<br> Суммарный напор, м.в.с - {$data['total_pressure']}
					<br> Перекачиваемая жидкость - {$data['liquid']}
					<br> Температура жидкости, t°С - {$data['temperature']}
					<br> Количество рабочих насосов, обеспечивающих необходимый расход - {$data['pumps_num']}
					<br> Количество резервных насосов - {$data['standby_pumps']}
					<br> Управление - {$data['control']}
					<br> Ограничения по габаритам станции:
						 <br> Высота - {$data['height']}
						 <br> Длина - {$data['length']}
						 <br> Ширина - {$data['width']}
					<br> Количество вводов питания - {$data['power_inputs']}
					<br> Дополнительные сведения - {$data['additionally']}
					";
		var_dump($data);
		break;
}
$site_name = "777.mc-vinil.ru";
$to = "beregsys@gmail.com";
$to2 = "tolkachev.valentin@yandex.ru";
$subject = $data['title'];

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->From = 'info@'.$site_name;
$mail->FromName = $site_name;

$mail->AddAddress($to);
$mail->AddAddress($to2);

$mail->IsHTML(true);
$mail->Subject = $subject;
$mail->Body = $message;
$mail->Send();
echo "success";