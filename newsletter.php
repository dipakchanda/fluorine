<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $email = $_POST['email'];
		
		$msg = $email." Wants to join yo your newsletter";

		// use wordwrap() if lines are longer than 70 characters
		$msg = wordwrap($msg,70);

		// send email
		if(mail("someone@example.com","Fluorine Newsletter",$msg)) {
			echo "1";
		}else {
			echo "0";
		}
    }
?>