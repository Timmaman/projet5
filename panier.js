async function panier() {
	let number=sessionStorage.getItem("nb");
	const supp=document.getElementById("nothing");
	const garbage=document.getElementById("empty")
	if (number!=undefined){
		while (supp.firstChild) { supp.removeChild(supp.firstChild);}
	}else{
		while (garbage.firstChild) { garbage.removeChild(garbage.firstChild);}
	}
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

function clean(){localStorage.clear();
	sessionStorage.clear()
	window.location.reload()
}