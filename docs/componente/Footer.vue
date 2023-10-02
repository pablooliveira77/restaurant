<template>
    <footer id="Footer" class="footer">
            <div>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Contato</h3>
                        <p>Endereço: Rua dos restaurantes, 0 - São Paulo/SP</p>
                        <p>Telefone: (11) 99999-9999</p>
                        <p>Email: contato@restaurantedoze.com</p>
                    </div>
                    <div class="footer-section">
                        <h3>Horário de Funcionamento</h3>
                        <p>Segunda a Sábado: 17h - 23h</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; 2023 Restaurante do Zé. Feito por <a href="https://github.com/pablooliveira77">Pablo Lima</a>.
                </div>
            </div>
        </footer>
</template>

<script setup>
import dados from '../../var.json'

const titulo = dados.title
const telefone = dados.Contato.telephone
const email = dados.Contato.email
const endereco = dados.Contato.adress
const horario = dados.Horario
</script>

<style>
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0 0;
    text-align: center;
}

.footer h3 {
    font-size: 36px;
    margin-bottom: 20px;
}

.footer p {
    font-size: 18px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section {
    flex: 1;
    margin: 0 20px;
}

.footer-bottom {
    background-color: #222;
    padding: 10px 0;
}

.footer-bottom a {
    color: #fff;
}

.footer-bottom a:hover {
    color: #aaa;
}

@media screen and (max-width: 700px) {
    .footer-content {
        flex-direction: column;
    }

}

</style>
