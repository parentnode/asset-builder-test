<?
$dev = isset($_GET["dev"]) ? $_GET["dev"] : false;
?>
<html>
<head>
<? if($dev): ?>
	<script src="/js/lib/seg_desktop_include.js"></script>
	<script src="/js/lib/seg_smartphone_include.js"></script>
	<link href="/css/lib/seg_desktop_include.css" rel="stylesheet" />
	<link href="/css/lib/seg_smartphone_include.css" rel="stylesheet" />
	<script src="/janitor/js/lib/seg_desktop_include.js"></script>
	<link href="/janitor/css/lib/seg_desktop_include.css" rel="stylesheet" />
<? else: ?>
	<script src="/js/seg_desktop.js"></script>
	<script src="/js/seg_smartphone.js"></script>
	<link href="/css/seg_desktop.css" rel="stylesheet" />
	<link href="/css/seg_smartphone.css" rel="stylesheet" />
	<link href="/janitor/css/seg_desktop.css" rel="stylesheet" />
	<script src="/janitor/js/seg_desktop.js"></script>
<? endif; ?>
</head>
<body>

<? if(!$dev): ?>
<h1>
	Go to <a href="http://asset-builder-test.local/asset-builder">asset-builder-test.local/asset-builder</a> and
	<a href="http://asset-builder-test.local/asset-builder?path=janitor">asset-builder-test.local/asset-builder?path=janitor</a>
	to build
</h1>
<? endif; ?>

<div class="applied">

	<h2>Applied CSS</h2>

	<div id="login_overlay"><div class="field required"><div class="indicator">indicator</div></div>

	<div id="login">tuborg</div>

	<div id="test1">empty</div>
	<div id="test2">soulland</div>
	<div id="test3">green svg</div>
	<div id="test4">Loader</div>
	<div id="test5">ocean</div>
	<div id="test6">M-logo</div>
	<div id="test7">empty</div>
	<div id="test8">empty</div>
	<div id="test9">empty</div>
	<div id="test10">M-logo</div>
	<div id="test11">M-logo</div>
	<div id="test12">Loader</div>

	<div id="testsm">Tuborg</div>
	<div id="module">ocean</div>

	<div id="testj1">soulland</div>
	<div id="testj2">distortion</div>
	<div id="testj3">ocean</div>

	<div id="content">
		<div class="scene">
			<p class="test1">Lorem ipsum dolor sit amet</p>
			<p class="test2">Lorem ipsum dolor sit amet</p>
			<p class="testj1">Lorem ipsum dolor sit amet</p>
			<p class="testj2">Lorem ipsum dolor sit amet</p>
		</div>
		
	</div>
</body>
</html>