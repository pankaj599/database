$(document).ready(function(){
    $.ajax(
    {
        url:"http://localhost/pankaj/data_2.php",
        type:"GET",
       
        crossDomain:true,
        success:function(data){
       console.log(data);
            var id=[];
            var temperature=[];
            var ph=[];
            var moisture=[];
            var pressure=[];
            for (var i in data){
                id.push("id"+data[i].id);
                temperature.push(data[i].temperature);
                ph.push(data[i].ph);
                moisture.push(data[i].moisture);
                pressure.push(data[i].pressure);
                                
            }
            var chartdata={
                labels:id,
              //labels:"lbls.split(',')"
                datasets:[{
                    label:"Temperature",
                    fill:false,
                    lineTension:0.1,
                    backgroundColor:"rgba(59,89,152,0.75)",
                    borderColor:"rgba(59,89,152,0.75)",
                    data:temperature
                },
               
                {
                    label:"Pressure",
                    fill:false,
                    lineTension:0.1,
                    backgroundColor:"rgba(235, 64, 52,0.75)",
                    borderColor:"rgba(235, 64, 52,0.75)",
                    data: ph
            },
            {
                    label:"Air Quality",
                    fill:false,
                    lineTension:0.1,
                    backgroundColor:"rgba(148, 240, 62,0.75)",
                    borderColor:"rgba(148, 240, 62,0.75)",
                    data: moisture
            },
                          {
                    label:"Soil Moisture",
                    fill:false,
                    lineTension:0.1,
                    backgroundColor:"rgba(240, 74, 201,0.75)",
                    borderColor:"rgba(240, 74, 201,0.75)",
                    data: pressure
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
})
