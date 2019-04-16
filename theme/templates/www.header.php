<?
$dev = isset($_GET["dev"]) ? $_GET["dev"] : false;
?>
<!DOCTYPE html>
<html lang="DA">
<head>
	<!-- (c) & (p) think.dk 2002-2019 -->
	<!-- For detailed copyright license, see /terms -->
	<!-- If you want to use or contribute to this code, visit https://parentnode.dk -->
	<title>Asset builder test</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="keywords" content="development frontend HTML JavaScript CSS idealism web" />
	<meta name="description" content="" />
	<meta name="viewport" content="initial-scale=1, user-scalable=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />

	<link rel="apple-touch-icon" href="/touchicon.png">
	<link rel="icon" href="/favicon.png">

<? if($dev) { ?>
	<script type="text/javascript" src="/js/lib/seg_desktop_include.js"></script>
	<script type="text/javascript" src="/js/lib/seg_smartphone_include.js"></script>
	<script type="text/javascript" src="/janitor/js/lib/seg_desktop_include.js"></script>
	<link type="text/css" href="/css/lib/seg_desktop_include.css" rel="stylesheet" media="all" />
	<link type="text/css" href="/css/lib/seg_smartphone_include.css" rel="stylesheet" media="all" />
	<link type="text/css" href="/janitor/css/lib/seg_desktop_include.css" rel="stylesheet" media="all" />
<? } else { ?>
	<script type="text/javascript" src="/js/seg_<?= "desktop" ?>.js"></script>
	<script type="text/javascript" src="/js/seg_smartphone.js"></script>
	<script type="text/javascript" src="/janitor/js/seg_desktop.js"></script>
	<link type="text/css" href="/css/seg_<?= "desktop" ?>.css" rel="stylesheet" media="all" />
	<link type="text/css" href="/css/seg_smartphone.css" rel="stylesheet" media="all" />
	<link type="text/css" href="/janitor/css/seg_desktop.css" rel="stylesheet" media="all" />
<? } ?>

</head>

<body>

