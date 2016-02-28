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
      'header-menu' => __( 'Header Menu' ),
      'footer-menu' => __( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );