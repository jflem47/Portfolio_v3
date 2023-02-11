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
        </div>
    </section>
    <div class="git">
        <b>Visit my github : </b>
        <a aria-label="Link to my Github" target="_blank" href="https://github.com/jflem47"><font-awesome-icon class="git_ico" icon="fa-brands fa-github" /></a>
    </div>
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