async function product(){
	response = await fetch("http://localhost:3000/api/cameras");
	data = await response.json()
	return data; 
	}
	product().then(function(data){
		for(article of data)
		console.log(article.name)})