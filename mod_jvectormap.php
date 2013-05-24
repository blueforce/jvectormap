<?php
/**
 * jvectormap module
 */

// no direct access
defined('_JEXEC') or die;

require_once __DIR__ . '/helper.php';

$jvectormap = modjvectormapHelper::getjvectormap( $params );
$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

require JModuleHelper::getLayoutPath( 'mod_jvectormap', $params->get('layout', 'default'));

?>