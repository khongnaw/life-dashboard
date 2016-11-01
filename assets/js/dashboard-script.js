
var eStates = {
     Adding: 1,
     Substracting: 2,
     Idle: 3,
}
var fCurrentState = eStates.Idle;
var fCurrentThis = null;
var fMousePressed = false;
$(document).ready(function(){

     setInterval(stateMachine, 100);

     $('.carousel').carousel();

     $('.modal-trigger').leanModal();

     $('.btn-add-pt').mousedown(function() {
          fCurrentState = eStates.Adding;
          fCurrentThis = this;
          fMousePressed = true;
     })
     $('.btn-add-pt').on("tap", "p", function() {
          add_progress(this);
     })
     $('.btn-add-pt').mouseup(function() {
          fMousePressed = false;
     })
     $('.btn-minus-pt').mousedown(function() {
          fCurrentState = eStates.Substracting;
          fCurrentThis = this;
          fMousePressed = true;
     })
     $('.btn-minus-pt').on("tap", "p", function() {
          subtrct_progress(this);
     })
     $('.btn-minus-pt').mouseup(function() {
          fMousePressed = false;
     })

});
var stateMachine = function () {
     switch (fCurrentState){
          case eStates.Adding:
               if(fMousePressed) {
                    add_progress(fCurrentThis);
               }else {
                    fCurrentState = eStates.Idle;
                    fCurrentThis = null;
               }
               break;
          case eStates.Substracting:
              if(fMousePressed) {
                   subtrct_progress(fCurrentThis);
              }else {
                   fCurrentState = eStates.Idle;
                   fCurrentThis = null;
              }
               break;
          case  eStates.Idle:
             break;
     }
}
var add_progress = function (this_) {
     var num =  parseInt($(this_).siblings('.progress-num').find('span.num').text());
     var den =  parseInt($(this_).siblings('.progress-num').find('span.den').text());
     num = (num + 1 <= den) ? num + 1: num;
     update_progress(this_,num,den)
}
var subtrct_progress = function (this_) {
     var num =  parseInt($(this_).siblings('.progress-num').find('span.num').text());
     var den =  parseInt($(this_).siblings('.progress-num').find('span.den').text());
     num = (num - 1 >= 0) ? num - 1: num;
     update_progress(this_,num,den)
}
var update_progress = function (this_, num, den) {
     $(this_).siblings('.progress-num').find('span.num').text(num)
     $(this_).siblings('.progress-num').find('span.den').text(den)

     var percent = (num / den) * 100 + '%';
     $(this_).siblings('.progress').children('.determinate').css('width',percent);
}

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
