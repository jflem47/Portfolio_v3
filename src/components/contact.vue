<template>
    <section>
        <div class="txt-container">
            <div class="wrapper">
                <h2>./contact</h2>
            </div>
            <div v-if="lang.lang === 'en'" >
                <div class="wrapper">
                    Please, <font-awesome-icon icon="fa-solid fa-at" /><div class="button"><a class="email" href="mailto:info@jeffl.dev">contact me</a></div> 
                    and I will be glad to answer all of your questions.
                </div>
            </div>
            <div v-else>
                <div class="wrapper">
                    S'il vous plait, <font-awesome-icon icon="fa-solid fa-at" /><div class="button"><a class="email" href="mailto:info@jeffl.dev">contactez-moi</a></div> 
                    et je serai ravi de répondre à toutes vos questions.
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { lang } from '@/scripts/lang';
</script>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
section {
    padding-block: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.txt-container {
    margin: 2rem;
    text-justify: auto;
    box-shadow: 7px 7px black;
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
    transform: translate(5px, 15px);
    height: 50%;
    transition: 0.2s;
}

.button:hover:after {
    background-color: lime;
}

.git {
    display: grid;
    place-items: center;
    width: 100%;
    height: 7rem;
    font-family: "Arvo", sans-serif;
}

.git_ico {
    margin-top: 2rem;
    scale: 3;
    transition: 0.3s;
    margin-bottom: 5rem;
}

.git_ico:hover {
    scale: 3.4;
}
</style>