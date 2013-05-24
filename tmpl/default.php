<?php
// no direct access
defined('_JEXEC') or die;
?>
<?php
$document = JFactory::getDocument();
$document->addScript('modules/mod_jvectormap/assets/jquery-jvectormap-1.1.1.min.js');
$document->addScript('modules/mod_jvectormap/assets/jquery-jvectormap-ch-merc-en.js');
$document->addScript('modules/mod_jvectormap/assets/jvectormap-instance.js');
$document->addStyleSheet('modules/mod_jvectormap/assets/jvectormap.css');
//$document->addStyleSheet('modules/mod_eisuloader/assets/stylesheet.css');
//echo $jvectormap;
?>
<div class="jvectormap-search">
	<form id="live-search" action="" class="styled" method="post">
		<fieldset>
			<input class="inputbox" type="text" value="PLZ oder Ort" id="filter" onfocus="if (this.value=='PLZ oder Ort') this.value='';" onblur="if (this.value=='') this.value='PLZ oder Ort';" />
			<!--<input type="text" class="text-input" id="filter" value="" />-->
			<span id="filter-count"></span>
		</fieldset>
	</form>
</div>
<div id="ch-map"></div>
<div id="results-wrapper">
	<ul class="jvectormap-results<?php //echo $moduleclass_sfx; ?>">
		<li class="load">Bitte wählen Sie ein Kanton.</li>
	<?php foreach ($jvectormap as $item) : ?>
		<li class="info <?php echo $item->category_alias; ?>">
			<?php require JModuleHelper::getLayoutPath('mod_jvectormap', '_item'); //echo "<pre>"; print_r($item->category_alias); echo "</pre>"; ?>
		</li>
	<?php endforeach; ?>
	</ul>
</div>