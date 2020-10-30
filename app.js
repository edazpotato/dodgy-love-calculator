function setup() {
	var form = document.getElementById("input");
	var output = document.getElementById("output");
	var input1 = document.getElementById("name-1");
	var input2 = document.getElementById("name-2");
	form.addEventListener("submit", function(e){
		e.preventDefault();
		var name1 = input1.value;
		var name2 = input2.value;
		var percent = Math.floor(Math.random() * 100) + 1;
		var html = '<img class="output--image" src="heart.png" /><h3 class="output--names">'+name1+' & '+name2+'</h3><p class="output--text">are</p><h2 class="output--percent">'+percent+'%</h2><p class="output--text">compatible!</p>'
		output.innerHTML = html;
	});
}

document.addEventListener("DOMContentLoaded", function(){
	setup();
});
