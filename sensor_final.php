<?php

$con = mysqli_connect("localhost","root","1234567890","snsors");
$result=mysqli_query($con,"SELECT * FROM data");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>
		database connection
	</title>
     <link rel="stylesheet" type="text/css" media="screen" href="hello.css">
    </head>
<body>
    
        <div style="overflow-x:auto;">
		<table>
            
		<tr>
				<th colspan="6">
                     <img src="svnit_1.jpg"
                          style="padding:10px 20px"
	             align="left"
	            height="80"
                width="100"
                        >
                    <img src="drishti.jpg"
                                                   
                style="padding: 10px 80px"
	             align="right"
	            height="80"
                width="100"
                        >
                   
                   
                    <p style="color:orange;font:bold 30px verdana ">
                    <u>TEAM DRISHTI</u></p>
                     
                   
                 
            </th>
           
</tr>
			<tr class="data">
				<th>Serial No.</th>
				<th>Temperature (°C)</th>
				<th>Pressure (hPa)</th>
                <th>Air Quality (ppm)</th>
                <th>Soil Moisture (g/m3)</th>
				
				
			</tr>
<?php
		   while($row=mysqli_fetch_assoc($result))
{
		?>
             <tr>
             	<td><?php echo $row['id']; ?></td>
             	<td><?php echo $row['Temperature']; ?></td>
             	<td><?php echo $row['Pressure']; ?></td>
                 <td><?php echo $row['Air']; ?></td>
                 <td><?php echo $row['Moisture']; ?></td>
             	
             </tr>
             <?php
         }
         ?>
		</table>
        </div>
    
    <h1 align="center"><u>SENSORS</u></h1>
        
        <canvas id="linegraph" width="400" height="100"></canvas>
        
        <script type="text/javascript" src="jquery.min.js"></script>
       <script type="text/javascript" src="chart.min.js"></script>
        <script type="text/javascript" src="pk.js"></script>
	</body>
    
</html>
				
				
			




