<article <?php post_class(); ?>>
			
		<?php
			    $gallery_shortcode = '[gallery size="medium" itemtag="div" icontag="div" columns="0"]';
					print apply_filters( 'the_content', $gallery_shortcode );
		?>
		<div id="illustrator-meta-guide">
		<aside id="illustrator-meta">
		<header class="entry-header">
			<h1 class="entry-title"><?php the_title(); ?></h1>
			<hr />
		</header><!-- .entry-header -->
			
				<?php if ( get_post_meta($post->ID, 'illu_sites', true) ) : ?>
					<div class="info site"><a title="Visit illustrator's website" href="<?php echo get_post_meta($post->ID, 'illu_sites', true) ?>"><?php echo get_post_meta($post->ID, 'illu_sites', true) ?></a></div><hr />
					
				<?php endif; ?>

				<?php if ( get_post_meta($post->ID, 'illu_sites_2', true) ) : ?>
					<div class="info site"><a title="Visit illustrator's website" href="<?php echo get_post_meta($post->ID, 'illu_sites_2', true) ?>"><?php echo get_post_meta($post->ID, 'illu_sites_2', true) ?></a></div><hr />
				<?php endif; ?>

				<?php if ( get_post_meta($post->ID, 'illu_email', true) ) : ?>
				 <div class="info email"><a title="Email <?php the_title(); ?>" href="mailto:<?php echo get_post_meta($post->ID, 'illu_email', true) ?>"><?php echo get_post_meta($post->ID, 'illu_email', true) ?></a></div><hr />
				<?php endif; ?>

				<?php if ( get_post_meta($post->ID, 'illu_phone', true) ) : ?>
				 <div class="info phone"><?php echo get_post_meta($post->ID, 'illu_phone', true) ?></div>	<hr />
				<?php endif; ?>
			
		
		<?php the_content(); ?>
		
		<footer class="nav-single">
			
			<nav id="nav-single">
				<h3 class="assistive-text"><?php _e( 'Post navigation' ); ?></h3>
				<ul>
				<li class="nav-previous"><?php previous_post_link_plus( array('order_by' => 'post_title', 'format' => '%link', 'in_same_tax' => true) ); ?></li>
				<li class="nav-next"><?php next_post_link_plus( array('order_by' => 'post_title', 'format' => '%link', 'in_same_tax' => true) ); ?></li>
				</ul>
			</nav><!-- #nav-single -->

		</footer><!-- .nav-single -->
		

		
		<span class="vertical-rule-main"></span>
		<span class="vertical-rule-corner-top"></span>
		<span class="vertical-rule-corner-bottom"></span>
		
		</aside><!-- aside -->
		</div>
	
</article><!-- #post-<?php the_ID(); ?> -->
