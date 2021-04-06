//---------------------------- Reset Button ---------------------------------

"use strict",
function PageReset(){
	window.location.reload();
}

window.onload = function() {
  $("#comingloader").hide();
};

//---------------------------- subscriber section ------------------------------
function ckhformsubscribe(){
	//alert(2);
	if(document.getElementById("subsemail").value==''){
		alert("Please Enter Your Email Address"); 
		document.getElementById("subsemail").value='';
		document.getElementById("subsemail").focus();
		return false;
	}
	if(!validateEmail("Email Address",document.getElementById("subsemail").value))	
	{
		document.getElementById("subsemail").click();
		document.getElementById("subsemail").focus();
		return false;
	}
    return true;
}

function ajaxmailsubscribe(){
if(document.getElementById('subsemail').value!=''){
document.getElementById('loader2').style.display = 'block';
}
if(ckhformsubscribe() == true){
	var form_data=$('#subsForm').serialize();
		$.ajax({
		url:"assets/php/mailcontroller.php?mode=subscriber",
		data:form_data,
		cache:false,
		async:true,
		success: function(data) {
			//alert(data);
			if(data==1){
			$('#model2').click();
			$('#subsForm')[0].reset();
			//sleep(4000);
			document.getElementById('loader2').style.display = 'none';
			}
		}
		});
}
}
//---------------------------- request a quote ------------------------------

function ckhrequestform(){

	if(document.getElementById("name").value==''){
		alert("Please Enter Your Full Name"); 
		document.getElementById("name").value='';
		document.getElementById("name").focus();
		return false;
	}
	if(document.getElementById("email").value==''){
		alert("Please Enter Your Email"); 
		document.getElementById("email").value='';
		document.getElementById("email").focus();
		return false;
	}
	if(!validateEmail("Email Address",document.getElementById("email").value))	
	{
		document.getElementById("email").click();
		document.getElementById("email").focus();
		return false;
	}
	if(document.getElementById("service_type").value==''){
		alert("Please Enter Your Service Type"); 
		document.getElementById("service_type").value='';
		document.getElementById("service_type").focus();
		return false;
	}
	if(document.getElementById("contact_no").value==''){
		alert("Please Enter Your Contact No."); 
		document.getElementById("contact_no").value='';
		document.getElementById("contact_no").focus();
		return false;
	}
	if(document.getElementById("message").value==''){
		alert("Please Enter Your Message"); 
		document.getElementById("message").value='';
		document.getElementById("message").focus();
		return false;
	}
    return true;
}

function ajaxmailrequest(){
if(document.getElementById("message").value!=''){
document.getElementById('loader1').style.display = 'block';
}
if(ckhrequestform() == true){
	//alert(email);
	var form_data=$('#requestForm').serialize();
		 $.ajax({
		url:"assets/php/mailcontroller.php?mode=requestForm",
		data:form_data,
		cache:false,
		async:false,
		success: function(data) {
			//alert(data);
			if(data==1){
			$('#model2').click();
			$('#requestForm')[0].reset();
			//sleep(4000);
			document.getElementById('loader1').style.display = 'none';
			}
		}
		
		});
}
}
//----------------- for comming soon page -----------------------

function ckhformcomingsoon(){
	if(document.getElementById("subscomingemail").value==''){
		alert("Please Enter Your Email Address"); 
		document.getElementById("subscomingemail").value='';
		document.getElementById("subscomingemail").focus();
		return false;
	}
	if(!validateEmail("Email Address",document.getElementById("subscomingemail").value))	
	{
		document.getElementById("subscomingemail").click();
		document.getElementById("subscomingemail").focus();
		return false;
	}
    return true;
}
function ajaxmailcomingsoon(){
if(document.getElementById("subscomingemail").value!=''){
document.getElementById('comingloader').style.display = 'block';
}
if(ckhformcomingsoon() == true){
	
	var form_data=$('#subsComingSoon').serialize();
	//alert(form_data);
		 $.ajax({
		url:"assets/php/mailcontroller.php?mode=comingsoonsubscriber",
		data:form_data,
		cache:false,
		async:true,
		success: function(data) {
			//alert(data);
			//document.getElementById('comingloader').style.display = 'block';	
			if(data==1){
			$('#model2').click();
			$('#subsComingSoon')[0].reset();
			//sleep(4000);
			document.getElementById('comingloader').style.display = 'none';
			}
		}
		});
}
}
