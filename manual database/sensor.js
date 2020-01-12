$(document).ready(function(){
    var ctx=$("#linegraph");
    var data={
        labels:["1","2","3","4","5"],
        datasets:[
            {
                label:"Temperature",
                data:[21,23,27,30,35],
                backgroundColor:"rgba(59,89,152,0.75)",
                borderColor:"rgba(59,89,152,0.75)",
                fill:false,
                lineTension:0.1,
                pointRadius:5
            },
            {
                label:"Pressure",
                data:[56,23,21,39,35],
                fill:false,
                lineTension:0.1,
                backgroundColor:"rgba(235, 64, 52,0.75)",
                borderColor:"rgba(235, 64, 52,0.75)",
                pointRadius:5
            },
            {
                label:"Moisture",
                data:[15,23,21,39,35],
                fill:false,
                lineTension:0.1,
                backgroundColor:"rgba(148, 240, 62,0.75)",
                    borderColor:"rgba(148, 240, 62,0.75)",
                pointRadius:5
            },
            {
                label:"mq5",
                data:[26,23,21,39,35],
                fill:false,
                lineTension:0.1,
                backgroundColor:"rgba(240, 74, 201,0.75)",
                    borderColor:"rgba(240, 74, 201,0.75)",
                pointRadius:5
            },
            {
                label:"mq135",
                data:[125,23,21,39,35],
                fill:false,
                lineTension:0.1,
                backgroundColor:"rgba(220, 227, 23,0.75)",
                borderColor:"rgba(220, 227, 23,0.75)",
                pointRadius:5
            },
            {
                label:"mq136",
                data:[96,23,21,39,35],
                fill:false,
                lineTension:0.1,
                backgroundColor:"rgba(227, 52, 148,0.75)",
                borderColor:"rgba(227, 52, 148,0.75)",
                pointRadius:5
            },
        ]
    };

    var chart=new Chart(ctx,{
        type:"line",
        data:data,
        options:{}
    });
});