<template>
    <div id="cardapio">
        <h1>Cardápio</h1>
        <div class="container">
            <div class="card-container" v-for="menu in fullMenu" :key="menu.id">
                <div class="card">
                    <div class="text">
                        <h2>Nome</h2>
                        <p>{{ menu.titulo }}</p>
                    </div>
                    <div class="text">
                        <h2>Preço</h2>
                        <p>R$ {{ menu.preço }}</p>
                    </div>
                </div>
                <img :src="menu.imagem" :alt="'imagem-' + menu.id">
            </div>
        </div>
    </div>
</template>

<script setup>

const fullMenu = [
        {
            "id": 1,
            "titulo": "Pão de queijo",
            "preço": 5,
            "imagem": "https://picsum.photos/1500/1000"
        },
        {
            "id": 2,
            "titulo": "Café",
            "preço": 10,
            "imagem": "https://picsum.photos/1500/1000"
        },
        {
            "id": 3,
            "titulo": "Misto Quente",
            "preço": 7,
            "imagem": "https://picsum.photos/1500/1000"
        },
        {
            "id": 4,
            "titulo": "Suco de Laranja",
            "preço": 2,
            "imagem": "https://picsum.photos/1500/1000"
        },
        {
            "id": 5,
            "titulo": "Bolo de Cenoura",
            "preço": 5,
            "imagem": "https://picsum.photos/1500/1000"
        }
    ]
</script>

<style>
#cardapio {
    background-color: #f1f1f1;
    text-align: center;
    padding: 2rem;
}

#cardapio h1 {
    font-size: 50px;
}

#cardapio .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

#cardapio .cards,
#cardapio .card-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 1rem;
    width: 300px;
}

#cardapio .card {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
}

@media screen and (min-width: 740px) {

    #cardapio .cards,
    #cardapio .card-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #cardapio .cards .text,
    #cardapio .card-container .text {
        padding: 1rem;
        text-align: left;
    }

    #cardapio .cards img,
    #cardapio .card-container img {
        height: 10rem;
        width: 15rem;
    }

    #cardapio .card {
        padding: 1rem;
    }

    #cardapio .cards:nth-child(odd),
    #cardapio .card-container:nth-child(odd) {
        flex-direction: row-reverse;
    }

}
</style>
