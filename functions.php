<?php
// Theme Support
function custom_theme_setup() {
	add_theme_support( 'menus' );
}
add_action( 'after_setup_theme', 'custom_theme_setup' );

// Register Menus
function register_my_menus() {
  register_nav_menus(
    array(
      'headerMenu' => __( 'Header Menu' ),
      'footerMenu' => __( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

function theme_scripts() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' );
	wp_enqueue_script("jquery");
	
	/*
	 * Optional! - You need this if you are using gravityforms and want to be able to use conditional logic
	 */	
	include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
  if(is_plugin_active('gravityforms/gravityforms.php')) gravity_form_enqueue_scripts( 1, true );
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );

// $form = GFAPI::get_form(1);
// $scripts = GFFormDisplay::get_form_init_scripts($form);
// var_dump($scripts);


function customQueryVars($vars) {
  $vars[] = 'getFormInitScripts';
  return $vars;
}
add_filter('query_vars','customQueryVars');
 
function getFormInitScripts() {
  if(intval(get_query_var('getFormInitScripts')) != '') {
  	require_once(GFCommon::get_base_path() . '/form_display.php');
    $form = GFAPI::get_form( get_query_var('getFormInitScripts') );
    $field_values = array(); // the array of parameter names and values if any fields are being populated
    GFFormDisplay::register_form_init_scripts( $form, $field_values );
    $form_string = GFFormDisplay::get_form_init_scripts( $form );

    echo strip_tags($form_string);
  exit;
  }
}
add_action('template_redirect', 'getFormInitScripts');