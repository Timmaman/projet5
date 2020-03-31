

function panier() {
	let number=locaStorage.getItem("nb");
	const supp=document.getElementById("nothing");
	const garbage=document.getElementById("empty")

	//ne pas afficher les infos inutiles lorsque le panier est vide
	if (number!=undefined){
		while (supp.firstChild) { supp.removeChild(supp.firstChild);}
	}else{
		while (garbage.firstChild) { garbage.removeChild(garbage.firstChild);}
	}

	//Afficher le ou les articles ajoutés au panier
	let totalprice=0;
	for (let i = 1; i<=number; i++){
		const affich=document.getElementById("panier");
		const create=document.createElement("p");
		let name=localStorage.getItem("article_name"+i);
		let price=localStorage.getItem("article_price"+i);

		price_enter=parseInt(price)
		totalprice+=price_enter
		name+=" (";
		name+=price;
		name+="€)";
		affich.append(create);
		console.log(create.innerHTML+=name);
		}
	const affichprice=document.getElementById("totalprice");
	const createprice=document.createElement("h3");
	affichprice.append(createprice);
	totalprice+=" €"
	console.log(createprice.innerHTML+=totalprice)
}

//Vider le panier
function clean(){localStorage.clear();
	sessionStorage.clear()
	window.location.reload()
}

//Envoyer les infos clients à l'API
async function sendData(){

	//Récupération données saisies
	let firstName=document.getElementById("firstName").value;
	let lastName=document.getElementById("lastName").value;
	let adress=document.getElementById("adress").value;
	let city=document.getElementById("city").value;
	let email=document.getElementById("email").value;

	if (firstName==0, lastName==0, adress==0, city==0, email==0){
	alert("Merci de compléter tous les champs pour pouvoir commander");
	}

	//Remplissage de l'objet à envoyer à la requête
	else{ let products=[]
		let number=sessionStorage.getItem("nb");
		
		for (let i = 1; i<=number; i++){
		let ref=localStorage.getItem("article_id"+i);
		let newID=products.push(ref);
		}

		let contact= new Object();
		contact.firstName=firstName;
		contact.lastName=lastName
		contact.address=adress
		contact.city=city
		contact.email=email

		let order= new Object()
		order.contact=contact;
		order.products=products;

		//Requête
		response = await fetch("http://localhost:3000/api/cameras/order", {
	  	method: 'POST',
	  	headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json'
	  	},
	  	mode:'cors',
	  	body:JSON.stringify(order),
		})

		let product=await response.json()

		//Suppression des infos inutiles
		const supp=document.getElementById("nothing");
		const garbage=document.getElementById("empty")
		while (garbage.firstChild) { garbage.removeChild(garbage.firstChild);}

		//Affichage de la commande
		const final=document.getElementById('final_header')
		const title=document.createElement('h1')
		final.append(title)
		console.log(title.innerHTML+="Merci pour votre commande!")

		const orderID= document.getElementById("commande")
		const titleID=document.createElement('h2')
		orderID.append(titleID);
		console.log(titleID.innerHTML+="Numéro de commande:")

		const ordernumber=document.createElement('p')
		orderID.append(ordernumber);
		console.log(ordernumber.innerHTML+=product.orderId)
		let change=document.getElementById('modif')
		console.log(change.innerHTML="Produits commandés:")

		//Nettoyage des données
		localStorage.clear();
		sessionStorage.clear()

	}
		
}





