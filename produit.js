
	async function recup() {
	let id=sessionStorage.getItem("article_id")
	
	response = await fetch("http://localhost:3000/api/cameras/"+id);
	let product= await response.json();
	return product; 
	
}
recup().then(function(product){
		const lenses = product.lenses;
		for (let i = 0; i<lenses.length; i++) {
			const child_lenses=document.getElementById("personnalisation")
			const lenses_child=document.createElement("option");
			child_lenses.append(lenses_child);
			console.log(lenses_child.innerHTML=lenses[i])
					}
		const child_photo=document.getElementById("product");
		const photo_child=document.createElement("img");
		photo_child.src=product.imageUrl;
		photo_child.alt=product.name;
		photo_child.title=product.name;
		child_photo.append(photo_child);
		photo_child.id="product_img";

		//Pour afficher la description
		const child_description=document.getElementById("infos");
		const description_child=document.createElement("p");
		child_description.append(description_child);
		description_child.id="description";
		console.log (description_child.innerHTML+=product.description);

		//Affichage du prix
		const child_price=document.getElementById("infos");
		const price_child=document.createElement("h4");
		child_price.append(price_child);
		price_child.id="price";
		price=product.price/100;
		price+=" €";
		console.log (price_child.innerHTML+=price);

		//Pour afficher le nom du produit
		const child_name=document.getElementById("infos");
		const name_child=document.createElement("h3");
		child_name.append(name_child);
		name_child.className=product.name;
		name_child.id="name";
		console.log (name_child.innerHTML+=product.name);
	
	})


	



	



