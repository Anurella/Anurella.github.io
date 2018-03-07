

function getAnswer(form) {

	//get the v
	 console.log("whyyy");

	var name = form.name.value;
    var answer = form.ans.value;
    var dis =  document.getElementById("result");

     if ( answer == 225) {
     	 
     	 alert(name + " Well Done "  +  answer + " is the right Answer");
    		
     }

     else {

           alert( "Dear " + name + " Try Again Later!!!!"  );
     	
     }
	
}