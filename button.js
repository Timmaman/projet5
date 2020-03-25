function button(){
	const name=document.getElementById('name');
	localStorage.setItem("article_name",name.getAttribute('class'));	
	alert ("Votre produit a été ajouté au panier")

	}
