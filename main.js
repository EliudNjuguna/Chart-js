let myChart = document.getElementById('myChart').getContext('2d');

//Global Options

Chart.defaults.global.defaultFontFamily = 'Times New Roman';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart,{
    type:'bar',
    data:{
        labels:['Boston','Worcester','Springfield','Lowell','Cambridge','New Bedford'],
        datasets:[{
            label:'population',
                data:[
                    947,629,
                    717,594,
                    381,045,
                    183,060,
                    106,519,
                    105,162,
                    95,072
                      ],
/*//            one color
           backgroundColor:'purple'*/
            
            
           // different colors for the bars
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255,99,132,0.6)'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
              
                   }]
    },options:{
        title:{
            display:true,
            text:'Largest Cities in Massachusetts',
            fontSize:25
        },
        legend:{
            position:'right',
            labels:{
                fontColor:'#000'
            }
        }
    }
    
    
});