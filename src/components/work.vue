<template>
    <section class="lutheriemsp diagonal">
        <div>
            <div class="txt-container">
            <div class="wrapper">
                ./past_experiences/lutherie_msp
            </div>
            <div class="wrapper">
                <h3>LutherieMSP</h3>
                I have programmed a fullstack database web application for the repair department of a music store chain. Some of the features were 
                past client search and auto-fill, jobs filtering, price calculation, email sending when the job is marked as done, authentication, and more.
                <br/>
                <br/>
                Technologies used : VueJS, Bootstrap, NodeJs, ExpressJs, JWT and MongoDB.
                <br/>
                <br/>

            </div>
        </div>
        <div class="txt-container">
            <div class="wrapper">
                ./past_experiences/freelancer
            </div>
            <div class="wrapper">
                <h3>Freelancing</h3>
                Worked on various projects as a freelancer, mostly on the Upwork platform. I have made websites and small SPAs.
                <br/>
                <br/>
                Technologies used : VueJS, React, GSAP, Bootstrap, NodeJs, ExpressJs and MongoDB.
                <br/>
                <br/>

            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Work",
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

.txt-container {
    margin: 2rem;
    text-justify: auto;
}

.diagonal {
    position: relative;
}

.diagonal::after {
    content: '';
    background-color: yellow;
    position: absolute;
    z-index: -2;
    inset: 0;
    transform: skewY(5deg);
}


</style>