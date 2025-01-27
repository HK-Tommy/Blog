$(document).ready(function() {
	
	/* ======= Highlight.js Plugin ======= */ 
    /* Ref: https://highlightjs.org/usage/ */     
    $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	 });

});

function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const postid = urlParams.get('post');
    
	if (document.getElementById(postid) != undefined){
		document.getElementById(postid).style.display = ""
		document.title = document.getElementById("title?"+postid).innerText + " - 湯米Tommy's Blog"
	}
	else{
		document.getElementById("error404").style.display = ""
		document.title = "404 Error - 湯米Tommy's Blog"
	}
}
GetParams()