<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wordpress React Starter</title>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/build/app.css">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <?php wp_head();?>
  <script type="text/javascript">
  	/*
  	 * Create global variables for our js
  	 */
  	var theme_url = '<?php bloginfo('template_url');?>',
  			base_url = '<?php echo home_url(); ?>'
  </script>
</head>
<body>
<?php
  // $form = GFAPI::get_form(1);
  // $form_string = GFFormDisplay::get_form_init_scripts($form);
  // var_dump($form_string);
?>