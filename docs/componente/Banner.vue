<template>
    <div class="banner">
        <div class="fundo">
            <h1>"Restaurante do Zé"</h1>
            <p>"Venha conferir o melhor restaurante da cidade!"</p>
            <a href="https://www.google.com.br/maps/@48.8584033,2.2944521,256m/data=!3m1!1e3?hl=pt-BR&hl=pt-BR&entry=ttu" target="_blank">
                <button>
                    "Ver Localização"
                </button>
            </a>
        </div>
    </div>
</template>

<style>
.banner {
    background-color: #f1f1f1;
    background-image: url('https://picsum.photos/2000/1000');
    text-align: center;
    height: 80vh;
}

.banner .fundo {
    background-color: rgba(183, 183, 183, 0.5);
    height: 100%;
}

.banner h1 {
    font-size: 50px;
    position: absolute;
    top: 7rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

.banner p {
    font-size: 24px;
    position: absolute;
    top: 17rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

.banner button {
    background-color: #333;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 24px;
    position: absolute;
    top: 25rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

.banner button:hover {
    background-color: #555;
    transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
    .banner {
        height: 50vh;
    }

    .banner h1 {
        font-size: 30px;
        top: 5rem;
    }

    .banner p {
        font-size: 16px;
        top: 10rem;
    }

    .banner button {
        font-size: 16px;
        top: 15rem;
    }
}
</style>
