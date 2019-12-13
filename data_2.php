<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

$con = mysqli_connect("localhost","root","1234567890","snsors");
$result=mysqli_query($con,"SELECT * FROM data");
$data=array();
foreach($result as $row){
    $data[]=$row;
}
print json_encode($data);
?>
		
				
			




