<?php
ob_start();// turn on output buffering
include_once('class.phpmailer.php');// to send mail
$mode = $_REQUEST['mode'];

if($mode=='requestForm'){

		$mail = new PHPMailer();
		$mail->Priority = 3; // COPY
		$mail->From = $_REQUEST['email'];
		$mail->FromName = "Idrotermica DF";
		$mail->Subject = "Modulo di contatto dal sito web";
		$mail->AddAddress("info@idrotermicadf.it","User");
		$mail->AddBCC("shraddha.rusia@gmail.com","Admin");
		$mail->Body = "";
		$mail->AltBody = "";

	  	$body .= '

		<div style="width:800px; margin:0 auto">
  <table border="0" cellspacing="0" cellpadding="5" width="800" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; border:1px solid #cccccc; border-collapse:collapse">
    <tr>
      <td width="494"></td>
    </tr>
    <tr>
      <td align="center"><img src="https://www.idrotermicadf.it/assets/imgs/logo_idrotermica-responsive.png" width="170"></td>
    </tr>
    <tr>
      <td><hr style="opacity:0.3;" /></td>
    </tr>
    <tr>
      <td style="background:#EEEEEE; padding:10px 0" align="center"><strong style="font-size:17px">Data : '.date("j F, Y", strtotime(date("Y-m-d"))).' </strong></td>
    </tr>

    <tr>
      <td><table border="0" cellspacing="0" cellpadding="5" width="100%" >
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px"><b>Ciao ,</b></font></td>
		</tr>
      <tr>
			<td colspan="2"><font face="Verdana" style="font-size:12px">'.ucwords($_REQUEST['name']).' ha inviato un messaggio dal sito web.
</font></td>
	</tr>
          <tr>
            <td valign="middle"><p style="font-size:13px; margin-bottom:10px; margin-top:0;  padding-left:5px;"><font style="font-family:Arial, Helvetica, sans-serif; font-size:13px"><b>Dettagli:</b></font></p>
              <table border="0" cellspacing="0" cellpadding="0" width="300">
                <tr>
                  <td valign="top"><table border="0" cellspacing="0" cellpadding="2" width="100%">
                      <tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Nome : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px"> '.ucwords($_REQUEST['name']).'</font></th>
		</tr>';
		if(!empty($_REQUEST['email'])){
		$body .= '<tr>
           <td align="left" width="40%"><font face="Verdana" style="font-size:12px">Email : </font></th>
           <td align="left"><font face="Verdana" style="font-size:12px">'.$_REQUEST['email'].'</font></th>
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
		<font face="Verdana" style="font-size:12px" color="#666666"><b>Saluti,<br />
		<font face="Verdana" style="font-size:12px" color="#666666" >
		idrotermica df sas.</font></b>
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

		$mail->Body .= $body;
		if($mail->Send())
		echo "success";
		else
		echo "fail";
		$mail->ClearAllRecipients();

		echo 1;
		exit();

}
?>
