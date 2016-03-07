<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wordpress React Starter</title>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/build/app.css">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <?php gravity_form_enqueue_scripts( 1, true ); ?>
  <?php wp_head();?>
</head>
<body>