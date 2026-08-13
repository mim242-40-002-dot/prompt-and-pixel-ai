<?php
if (!defined('ABSPATH')) exit;

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('hello-parent', get_template_directory_uri() . '/style.css', [], wp_get_theme('hello-elementor')->get('Version'));
    wp_enqueue_style('heroverse', get_stylesheet_uri(), ['hello-parent'], wp_get_theme()->get('Version'));
    wp_enqueue_script('heroverse', get_stylesheet_directory_uri() . '/theme.js', [], wp_get_theme()->get('Version'), true);
});

add_action('init', function () {
    register_post_type('hv_character', [
        'labels' => ['name' => 'Characters', 'singular_name' => 'Character'],
        'public' => true, 'has_archive' => true, 'rewrite' => ['slug' => 'character'],
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
        'show_in_rest' => true, 'menu_icon' => 'dashicons-superhero',
    ]);
    register_post_type('hv_story', [
        'labels' => ['name' => 'Fan Stories', 'singular_name' => 'Fan Story'],
        'public' => true, 'has_archive' => true, 'rewrite' => ['slug' => 'fan-story'],
        'supports' => ['title', 'editor', 'excerpt', 'custom-fields'],
        'show_in_rest' => true, 'menu_icon' => 'dashicons-book-alt',
    ]);
    register_taxonomy('publisher', ['hv_character'], ['label' => 'Publisher', 'public' => true, 'hierarchical' => true, 'show_in_rest' => true]);
    register_taxonomy('alignment', ['hv_character'], ['label' => 'Alignment', 'public' => true, 'hierarchical' => true, 'show_in_rest' => true]);
});

add_filter('show_admin_bar', '__return_false');

add_action('wp_head', function () {
    $title = 'HeroVerse Fan Archive - Independent Educational Fan Project';
    $description = 'Explore eight Marvel and DC character profiles with official sources and clearly labelled non-canon fan concepts.';
    $current_url = home_url(add_query_arg([], $GLOBALS['wp']->request ?? ''));
    echo "\n<meta property=\"og:type\" content=\"website\">";
    echo "\n<meta property=\"og:title\" content=\"" . esc_attr($title) . "\">";
    echo "\n<meta property=\"og:description\" content=\"" . esc_attr($description) . "\">";
    echo "\n<meta property=\"og:url\" content=\"" . esc_url($current_url) . "\">";
    echo "\n<meta name=\"twitter:card\" content=\"summary\">\n";
}, 5);
