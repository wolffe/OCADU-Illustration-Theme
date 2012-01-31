	<article <?php post_class(); ?>>
		<header class="entry-header">

		<?php if ( is_page() ) : // Only display Excerpts for Search ?>

			<h1><?php the_title(); ?></h1>

		<?php else : ?>

			<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
			   <h1><?php the_title(); ?></h1>
			   <?php the_post_thumbnail('thumbnail', array('alt' => 'Thumbnail of '.get_the_title().'', 'title' => ''.get_the_title().'' )); ?>
			</a>

		<?php endif; ?>

		</header><!-- .entry-header -->

		<?php if ( is_search() ) : // Only display Excerpts for Search ?>
			<?php 
			$excerpt = get_the_excerpt();
			if ($excerpt) {
				echo '<div class="entry-summary">';
				echo $excerpt;
				echo '</div>';
			}
			 ?>
		<?php elseif ( is_page() ) : ?>
				<div class="entry-content">
					<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>' ) ); ?>
				</div><!-- .entry-content -->
				<?php endif; ?>
		

	</article><!-- #post-<?php the_ID(); ?> -->