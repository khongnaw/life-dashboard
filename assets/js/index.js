$(document).ready(function(){

	//$('*').css('border', '4px solid red')
	//('.carousel').carousel();
     $('.modal-trigger').leanModal();
});
var config = {
     type: 'doughnut',
     data: {
          datasets: [{
               data: [20,65]
               ,
               backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)'
               ],
               label: 'Dataset 1'
          }],
          labels: [
               "Age",
               "Year Left"
          ]
     },
     options: {
          responsive: true,
          legend: {
               display:false
               //position: 'top',
          },
          title: {
               display: true
              //text: 'Chart.js Doughnut Chart'
          },
          animation: {
               animateScale: true,
               animateRotate: true,
               animateScale: true
          }
     }
};

window.onload = function() {

     // var ctx = document.getElementById("chartMy1").getContext("2d");
     // window.myDoughnut = new Chart(ctx, config);

     var ctx2 = document.getElementById("chartMy2").getContext("2d");
     window.myDoughnut = new Chart(ctx2, config);

     // var ctx3 = document.getElementById("chartMy3").getContext("2d");
     // window.myDoughnut = new Chart(ctx3, config);
};
