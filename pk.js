$(document).ready(function(){
    $.ajax({
        url:"http://localhost/pankaj/data_2.php",
        type:"GET",
        crossDomain:true,
        success:function(data){
            console.log(data);
            var id=[];
            var Temperature=[];
            var Pressure=[];
            var Air=[];
            var Moisture=[];
            for (var i in data){
                id.push(data[i].id);
                Temperature.push(data[i].Temperature);
                Pressure.push(data[i].Pressure);
                Air.push(data[i].Air);
                Moisture.push(data[i].Moisture);
                                
            }
            var chartdata={
                labels:id,
                datasets:[{
                    label:"Temperature",
                    fill:false,
                    lineTension:0.1,
                    backgroundColor:"rgba(59,89,152,0.75)",
                    borderColor:"rgba(59,89,152,0.75)",
                    data:Temperature
                },
                {
                    label:"Pressure",
                    fill:false,
                    lineTension:0.1,
                    backgroundColor:"rgba(235, 64, 52,0.75)",
                    borderColor:"rgba(235, 64, 52,0.75)",
                    data:Pressure
            },
            {
                    label:"Air Quality",
                    fill:false,
                    lineTension:0.1,
                    backgroundColor:"rgba(148, 240, 62,0.75)",
                    borderColor:"rgba(148, 240, 62,0.75)",
                    data:Air
            },
                          {
                    label:"Soil Moisture",
                    fill:false,
                    lineTension:0.1,
                    backgroundColor:"rgba(240, 74, 201,0.75)",
                    borderColor:"rgba(240, 74, 201,0.75)",
                    data:Moisture
            }
                ]
            };
                     
            var ctx=$("#linegraph");
            var line=new Chart(ctx,{
                type:'line',
                data:chartdata
            })
    }
    });
});