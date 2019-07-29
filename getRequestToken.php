

$consumer = new HTTP_OAuth_Consumer(constant('FEHUVEW84RAFR5SP22RABURUPHAFRUNU'), constant('ZUXEVEGA9USTAZEWRETHAQUBUR69U6EF'));
$consumer->getRequestToken(constant(
    'REQUEST_TOKEN'), constant('BASE_URL').'/getAccessToken.php'
);
When we have those we store them in the session.

$_SESSION['token'] = $consumer->getToken();
$_SESSION['tokenSecret'] = $consumer->getTokenSecret();
Redirect the user to the authorization page

$url = $consumer->getAuthorizeUrl(
    constant('AUTHORIZE_TOKEN')
);
header('Location:'.$url);