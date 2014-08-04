/* Top Header */
$( "span:contains('BRAIN')").before( '<img id="lavastorm" src="https://lavastorm.atlassian.net/s/en_USyhfl86-1988229788/6318/19/_/jira-logo-scaled.png" /> ' );
$( "a:contains('Lavastorm Analytics')").css( "display", "none" );
$( "h1:contains('View Problem Report')" ).css( "font-size", "14px" );

var create_button = $( "a:contains('CREATE')" ).addClass( "create_button" );
$( "td a:contains('HELP')" ).after( create_button );


/* View PR Header */
var synopsis = $( "tr:contains('Synopsis:')" ).addClass( "synopsis" );
$( "h1" ).after( synopsis );

$( "td:contains('Synopsis:')").css( "display", "none" );

$( "h1:contains('Main Page')").replaceWith( "<h1 class='dashboard'>System Dashboard</h1>" );


/*
LAE avatar
synopsis.before( '<img id="lavastorm" src="https://lavastorm.atlassian.net/secure/projectavatar?pid=10205&avatarId=10203" />' );
https://lavastorm.atlassian.net/secure/projectavatar?pid=10205&avatarId=10203
*/

/* LOGIN PAGE */
var login_title = $( "h1[style='font-weight: normal']:contains('Login')" );
if (login_title.length != 0 ){

	$( "body" ).css( "background", "#F5F5F5" );
	$( "table[width='100%']" ).css( "display", "none" );

	$( "form[method='post']" ).addClass( "login_form" );
	$( "input[type='submit']" ).addClass( "login_button" );

	login_title.before( "<div class='login_header'><span>GnAtlassian ASAP<span></div>" );
	login_title.css( "display", "none");
}

