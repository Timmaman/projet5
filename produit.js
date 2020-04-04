// Récupération du produit cliqué
async function recup() {
	let id = sessionStorage.getItem("article_id")
	console.log(id)

	//Si on arrive direct sur la page produit --> Renvoi page index
	if (id == undefined) {
		document.location.href = "index.html";
	}
	else {
		response = await fetch("http://localhost:3000/api/cameras/" + id);
		let product = await response.json();
		return product;
	}
}

//Affichage du produit sélectioné
recup().then(function (product) {
	const lenses = product.lenses;
	for (let i = 0; i < lenses.length; i++) {
		const child_lenses = document.getElementById("personnalisation")
		const lenses_child = document.createElement("option");
		child_lenses.append(lenses_child);
		console.log(lenses_child.innerHTML = lenses[i])
	}

	//Affichage photos
	const child_photo = document.getElementById("product");
	const photo_child = document.createElement("img");
	photo_child.src = product.imageUrl;
	photo_child.alt = product.name;
	photo_child.title = product.name;
	child_photo.append(photo_child);
	photo_child.id = "product_img";

	//Pour afficher la description
	const child_description = document.getElementById("infos");
	const description_child = document.createElement("p");
	child_description.append(description_child);
	description_child.id = "description";
	console.log(description_child.innerHTML += product.description);

	//Affichage du prix
	const child_price = document.getElementById("infos");
	const price_child = document.createElement("h4");
	child_price.append(price_child);
	price_child.className = product.price / 100;
	price_child.id = "price";
	price = product.price / 100;
	price += " €";
	console.log(price_child.innerHTML += price);

	//Pour afficher le nom du produit
	const child_name = document.getElementById("infos");
	const name_child = document.createElement("h3");
	child_name.append(name_child);
	name_child.className = product.name;
	name_child.id = "name";
	console.log(name_child.innerHTML += product.name);

	const child_id = document.getElementById("infos");
	const id_child = document.createElement("h3");
	child_id.append(id_child);
	id_child.className = product._id;
	id_child.id = "id";

})

// Ajout au panier
function add() {
	// Récupération des noms de produit, prix et ID
	const name = document.getElementById('name');
	let product = name.getAttribute('class');
	const price = document.getElementById('price');
	let value = price.getAttribute('class');
	const identifier = document.getElementById('id');
	let id_name = identifier.getAttribute('class');
	let stock = localStorage.getItem("nb");
	let all = localStorage.getItem("add")


	if (stock == undefined) {
		stock = 0;
		all = "a"
	}

	//test si le produit est déjà dans le panier
	let search = all.indexOf(product) != -1;
	if (search == 1) {
		alert("Ce produit est déjà dans votre panier")
	}
	//Ajout au panier
	else {
		let i = stock;
		all += product
		i++;
		localStorage.setItem("article_name" + i, product);
		localStorage.setItem("article_price" + i, value);
		localStorage.setItem("article_id" + i, id_name);
		localStorage.setItem("add", all)
		localStorage.setItem("nb", i);
		alert("Ce produit a bien été ajouté au panier!");
	}
}










