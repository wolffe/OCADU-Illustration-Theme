<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<!--

 @@@@@@   @@@@@@@  @@@@@@  @@@@@@@     @@@  @@@     @@@@@@   @@@@@@   @@@ @@@  @@@
@@!  @@@ !@@      @@!  @@@ @@!  @@@    @@!  @@@    @@   @@@ @@!  @@@ @@@@ @@@  @@@
@!@  !@! !@!      @!@!@!@! @!@  !@!    @!@  !@!      .!!@!  @!@  !@!  !@! @!@!@!@!
!!:  !!! :!!      !!:  !!! !!:  !!!    !!:  !!!     !!:     !!:  !!!  !!!      !!!
 : :. :   :: :: :  :   : : :: :  :      :.:: :     :.:: :::  : : ::   ::       : :
 
-->

<head>
<meta http-equiv="content-type" content="text/html; charset=<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
<title><?php

	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	?></title>
<?php
	wp_head();
?>
</head>

<body <?php body_class(); ?>>
	<header id="app-head" class="<?php if ( is_home() || is_front_page() ) : ?>inverted<?php endif; ?>" role="banner">
		<div class="container">
				
			<div class="logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
			</div>

			<div class="year-indicator">
				<a href="#" class="year-current">2014</a>
			</div>

			<div id="search" role="search">
				<?php get_search_form(); ?>
			</div><!-- #search -->

			<div id="year-widget">
				<?php 
					$grad_year = get_terms('gradyear', 'hide_empty=1&order=DESC'); 
					// Selected menu state for attachments 
					if (is_attachment()) {
						$terms = get_the_terms($post->post_parent, 'gradyear');
						foreach ( $terms as $term ) { 
							$selected_year = $term->name;
						}
					} elseif (is_singular('illustrator')) {
						// Selected menu state for individual items
						$terms = get_the_terms( $post->ID , 'gradyear' );
						foreach ( $terms as $term ) {
							$selected_year = $term->name;
						}
					}
				?>
				<nav id="year-select">
					<h3 class="hidden"><?php _e( 'Year select', 'ocaduillustration' ); ?></h3>
						<ul id="illu-jumpmenu" class="normalized">
							<?php foreach( $grad_year as $year ) {
								echo "<li>";
									if ( is_singular('illustrator') && $selected_year == $year->name ) {
										echo "<a href='". get_term_link( $year->slug, 'gradyear' )."' title='View Work From ".$year->name."' class='selected' >".$year->name."</a>";
									} elseif ( is_attachment() && $selected_year == $year->name ) {
										echo "<a href='". get_term_link( $year->slug, 'gradyear' )."' title='View Work From ".$year->name."' class='selected' >".$year->name."</a>";
									} elseif ( isset($term) && $term == $year->name ) {
										echo "<a href='". get_term_link( $year->slug, 'gradyear' )."' title='View Work From ".$year->name."' class='selected' >".$year->name."</a>";
									} else {
										echo "<a href='". get_term_link( $year->slug, 'gradyear' )."' title='View Work From ".$year->name."'>".$year->name."</a>";
									}
								echo "</li>";
							}
							?>
						</ul>
				</nav> <!-- #year-Select-->
			</div> <!-- #year-widget-->
			<?php if (is_singular('illustrator')) 
	echo '<a id="year-back-button" href="/year/'. $term->slug .'" title="Return to '.$term->name.' grid"><span>' . $term->name . ' index</span></a>';  
?>
			
			<nav id="access" role="navigation">
				<h3 class="hidden"><?php _e( 'Main menu', 'ocaduillustration' ); ?></h3>
				<?php wp_nav_menu( array( 
					'container' =>false,
					'menu_class' => 'nav',
					'theme_location' => 'primary' )
					); ?>			
			</nav><!-- #access -->

		</div><!-- .container -->
	</header><!-- #app-head -->

<div <?php if ( is_home() || is_front_page() ) : ?>id="pack-content"<?php else: ?>id="content"<?php endif; ?> role="main">
