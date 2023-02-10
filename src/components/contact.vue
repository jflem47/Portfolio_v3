<template>
    <section>
        <div class="txt-container">
            <div class="wrapper">
                <h2>./contact</h2>
            </div>
            <div class="wrapper">
                Please, <font-awesome-icon icon="fa-solid fa-at" /><div class="button"><a class="email" href="mailto:jflemieux@parallel46.ca">contact me</a></div> 
                and I will be glad to answer all of your questions.
            </div>
            <div class="git">
                Visit my github : 
                <a href="https://github.com/jflem47"><font-awesome-icon class="git_ico" icon="fa-brands fa-github" /></a>
            </div>
        </div>
    </section>
</template>

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
    height: 5rem;
}

.git_ico {
    scale: 3;
}
</style>