window.onload = async function(){
	let luigi = document.getElementById("luigi");
	let w = 25;
	let h = 32;
	while(true){
		luigi.width=w;
		luigi.height=h;
		await new Promise(r=> setTimeout(r, 40));
		w++;h++
	}
}
