<template>
    <svg class="triangle left" width="159" height="131" viewBox="0 0 159 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2)">
        <path d="M79.5 4L150.947 121H8.0529L79.5 4Z" fill="lime"/>
        <path d="M80.3535 3.47883L79.5 2.08124L78.6465 3.47883L7.19945 120.479L6.27053 122H8.0529H150.947H152.729L151.801 120.479L80.3535 3.47883Z" stroke="black" stroke-width="2"/>
        </g>
        <defs>
        <filter id="filter0_d_1_2" x="0.488159" y="0.162476" width="158.024" height="130.838" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape"/>
        </filter>
        </defs>
    </svg>
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
    <svg class="triangle right" width="159" height="131" viewBox="0 0 159 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2)">
        <path d="M79.5 4L150.947 121H8.0529L79.5 4Z" fill="magenta"/>
        <path d="M80.3535 3.47883L79.5 2.08124L78.6465 3.47883L7.19945 120.479L6.27053 122H8.0529H150.947H152.729L151.801 120.479L80.3535 3.47883Z" stroke="black" stroke-width="2"/>
        </g>
        <defs>
        <filter id="filter0_d_1_2" x="0.488159" y="0.162476" width="158.024" height="130.838" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape"/>
        </filter>
        </defs>
    </svg>
</template>

<script>

import { gsap } from 'gsap'

export default {
    name: "Work",
    mounted() {
        let tl = gsap.timeline({repeat:-1})
        tl.to(".triangle", {rotation: "+=360", duration:60})
        .yoyo(true)
    }
}
</script>

<style scoped>

section {
    padding-block: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.triangle {
    position: relative;
    left: 10%;
    transform: rotate(-20deg);
}

.left {
    top: 20%;
    left: 10%;
}

.right {
    left: 80%;
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
    box-shadow: 7px 7px black;
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

@media screen and (max-width: 500px) {
    .wrapper {
        font-size: 1rem;
    }
}


</style>