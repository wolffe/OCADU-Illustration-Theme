<!doctype html>
<html <?php language_attributes(); ?>>

<!--
. 　　　　　 ✫  　　　　  ˚  * 　　* 　　 .   +  　　　  ·. ˚  * 　 ✺ 　 .  ˚ .
 ˚ 　　　　　　  ·. ˚  * 　　 ˚  ✺  *  　       ˚  ✺  *  　
　* 　　 .   +     * 　　 .   + * 　✷   ·     ✧　　　　　 ✹ 　   ✧ ·　  ˚  * 　　*
 @@@@@@   @@@@@@@  @@@@@@  @@@@@@@     @@@  @@@     @@@@@@   @@@@@@   @@@   @@@@@
@@!  @@@ !@@      @@!  @@@ @@!  @@@    @@!  @@@    @@   @@@ @@!  @@@ @@@@ @@!@
@!@  !@! !@!      @!@!@!@! @!@  !@!    @!@  !@!      .!!@!  @!@  !@!  !@! @!@!@!@
!!:  !!! :!!      !!:  !!! !!:  !!!    !!:  !!!     !!:     !!:  !!!  !!! !!:  !!!
 : :. :   :: :: :  :   : : :: :  :      :.:: :     :.:: :::  : : ::   ::   : : ::
  * 　✷   ·  　　 ✵  .· .* 　✷   ·  　　 ✵  .· . * 　✷       .* 　 ✵  .·　 ✵  .· .
   ✧　　　　　 ✹ 　   ✧ · ˚  ✺  *  　            ✺ 　 .  ˚ .      ✺ 　 　   ✧
    *  　　　　 .    · 　  ✺ 　　　 ✹  ˚  ✧ ✵  ˚  ✺  *  　.    ·   ✧ ✵  ˚  ✺    .· .*
-->

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width,maximum-scale=1.0,initial-scale=1.0,minimum-scale=1.0,user-scalable=yes" />
  <?php wp_head(); ?>

</head>

<body <?php body_class(); ?> id="content-container">
  <a class="screen-reader-shortcut" tabindex="1" href="#main">Skip to main content</a>

  <div class="loader"><h1>Loading...</h1></div>
  <header role="banner">
    <div class="app-head-items">

        <div class="heading-inner">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" rel="home" title="OCAD U Illustration"><?php bloginfo( 'name' ); ?></a><br>
          <button id="year-select-link" data-panel="year-select" class="header-item" title="Select year">
            Year
          </button><br>
          <button id="search-link" data-panel="search-container" class="header-item" title="Search archive">
            Search
          </button>
        </div>

        <?php
          $grad_year = get_terms( 'gradyear', 'hide_empty=1&order=DESC' );
          if ( is_singular( 'illustrator' ) ) {
            // Selected menu state for individual items.
            $terms = get_the_terms( $post->ID , 'gradyear' );
            foreach ( $terms as $term ) {
              $selected_year = $term->name;
            }
          } else {
            $taxonomy = get_queried_object();
            if ( isset( $taxonomy ) ) {
              $selected_year = $taxonomy->name;
            }
          }
        ?>

        <div class="year-select panel" aria-hidden="true" tabindex="-1">
          <ul class="year-select-wrapper">
            <?php foreach ( $grad_year as $year ) {
              if ( isset( $selected_year ) && $selected_year == $year->name ) {
                echo "<li><a class='year-item active' href='" . esc_url( get_term_link( $year->slug, 'gradyear' ) ) . "' title='View Work From " . esc_html( $year->name ) . "'>";
              } else {
                echo "<li><a class='year-item' href='" . esc_url( get_term_link( $year->slug, 'gradyear' ) ) . "' title='View Work From " . esc_html( $year->name ) . "'>";
              }
                esc_html_e( $year->name );
              echo '</a></li>';
            }
            ?>
          </ul>
          <button class="close-panel" title="Close panel" aria-label="Close search panel">Close</button>
          <a href="/about" class="panel-colophon" title="About OCAD U Illustration"><span class="hidden">About OCAD U Illustration</span></a>
        </div> <!-- year-select-->

        <div class="search-container panel" aria-hidden="true" tabindex="-1">
          <div class="search-wrapper">
            <?php get_search_form(); ?>
          </div>
          <button class="close-panel" title="Close search panel" aria-label="Close search panel">Close</button>
          <a href="/about" class="panel-colophon" title="About OCAD U Illustration"><span class="hidden">About OCAD U Illustration</span></a>
        </div><!-- search -->
       
    </div><!-- .app-head-items -->
  </header><!-- header -->

  <main id="main" role="main">
