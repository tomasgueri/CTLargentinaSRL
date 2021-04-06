<?php 
ob_start();// turn on output buffering
include_once('class.phpmailer.php');// to send mail
$mode = $_REQUEST['mode'];
$from = $_REQUEST['from'];

if($mode=='subscriber'){
	
	
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['subsemail'],"User");
		$mail->SetFrom($_REQUEST['subsemail'], "Architevo Builder");
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC($_REQUEST['subsemail'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder Multipurpose Template Subscribe";
		
		/*$mail = new PHPMailer();
		$mail->Priority = 3; // COPY
		$mail->From = $_REQUEST['email'];
		$mail->FromName = ucwords($_REQUEST['name']);			
		$mail->Subject = "Architevo Builder Contact Us";
		$mail->AddAddress($_REQUEST['email'],"User");
		$mail->AddBCC("contact@srgit.com","Admin");
		$mail->Body = "";
		$mail->AltBody = "";*/
	  
	  	$body .= '
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://creativethemes.co.in/demo/multipurpose-templates/home-builder/imgs/logo.png" width="170"></td>
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

if($mode=='comingsoonsubscriber'){
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['subscomingemail'],"User");
		$mail->SetFrom($_REQUEST['subscomingemail'], "Architevo Builder");
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC($_REQUEST['subscomingemail'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder Multipurpose Template Subscribe";
		
		/*$mail = new PHPMailer();
		$mail->Priority = 3; // COPY
		$mail->From = $_REQUEST['subsemail'];
		$mail->FromName = "Architevo Builder";			
		$mail->Subject = "Architevo Builder Subscribe";
		$mail->AddAddress($_REQUEST['subsemail'],"User");
		$mail->AddBCC("contact@srgit.com","Admin");
		$mail->Body = "";
		$mail->AltBody = "";*/
	  
	  	$body .= '
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://creativethemes.co.in/demo/multipurpose-templates/home-builder/imgs/logo.png" width="170"></td>
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
           <td align="left"><font face="Verdana" style="font-size:12px"> '.$_REQUEST['subscomingemail'].'</font></th>
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
		
		$mail = new PHPMailer(); // defaults to using php "mail()"

		$mail->IsSendmail(); // telling the class to use SendMail transport
		
		$mail->AddReplyTo($_REQUEST['email'],"User");
		$mail->SetFrom($_REQUEST['email'], "Architevo Builder");
		
		
		$address = "contact@srgit.com";
		$mail->AddAddress($address, "SRGIT");
		$mail->AddBCC($_REQUEST['email'],"User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		
		$mail->Subject    = "Architevo Builder Multipurpose Template Request A Quote";
		
		/*$mail = new PHPMailer();
		$mail->Priority = 3; // COPY
		$mail->From = $_REQUEST['subsmiddleemail'];
		$mail->FromName = "Architevo Builder";			
		$mail->Subject = "Architevo Builder Subscribe";
		$mail->AddAddress($_REQUEST['subsmiddleemail'],"User");
		$mail->AddBCC("contact@srgit.com","Admin");
		$mail->Body = "";
		$mail->AltBody = "";*/
	  
	  	$body .= '
			
		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="http://creativethemes.co.in/demo/multipurpose-templates/home-builder/imgs/logo.png" width="170"></td>
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
			
		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);
		
		$mail->Send();
		
		echo 1;
		exit();

}

?>