<?php 
ob_start();// turn on output buffering
include_once('class.phpmailer.php');// to send mail
$mode = $_REQUEST['mode'];
$from = $_REQUEST['from'];

if($mode=='contact'){
	
		if(empty($_REQUEST['name'])){
		echo 0;
		exit();
		}
	  	if(empty($_REQUEST['email'])){
		echo 2;
		exit();
		}
		$subemail = $_REQUEST["email"];
		// check if e-mail address is well-formed
		if (!filter_var($subemail, FILTER_VALIDATE_EMAIL)) {
		  echo 3;
		  exit();
    	}
		if(empty($_REQUEST['subject'])){
		echo 4;
		exit();
		}
		if(empty($_REQUEST['message'])){
		echo 5;
		exit();
		}
		
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['email'],"User");
		$mail->SetFrom($_REQUEST['email'], ucwords($_REQUEST['name']));
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC($_REQUEST['email'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder Contact Us";
		
		$body .= '
		
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://www.creativethemes.co.in/demo/home-builder/template-multipage/https://via.placeholder.com/290x56" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Date : '.date("F j, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>
    
    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Hello ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">'.ucwords($_REQUEST['name']).' has contacted Architevo Builder.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Contact details are as follows:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Name : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.ucwords($_REQUEST['name']).'</font></th>
		</tr>';
		if(!empty($_REQUEST['email'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['email'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['subject'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Subject : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['subject'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['message'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Message : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['message'].'</font></th>
		</tr>';
		}
		$body .= '<tr>
			<td colspan="2"><br />
			<font face="Verdana" style="font-size:12px" color="#666666"><b>Kind Regards,<br />
			<font face="Verdana" style="font-size:12px" color="#666666" >
			Architevo Builder.</font></b>	
			</font>
			</td>
		</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			
			</table>
			</div> ';
			
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();
}


if($mode=='contact2'){
	
		if(empty($_REQUEST['name'])){
		echo 0;
		exit();
		}
	  	if(empty($_REQUEST['email'])){
		echo 2;
		exit();
		}
		$subemail = $_REQUEST["email"];
		// check if e-mail address is well-formed
		if (!filter_var($subemail, FILTER_VALIDATE_EMAIL)) {
		  echo 3;
		  exit();
    	}
		if(empty($_REQUEST['message'])){
		echo 4;
		exit();
		}
		
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['email'],"User");
		$mail->SetFrom($_REQUEST['email'], ucwords($_REQUEST['name']));
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC($_REQUEST['email'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder Contact Us";
		
		$body .= '
		
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://www.creativethemes.co.in/demo/home-builder/template-multipage/https://via.placeholder.com/290x56" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Date : '.date("F j, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>
    
    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Hello ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">'.ucwords($_REQUEST['name']).' has contacted Architevo Builder.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Contact details are as follows:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Name : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.ucwords($_REQUEST['name']).'</font></th>
		</tr>';
		if(!empty($_REQUEST['email'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['email'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['message'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Message : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['message'].'</font></th>
		</tr>';
		}
		$body .= '<tr>
			<td colspan="2"><br />
			<font face="Verdana" style="font-size:12px" color="#666666"><b>Kind Regards,<br />
			<font face="Verdana" style="font-size:12px" color="#666666" >
			Architevo Builder.</font></b>	
			</font>
			</td>
		</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			
			</table>
			</div> ';
			
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();
}


if($mode=='subscriber'){
		if(empty($_REQUEST['subsemail'])){
		echo 0;
		exit();
		}
		$subemail = $_REQUEST["subsemail"];
		// check if e-mail address is well-formed
		if (!filter_var($subemail, FILTER_VALIDATE_EMAIL)) {
		  echo 2;
		  exit();
    	}
	 
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['subsemail'],"User");
		$mail->SetFrom($_REQUEST['subsemail'], "Architevo Builder");
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "User");
		$mail->AddBCC($_REQUEST['subsemail'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder Subscribe";
		
		$body .= '
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://www.creativethemes.co.in/demo/home-builder/template-multipage/https://via.placeholder.com/290x56" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Date : '.date("F j, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>
    
    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Hello ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">Thank you for subscribing. We will get back to you soon.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Subscriber details are as follows:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.$_REQUEST['subsemail'].'</font></th>
		</tr>
        <tr>
			<td colspan="2"><br />
			<font face="Verdana" style="font-size:12px" color="#666666"><b>From Architevo Builder auto-email</b><br />
			</font>
			</td>
		</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			
			</table>
			</div> ';
			
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();

}

if($mode=='middlesubscriber'){
		
		if(empty($_REQUEST['subsmiddleemail'])){
		echo 0;
		exit();
		}
		$subemail = $_REQUEST["subsmiddleemail"];
		// check if e-mail address is well-formed
		if (!filter_var($subemail, FILTER_VALIDATE_EMAIL)) {
		  echo 2;
		  exit();
    	}
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['subsmiddleemail'],"User");
		$mail->SetFrom($_REQUEST['subsmiddleemail'], "Architevo Builder");
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC($_REQUEST['subsmiddleemail'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder Subscribe";
		
	  	$body .= '
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://www.creativethemes.co.in/demo/home-builder/template-multipage/https://via.placeholder.com/290x56" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Date : '.date("F j, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>
    
    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Hello ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">Thank you for subscribing. We will get back to you soon.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Subscriber details are as follows:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.$_REQUEST['subsmiddleemail'].'</font></th>
		</tr>
        <tr>
			<td colspan="2"><br />
			<font face="Verdana" style="font-size:12px" color="#666666"><b>From Architevo Builder auto-email</b><br />
			</font>
			</td>
		</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			
			</table>
			</div> ';
			
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();

}

if($mode=='requestForm'){
		if(empty($_REQUEST['name'])){
		echo 0;
		exit();
		}
	  	if(empty($_REQUEST['email'])){
		echo 2;
		exit();
		}
		$subemail = $_REQUEST["email"];
		// check if e-mail address is well-formed
		if (!filter_var($subemail, FILTER_VALIDATE_EMAIL)) {
		  echo 3;
		  exit();
    	}
		if(empty($_REQUEST['service_type'])){
		echo 4;
		exit();
		}
		if(empty($_REQUEST['contact_no'])){
		echo 5;
		exit();
		}
		if(empty($_REQUEST['message'])){
		echo 6;
		exit();
		}
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['email'],"User");
		$mail->SetFrom($_REQUEST['email'], ucwords($_REQUEST['name']));
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC($_REQUEST['email'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder Request A Quote";

	  	$body .= '
			
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://www.creativethemes.co.in/demo/home-builder/template-multipage/https://via.placeholder.com/290x56" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Date : '.date("F j, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>
    
    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Hello ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">'.ucwords($_REQUEST['name']).' has requested a quote in Architevo Builder.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Details are as follows:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Name : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.ucwords($_REQUEST['name']).'</font></th>
		</tr>';
		if(!empty($_REQUEST['email'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['email'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['service_type'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Service Type : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['service_type'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['contact_no'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Contact No. : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['contact_no'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['message'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Message : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['message'].'</font></th>
		</tr>';
		}
		$body .= '<tr>
		<td colspan="2"><br />
		<font face="Verdana" style="font-size:12px" color="#666666"><b>Kind Regards,<br />
		<font face="Verdana" style="font-size:12px" color="#666666" >
		Architevo Builder.</font></b>	
		</font>
		</td>
		</tr>
		</table></td>
		</tr>
		</table></td>
		</tr>
		</table></td>
		</tr>
		
		</table>
		</div> ';
			
		/*$mail->Body .= $body;
		$mail->Send();
		$mail->ClearAllRecipients();*/
		
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();

}
if($mode=='faqForm'){
		if(empty($_REQUEST['name'])){
		echo 0;
		exit();
		}
		if(empty($_REQUEST['topic'])){
		echo 2;
		exit();
		}
		if(empty($_REQUEST['country'])){
		echo 3;
		exit();
		}
	  	if(empty($_REQUEST['email'])){
		echo 4;
		exit();
		}
		$subemail = $_REQUEST["email"];
		// check if e-mail address is well-formed
		if (!filter_var($subemail, FILTER_VALIDATE_EMAIL)) {
		  echo 5;
		  exit();
    	}
		if(empty($_REQUEST['question'])){
		echo 6;
		exit();
		}
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['email'],"User");
		$mail->SetFrom($_REQUEST['email'], ucwords($_REQUEST['name']));
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC($_REQUEST['email'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder FAQ";
		
		
	  	$body .= '
			
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://www.creativethemes.co.in/demo/home-builder/template-multipage/https://via.placeholder.com/290x56" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Date : '.date("F j, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>
    
    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Hello ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">'.ucwords($_REQUEST['name']).' has registered Architevo Builder.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Registration details are as follows:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Name : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.ucwords($_REQUEST['name']).'</font></th>
		</tr>';
		if(!empty($_REQUEST['topic'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Topic : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['topic'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['country'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Your Country : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['country'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['email'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['email'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['question'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Your Question : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['question'].'</font></th>
		</tr>';
		}
		$body .= '<tr>
		<td colspan="2"><br />
		<font face="Verdana" style="font-size:12px" color="#666666"><b>Kind Regards,<br />
		<font face="Verdana" style="font-size:12px" color="#666666" >
		Architevo Builder.</font></b>	
		</font>
		</td>
		</tr>
		</table></td>
		</tr>
		</table></td>
		</tr>
		</table></td>
		</tr>
		
		</table>
		</div> ';
			
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();
}
if($mode=='blog'){
	  	if(empty($_REQUEST['name'])){
		echo 0;
		exit();
		}
		if(empty($_REQUEST['email'])){
		echo 2;
		exit();
		}
		$blogemail = $_REQUEST["email"];
		// check if e-mail address is well-formed
		if (!filter_var($blogemail, FILTER_VALIDATE_EMAIL)) {
		  echo 3;
		  exit();
    	}
		if(empty($_REQUEST['message'])){
		echo 4;
		exit();
		}
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['email'],"User");
		$mail->SetFrom($_REQUEST['email'], ucwords($_REQUEST['name']));
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		$mail->AddBCC($_REQUEST['email'],"User");
		
		$mail->Subject    = "Architevo Builder Reply";
		
	  	$body .= '
		
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://www.creativethemes.co.in/demo/home-builder/template-multipage/https://via.placeholder.com/290x56" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Date : '.date("F j, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>
    
    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Hello ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">'.ucwords($_REQUEST['name']).' has replied to a comment on Architevo Builder.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Details are as follows:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Name : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.ucwords($_REQUEST['name']).'</font></th>
		</tr>';
		if(!empty($_REQUEST['email'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['email'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['message'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Message : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['message'].'</font></th>
		</tr>';
		}
		$body .= '<tr>
			<td colspan="2"><br />
			<font face="Verdana" style="font-size:12px" color="#666666"><b>Kind Regards,<br />
			<font face="Verdana" style="font-size:12px" color="#666666" >
			Architevo Builder.</font></b>	
			</font>
			</td>
		</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			
			</table>
			</div> ';
			
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();
}


if($mode=='blog_comment'){
	  	if(empty($_REQUEST['comment_name'])){
		echo 0;
		exit();
		}
		if(empty($_REQUEST['comment_email'])){
		echo 2;
		exit();
		}
		$blogemail = $_REQUEST["comment_email"];
		// check if e-mail address is well-formed
		if (!filter_var($blogemail, FILTER_VALIDATE_EMAIL)) {
		  echo 3;
		  exit();
    	}
		if(empty($_REQUEST['comment_message'])){
		echo 4;
		exit();
		}
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['comment_email'],"User");
		$mail->SetFrom($_REQUEST['comment_email'], ucwords($_REQUEST['name']));
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		$mail->AddBCC($_REQUEST['comment_email'],"User");
		
		$mail->Subject    = "Architevo Builder Comment";
		
	  	$body .= '
		
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://www.creativethemes.co.in/demo/home-builder/template-multipage/https://via.placeholder.com/290x56" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Date : '.date("F j, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>
    
    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Hello ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">'.ucwords($_REQUEST['comment_name']).' has commented on Architevo Builder.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Details are as follows:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Name : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.ucwords($_REQUEST['comment_name']).'</font></th>
		</tr>';
		if(!empty($_REQUEST['comment_email'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['comment_email'].'</font></th>
		</tr>';
		}
		if(!empty($_REQUEST['comment_message'])){
		$body .= '<tr>
           <td align="left" width="30%"><font face="Verdana" style="font-size:12px">Message : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['comment_message'].'</font></th>
		</tr>';
		}
		$body .= '<tr>
			<td colspan="2"><br />
			<font face="Verdana" style="font-size:12px" color="#666666"><b>Kind Regards,<br />
			<font face="Verdana" style="font-size:12px" color="#666666" >
			Architevo Builder.</font></b>	
			</font>
			</td>
		</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			</table></td>
			</tr>
			
			</table>
			</div> ';
			
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();
}

?>