<template>
    <div>
        <section class="diagonal">
            <img id="photo" src="../assets/Jeff-web-39.jpg"/>
            <div class="txt-container">
                <div class="wrapper">
                    ./About_me
                </div>
                <div class="wrapper">
                    <p>
                        I have a computer science degree from Laval University in Quebec city,
                        I am currently attending the 42Quebec School of programming
                        and I am also a Master of Music (M.Mus) in jazz guitar performance.
                        I am seeking a junior programmer position as a front-end or back-end developer.
                        My strengths as a programmer reside in my creativity and my perseverance. When I put
                        my mind to something, there is no stoping me.

                    </p>
                    <div class="button">
                        <font-awesome-icon icon="fa-solid fa-at" />
                        <a class="email" href="mailto:jflemieux@parallel46.ca">Drop me a line !</a>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>

export default {
    name: "About",
    components: {}
}
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
}

.txt-container {
    margin: 2rem;
    text-justify: auto;
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
    background-color: aliceblue;
}

@media screen and (max-width: 1250px) {
    section {
        display: grid;
        place-items: center;
    }
}

</style>