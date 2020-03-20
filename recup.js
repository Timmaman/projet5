async function test() {
    response = await fetch("http://localhost:3000/api/cameras");
    data = await response.json()
    return data; 

    }
    test().then(function(data){
    
        for (article of data)
            {
                console.log(article.imageUrl)
            }
        })


