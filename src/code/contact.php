<?php
if($_REQUEST['name'] == '' || $_REQUEST['contact_email'] == '' ||  $_REQUEST['message'] == ''):
  return "error";
endif;
if (filter_var($_REQUEST['contact_email'], FILTER_VALIDATE_EMAIL)):
  $subject = 'Contact from pepper.lk'; // Subject of your email

  // Receiver email address
  $to = 'email2niwa@gmail.com';  //Change the email address by yours
  //$to = 'makinghabits@pepper.lk';
 

  // prepare header
  $header = 'From: '. $_REQUEST['name']  . ' <'. $_REQUEST['contact_email'] .'>'. "\r\n";
  $header .= 'Reply-To:  '. $_REQUEST['name'] . ' <'. $_REQUEST['contact_email'] .'>'. "\r\n";
  // $header .= 'Cc:  ' . 'example@domain.com' . "\r\n";
  // $header .= 'Bcc:  ' . 'example@domain.com' . "\r\n";
  $header .= 'X-Mailer: PHP/' . phpversion();


  $message .= 'Name: ' . $_REQUEST['name'] . "\n";
  $message .= 'Email: ' . $_REQUEST['contact_email'] . "\n";
//  $message .= 'Subject: ' . $_REQUEST['contact_subject'] . "\n";
  $message .= 'Message: '. $_REQUEST['message'];

  // Send contact information
  $mail = mail( $to, $subject , $message, $header );

  echo 'sent';
  else:
    return "error";
  endif; 

?>