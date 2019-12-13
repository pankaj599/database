<?php

$con = mysqli_connect("192.168.43.9","myuser","mypass","hello","3306"); # 192.168.43.9 is the IP of Pi, 3306 is the port no.
$result=mysqli_query($con,"SELECT * FROM pa");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>
		database connection
	</title>
     <link rel="stylesheet" type="text/css" media="screen" href="pi.css">
    </head>
<body>
        <div style="overflow-x:auto;">
		<table>
		<tr>
				<th colspan="6"><p style="color:orange;font:bold 30px verdana"><u>TEAM DRISHTI</u></p></th>
</tr>
			<tr class="data">
				<th>Serial No.</th>
				<th>name</th>
				<th>surname</th>
                <th>age</th>
                
				
				
			</tr>
<?php
		   while($row=mysqli_fetch_assoc($result))
{
		?>
             <tr>
             	<td><?php echo $row['id']; ?></td>
             	<td><?php echo $row['name']; ?></td>
             	<td><?php echo $row['surname']; ?></td>
                 <td><?php echo $row['age']; ?></td>
                
             	
             </tr>
             <?php
         }
         ?>
		</table>
        </div>
  
	</body>
    
</html>
				
				
			




