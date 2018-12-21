/*$(document).ready(function myResult(){
$('#blanks form').submit(function(event){

var q1 = document.form["Quiz"]["q1"].value;
var q2 = document.form["Quiz"]["q2"].value;
var q3 = document.form["Quiz"]["q3"].value;
var q4 = document.form["Quiz"]["q4"].value;
var score=0;
if(q1=="e")
{
score=score+5;
}
if(q2=="c")
{
score=score+5;
}
if(q3=="a")
{
score=score+5;
}
if(q4=="a")
{
score=score+5;
}
alert("your:"+score)
$(".Output").show();
$("#display").text("your marks is :"+ score);

event.preventDefault();
})
});*/
$(document).ready(function (){
    $('#blanks form').submit(function(event){
    var marks=0;
      var blanks=["q1", "q2","q3","q4"]
        blanks.forEach(function(blank) {
            var userInput = $("input:radio[name=" + blank + "]:checked" ).val();
                    if(userInput=="a"){
                    marks = marks+5;
                    }
                })
          alert(marks)
    event.preventDefault();
   });
   });

