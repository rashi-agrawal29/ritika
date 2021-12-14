const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug','7 Aug'],
      datasets: [{
          label: 'This Year',
          data: [18, 4, 18, 27, 29, 18,20],
          backgroundColor: [
              '#483D8B',
          ],
          borderColor: [
              '#483D8B',
          ],

      },{
        label: 'Last Year',
        data: [12, 20, 13, 27, 29, 19,20],
        backgroundColor: [
            '#98FB98',
        ],
        borderColor: [
            '#FFF0F5',
        ],
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});





var xValues = ["Desktop", "Tablet", "Mobile"];
var yValues = [63, 15, 22];
var barColors = [
  "#663399",
  "#B22222",
  "#FFA500"
  
];

new Chart("pie", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Traffic by Device"
    }
  }
});