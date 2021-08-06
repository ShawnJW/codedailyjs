jQuery( document ).ready( function () {

// @TODO Add to dev log
    if ( jQuery( "iframe.fun-widget" ) ) {
        jQuery( "iframe.fun-widget" ).slideUp('slow');
        jQuery( "iframe.fun-widget" ).removeAttr( "style" );
        jQuery( "iframe.fun-widget" ).attr( "style", "margin: 0 auto; display: block;" )
    }
} );
