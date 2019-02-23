<?php

//import.php

if(!empty($_FILES['csv_file']['name']))
{
 $file_data = fopen($_FILES['csv_file']['name'], 'r');
 fgetcsv($file_data);
 while($row = fgetcsv($file_data))
 {
  $data[] = array(
   'Class'  => $row[0],
   'Atk'  => $row[1],
   'MAtk'  => $row[2],
   'Def'  => $row[3],
   'Spd'  => $row[4]
  );
 }
 echo json_encode($data);
}

?>