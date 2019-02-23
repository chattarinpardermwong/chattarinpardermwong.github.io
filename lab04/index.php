<!DOCTYPE html>
<html>
<head>
    <title>PHP LAB04</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css" />

</head>
<body>
<h1 align="center">CLASS overall status ver.0.0.1</h1> 
<div class="container">
   <form id="upload_csv" method="post" enctype="multipart/form-data">
    <div class="col-md-3">
     <br />
    </div>  
                <div class="col-md-4">  
                   <input type="file" name="csv_file" id="csv_file" accept=".csv" />
                </div>  
                <div class="col-md-5">  
                    <input type="submit" name="upload" id="upload" value="Upload" style="margin-top:10px;" class="btn btn-info" />
                </div>  
                <div style="clear:both"></div>
   </form>
   <br />
   <br />
   <div class="table-responsive">
    <table class="table table-striped table-bordered" id="data-table">
     <thead>
      <tr>
        <th width="90"> <div align="center">Class </div></th>
        <th width="98"> <div align="center">Atk </div></th>
        <th width="98"> <div align="center">MAtk </div></th>
        <th width="98"> <div align="center">Def </div></th>
        <th width="98"> <div align="center">Spd </div></th>
      </tr>
     </thead>
    </table>
   </div>
  </div>
<?php
$fileHandle = fopen("test.csv", "r");
?>
<h1 align="center">CLASS overall status ver.0.0.0</h1>
<table class="table table-striped table-dark">
  <tr>
    <th width="90"> <div align="center">Class </div></th>
    <th width="98"> <div align="center">Atk </div></th>
    <th width="98"> <div align="center">MAtk </div></th>
    <th width="98"> <div align="center">Def </div></th>
    <th width="98"> <div align="center">Spd </div></th>
  </tr>
<?php
while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
?>
  <tr>
    <td><div align="center"><?php echo $row[0];?></div></td>
    <td><div align="center"><?php echo $row[1];?></div></td>
    <td><div align="center"><?php echo $row[2];?></div></td>
    <td><div align="center"><?php echo $row[3];?></div></td>
    <td><div align="center"><?php echo $row[4];?></div></td>
  </tr>
<?php
}
fclose($fileHandle);
?>
</table>
<form method="POST" action="downloadbutton.php">
    <input type="submit" value="DownloadFile" name="downloadbutton">
</form>
<form action="upload.php" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit" name="submit">UploadIMGFile</button>
</form>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js"></script>  
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>
</html>

<script>

$(document).ready(function(){
 $('#upload_csv').on('submit', function(event){
  event.preventDefault();
  $.ajax({
   url:"import.php",
   method:"POST",
   data:new FormData(this),
   dataType:'json',
   contentType:false,
   cache:false,
   processData:false,
   success:function(jsonData)
   {
    $('#csv_file').val('');
    $('#data-table').DataTable({
     data  :  jsonData,
     columns :  [
      { data : "Class" },
      { data : "Atk" },
      { data : "MAtk" }
      { data : "Def" }
      { data : "Spd" }
     ]
    });
   }
  });
 });
});

</script>

