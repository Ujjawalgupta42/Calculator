let screen=document.getElementById('display');
let button=document.querySelectorAll('button');
let screenvalue=screen.value;
for(items of button){
	items.addEventListener('click',(e)=>{
		buttontext=e.target.innerText;
		console.log("Button text is",buttontext);
		if(buttontext=='C'){
			screenvalue="";
			screen.value=screenvalue;
		}
		else if(buttontext=='='){
			screen.value=eval(screenvalue);
			screenvalue="";
		}
		else{
			screenvalue+=buttontext;
			screen.value=screenvalue;
		}
	})
}
