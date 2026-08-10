<?php
if (!defined('ABSPATH')) exit;
add_action('wp_enqueue_scripts', function(){wp_enqueue_style('hello-parent',get_template_directory_uri().'/style.css',[],wp_get_theme('hello-elementor')->get('Version'));wp_enqueue_style('panelverse',get_stylesheet_uri(),['hello-parent'],wp_get_theme()->get('Version'));wp_enqueue_script('panelverse',get_stylesheet_directory_uri().'/theme.js',[],wp_get_theme()->get('Version'),true);});
add_action('init',function(){register_post_type('character',['labels'=>['name'=>'Characters','singular_name'=>'Character'],'public'=>true,'has_archive'=>true,'rewrite'=>['slug'=>'character'],'supports'=>['title','editor','excerpt','thumbnail','custom-fields'],'show_in_rest'=>true,'menu_icon'=>'dashicons-superhero']);register_post_type('comic_story',['labels'=>['name'=>'Stories','singular_name'=>'Story'],'public'=>true,'has_archive'=>true,'rewrite'=>['slug'=>'story'],'supports'=>['title','editor','excerpt','thumbnail','custom-fields'],'show_in_rest'=>true,'menu_icon'=>'dashicons-book-alt']);register_taxonomy('alignment',['label'=>'Alignment','public'=>true,'hierarchical'=>true,'show_in_rest'=>true],['character']);});
add_filter('show_admin_bar','__return_false');
add_action('wp_head', function () {
    $title = 'Panelverse Comics — Original Educational Comic Universe';
    $description = 'Explore original heroes, villains, stories, and an interactive timeline in an accessible educational comic-inspired website.';
    $url = home_url(add_query_arg([], $GLOBALS['wp']->request ?? ''));
    $image = home_url('/assets/social/og-panelverse.png');
    echo "\n<meta property=\"og:type\" content=\"website\">";
    echo "\n<meta property=\"og:title\" content=\"" . esc_attr($title) . "\">";
    echo "\n<meta property=\"og:description\" content=\"" . esc_attr($description) . "\">";
    echo "\n<meta property=\"og:url\" content=\"" . esc_url($url) . "\">";
    echo "\n<meta property=\"og:image\" content=\"" . esc_url($image) . "\">";
    echo "\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n";
}, 5);
