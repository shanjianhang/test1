document.getElementById("content").addEventListener("click",function(e){
	e.stopPropagation();
	if(e.target.tagName=="TD"){
		if(e.clientX>240){
			window.open("/EventPage/detail.html")
		}
	}
})