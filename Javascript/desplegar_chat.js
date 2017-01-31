(function (){
	var chatBtn=document.getElementById("chat_btn");
	var chat=document.getElementById("chat");
	var box=document.getElementById("srch");
	
	var desplegarChat=function(){

		if(chat.style.height=="30px"){
			chat.style.height="400px";
			box.focus();

		}else{
			chat.style.height="30px";
		}
	}

	chatBtn.addEventListener("click",desplegarChat);
}());