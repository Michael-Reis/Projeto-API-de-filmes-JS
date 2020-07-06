(function(){
    const nomeDoFilme = document.querySelector("#nome")
    const span = document.querySelector("#span")
    const span1 = document.querySelector("#span1")
    const span2 = document.querySelector("#span2")
    const span3 = document.querySelector("#span3")
    const span4 = document.querySelector("#span4")
    const span5 = document.querySelector("#span5")
    const span6 = document.querySelector("#span6")
    const span7 = document.querySelector("#span7")
    const span8 = document.querySelector("#span8")
    const botao = document.querySelector("#btn")
    const michael = document.querySelector("#michael")

    botao.addEventListener("click", function(){
        //usando método fetch
        fetch("http://www.omdbapi.com/?s=" + nomeDoFilme.value + "&apikey=17fedfb5",{
          method: "GET",  
        }).then(function(resposta){
            resposta.json().then(function(respostaJson){
               console.log(respostaJson.Error)
               
                if(respostaJson.Error == undefined){
                    for (let index = 0; index < 8; index++) {                    
                        if (index == 0){
                          titulo = respostaJson.Search[index].Title
                          imagem = respostaJson.Search[index].Poster
                          tipo = respostaJson.Search[index].Type
                          ano = respostaJson.Search[index].Year
                           
                          span.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                          "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }
                        
                        else if (index == 1){
                            titulo = respostaJson.Search[index].Title
                            imagem = respostaJson.Search[index].Poster
                            tipo = respostaJson.Search[index].Type
                            ano = respostaJson.Search[index].Year

                            span1.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                            "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }
                        
                        else if (index == 2){
                            titulo = respostaJson.Search[index].Title
                            imagem = respostaJson.Search[index].Poster
                            tipo = respostaJson.Search[index].Type
                            ano = respostaJson.Search[index].Year
                            
                            span2.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                            "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }
                        
                        else if (index == 3){
                            titulo = respostaJson.Search[index].Title
                            imagem = respostaJson.Search[index].Poster
                            tipo = respostaJson.Search[index].Type
                            ano = respostaJson.Search[index].Year
                            span3.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                            "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }
                        
                        else if (index == 4){
                            titulo = respostaJson.Search[index].Title
                            imagem = respostaJson.Search[index].Poster
                            tipo = respostaJson.Search[index].Type
                            ano = respostaJson.Search[index].Year
                            span4.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                            "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }
                        else if (index == 5){
                            titulo = respostaJson.Search[index].Title
                            imagem = respostaJson.Search[index].Poster
                            tipo = respostaJson.Search[index].Type
                            ano = respostaJson.Search[index].Year
                            span5.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                            "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }
                        else if (index == 6){
                            titulo = respostaJson.Search[index].Title
                            imagem = respostaJson.Search[index].Poster
                            tipo = respostaJson.Search[index].Type
                            ano = respostaJson.Search[index].Year
                            span6.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                            "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }
                        else if (index == 7){
                            titulo = respostaJson.Search[index].Title
                            imagem = respostaJson.Search[index].Poster
                            tipo = respostaJson.Search[index].Type
                            ano = respostaJson.Search[index].Year
                            span7.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                            "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }
                        else if (index == 8){
                            titulo = respostaJson.Search[index].Title
                            imagem = respostaJson.Search[index].Poster
                            tipo = respostaJson.Search[index].Type
                            ano = respostaJson.Search[index].Year
                            span8.innerHTML = "<img src='" +  imagem + "' alt='Foto do filme' class='foto'>" + "<br>" + 
                            "<p>" + titulo + "<br>" + ano + "<br>" + tipo + "</p>"
                        }

                      
                }

                }else{
                    alert("filme não encontrado")
                }

                

               

            })
        })
    })

})()