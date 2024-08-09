const livros = require('./listaLivros')

let = maisBarato = 0;

for (let atual=0;atual <precosLivros.length; atual++){
    if (precosLivros[atual].preco < precosLivros[maisBarato].preco){
        maisBarato = atual;
    }
    //console.log(precosLivros[maisBarato].preco);
};

console.log(`O livro mais barato é ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)