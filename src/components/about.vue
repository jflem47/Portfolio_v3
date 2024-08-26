<template>
    <div>
        <section class="diagonal">
            <img alt="Jeff Lemieux's photo." id="photo" src="../assets/Jeff-web-39.jpg"/>
            <div class="txt-container">
                <div class="wrapper">
                    ./about_me
                </div>
                <div class="wrapper">
                    <p v-if="lang.lang === 'en'">
                        I have a computer science degree from Laval University in Quebec city, 
                        and I am also a Master of Music (M.Mus) in jazz guitar performance.
                        I am currently a full-stack developer.
                        My strengths as a programmer reside in my creativity and my perseverance. When I put
                        my mind to something, there is no stopping me.
                    </p>
                    <p v-else>
                        Je suis titulaire d'un diplôme en informatique de l'Université Laval à Québec. Actuellement, je suis développeur web full-stack à mon compte. Par ailleurs, je suis également titulaire d'une maîtrise en musique (M.Mus) avec spécialisation en guitare jazz. Mes atouts en tant que programmeur résident dans ma créativité et ma persévérance. Lorsque je me fixe un objectif, rien ne peut m'arrêter.
                    </p>
                    <div class="button">
                        <font-awesome-icon icon="fa-solid fa-at" />
                        <a aria-label="Link to my email" class="email" href="mailto:info@jeffl.dev">Drop me a line !</a>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script setup>
import { lang } from '../scripts/lang';
</script>

<style scoped>

section {
    padding-block: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper {
    border-radius: 1px;
    border-color: black;
    border-style: solid;
    font-family: "Arvo", sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 0;
    margin-inline: auto;
    max-width: 50rem;
    padding-inline: 1rem;
}

body {
    background-color: black;
}

.diagonal {
    position: relative;
}

.diagonal::after {
    content: '';
    background-color: lime;
    position: absolute;
    z-index: -2;
    inset: 0;
    transform: skewY(-5deg);
}

#photo {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    margin: 1rem;
    transition: 0.4s;
}

#photo:hover {
    scale: 1.1;
}

.txt-container {
    margin: 2rem;
    text-justify: auto;
    display: block;
    box-shadow: 7px 7px black;
}

.email {
    color: black;
    text-decoration: none;
}

.button {
    display: inline-block;
    position: relative;
}

.button:after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: magenta;
    inset: 0;
    transform: translate(20px, 15px);
    height: 50%;
    transition: 0.2s;
}

.button:hover:after {
    background-color: yellow;
}

@media screen and (max-width: 1250px) {
    section {
        display: grid;
        place-items: center;
    }
}

@media screen and (max-width: 600px) {
    .wrapper {
        font-size: 1rem;
    }
}

</style>