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
                
          alert("your marks:"+ marks +"/20")
    event.preventDefault();
   });
   });

