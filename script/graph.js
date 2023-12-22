var options = {
    series: [{
      data: [21, 22, 10, 28]
    }],
    chart: {
      height: 200,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: [
      "rgba(0, 143, 251, 0.85)",
      "rgba(38, 166, 154, 0.85)",
      "rgba(254, 176, 25, 0.85)",
      "rgba(255, 69, 96, 0.85)"
    ],
    plotOptions: {
      bar: {
        columnWidth: '20%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        "All Calls",
        "Inbound",
        "Outbound",
        "Max Agents"
      ],
      labels: {
        style: {
          colors: [
            "rgba(0, 143, 251, 0.65)",
            "rgba(38, 166, 154, 0.65)",
            "rgba(254, 176, 25, 0.65)",
            "rgba(255, 69, 96, 0.65)"
          ],
          fontSize: '12px'
        }
      }
    }
  };
  
  var newchart = new ApexCharts(document.querySelector("#call-detail-graph"), options);
  newchart.render();
  {let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Logged In', 'In Calls', 'Waiting', 'Paused'];
let colorHex = ['rgb(127, 136, 242, 0.65)', 'rgb(127, 128, 146, 0.65)', 'rgba(254, 176, 25, 0.65)', 'rgba(255, 69, 96, 0.65)'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [50, 30, 10, 20],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})}
{let ctx = document.getElementById('myChart2').getContext('2d');
let labels = ['In Queue', 'Connected', 'Answered'];
let colorHex = ['rgba(228, 16, 48, 0.65)', 'rgba(18, 164, 44, 0.65)', 'rgba(13, 110, 253, 0.65)'];

let myChart2 = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [30, 10, 40],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})}
{let ctx = document.getElementById('myChart3').getContext('2d');
let labels = ['Users', 'Campaigns', 'Lists', 'DIDs'];
let colorHex = ['rgba(0, 143, 251, 0.65)', 'rgba(38, 166, 154, 0.65)', 'rgba(254, 176, 25, 0.65)', 'rgba(255, 69, 96, 0.65)'];

let myChart3 = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [30, 10, 40, 20],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})}