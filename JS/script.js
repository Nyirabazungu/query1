function myResult(){
    var score= 0;
    var ansArr=['e','c','a','a']

var q1 = document.form["Quiz"]["q1"].value;
var q2 = document.form["Quiz"]["q2"].value;
var q3 = document.form["Quiz"]["q3"].value;
var q4 = document.form["Quiz"]["q4"].value;
 
 for (var i=1;i <=numOfQuestions;i++){
     if(eval('q'+1)==''){
         alert("you missed question number" +i)
     }}
     for(var i=1;i <= numOfQuestions;1++){
         if (eval('q'+i) == AnsArr[i-1]){
     score ++;
         }
     }
 var results= document.getElementById( 'result')
 results.innerHTML ="<h2> you score "+" point out of" + numOfQuestions +"</h2>"
 alert('you scored' + score + 'out of' + numOfQuestions)
    }




