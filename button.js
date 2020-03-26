function button(){
	const name=document.getElementById('name');
	let product=name.getAttribute('class');
	const price=document.getElementById('price');
	let value= price.getAttribute('class');
	let stock=sessionStorage.getItem("nb");
	let all=localStorage.getItem("add")
	if(stock==undefined){
		stock=0;
		all="a"
	}
	let search=all.indexOf(product)!=-1;
	console.log(all)
	console.log(search)

	if( search==1){
		alert("Ce produit est déjà dans votre panier")
	}
	else{
	let i=stock;
	all+=product
	i++;
	localStorage.setItem("article_name"+i,product);
	localStorage.setItem("article_price"+i,value);
	localStorage.setItem("add",all)
	sessionStorage.setItem("nb",i);
	alert("Ce produit a bien été ajouté au panier!");
	}
}

