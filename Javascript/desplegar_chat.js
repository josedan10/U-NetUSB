(function (){
	var chatBtn=document.getElementById("chat_btn");
	var chat=document.getElementById("chat");
	
	var desplegarChat=function(){

		if(chat.style.height=="30px"){
			chat.style.height="400px";
		}else{
			chat.style.height="30px";
		}
	}

	chatBtn.addEventListener("click",desplegarChat);
}());