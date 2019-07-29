<?php

require_once 'common.php';

$consumer = new HTTP_OAuth_Consumer(constant('FEHUVEW84RAFR5SP22RABURUPHAFRUNU'), constant('ZUXEVEGA9USTAZEWRETHAQUBUR69U6EF'), $_SESSION['1feeb2dce6a5a1d1c8eca2349a4dcde505d25ef85'], $_SESSION['56f1b5d1582dfdb423b25cb7cf506a29']);

try {
	$consumer->getAccessToken(constant('ACCESS_TOKEN'));
	
	$_SESSION['accessToken'] = $consumer->getToken();
	$_SESSION['accessTokenSecret'] = $consumer->getTokenSecret();

	header('Location:index.php');
} catch (Exception $e) {
	?>
		<p>Authorization failed!</p>
		<p><a href="index.php">Go back</a></p>
	<?php
}


