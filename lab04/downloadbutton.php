<?php 

header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary"); 
header("Content-disposition: attachment; filename=\"" . "test.csv" . "\""); 
readfile($test.csv);

?>