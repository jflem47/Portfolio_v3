<template>
  <svg
    class="triangle left"
    width="159"
    height="131"
    viewBox="0 0 159 131"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1_2)">
      <path d="M79.5 4L150.947 121H8.0529L79.5 4Z" fill="lime" />
      <path
        d="M80.3535 3.47883L79.5 2.08124L78.6465 3.47883L7.19945 120.479L6.27053 122H8.0529H150.947H152.729L151.801 120.479L80.3535 3.47883Z"
        stroke="black"
        stroke-width="2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_2"
        x="0.488159"
        y="0.162476"
        width="158.024"
        height="130.838"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  <section class="diagonal">
    <div class="margin">
      <div v-if="lang.lang === 'en'">
        <div class="txt-container">
          <div class="wrapper">./clients</div>
          <div class="wrapper">
            <p><b>My clients</b></p>
            <p>I develop elegant web solutions tailored to meet the needs of the following businesses:</p>
            <logosVue/>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="txt-container">
          <div class="wrapper">./clients</div>
          <div class="wrapper">
            <p><b>Mes clients</b></p>
            <p>Je développe des solutions web élégantes, adaptées aux besoins des entreprises suivantes:</p>
            <logosVue/>
          </div>
        </div>
      </div>
      
      <div v-if="lang.lang === 'en'">
        <div class="txt-container top">
          <div class="wrapper">./technologies</div>
          <div class="wrapper">
            <p><b>Technologies used</b></p>
            <p>I use the following technologies to develop optimized, fast, and cutting-edge web solutions:</p>
            <div class="tech-grid">
              <div>
                <p><b>Front-end</b></p>
                <ul>
                  <li>React</li>
                  <li>NextJs (full-stack)</li>
                  <li>VueJs</li>
                  <li>Material UI (MUI)</li>
                  <li>NextUI</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <p><b>Back-end</b></p>
                <ul>
                  <li>NodeJs</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <p><b>Environment / Production</b></p>
                <ul>
                  <li>Docker</li>
                  <li>Digital Ocean</li>
                  <li>Apache</li>
                  <li>NginX</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="txt-container top">
          <div class="wrapper">./technologies</div>
          <div class="wrapper">
            <p><b>Technologies utilisées</b></p>
            <p>J'utilise les technologies suivantes afin de développer des solutions web optimisées, rapides et à la fine pointe de la technologie:</p>
            
            <div class="tech-grid">
              <div>
                <p><b>Front-end</b></p>
                <ul>
                  <li>React</li>
                  <li>NextJs (full-stack)</li>
                  <li>VueJs</li>
                  <li>Material UI (MUI)</li>
                  <li>NextUI</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <p><b>Back-end</b></p>
                <ul>
                  <li>NodeJs</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <p><b>Environnement / Production</b></p>
                <ul>
                  <li>Docker</li>
                  <li>Digital Ocean</li>
                  <li>Apache</li>
                  <li>NginX</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  <svg
    class="triangle right"
    width="159"
    height="131"
    viewBox="0 0 159 131"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1_2)">
      <path d="M79.5 4L150.947 121H8.0529L79.5 4Z" fill="magenta" />
      <path
        d="M80.3535 3.47883L79.5 2.08124L78.6465 3.47883L7.19945 120.479L6.27053 122H8.0529H150.947H152.729L151.801 120.479L80.3535 3.47883Z"
        stroke="black"
        stroke-width="2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_2"
        x="0.488159"
        y="0.162476"
        width="158.024"
        height="130.838"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script setup>
import { lang } from "@/scripts/lang";
</script>

<script>
import { gsap } from "gsap";
import logosVue from "./work/logos.vue";

export default {
  name: "Work",
  mounted() {
    let tl = gsap.timeline({ repeat: -1 });
    tl.to(".triangle", { rotation: "+=360", duration: 60 }).yoyo(true);
  },
};
</script>

<style scoped>
.email {
  color: black;
  text-decoration: none;
}

.button {
  display: inline-block;
  position: relative;
}

.button:after {
  content: "";
  position: absolute;
  z-index: -1;
  background-color: magenta;
  inset: 0;
  transform: translate(20px, 15px);
  height: 50%;
  transition: 0.2s;
}

.button:hover:after {
  background-color: green;
}

.title-text {
  font-size: 6rem;
  text-align: center;
}

.margin {
  margin: 2rem;
}

section {
  padding-block: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top {
  margin-top: 5rem;
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
  padding: 1rem;
}

.txt-container {
  font-size: 1rem;
  margin: 2rem!;
  text-justify: auto;
  box-shadow: 7px 7px black;
}

.diagonal {
  position: relative;
}

.diagonal::after {
  content: "";
  background-color: yellow;
  position: absolute;
  z-index: -2;
  inset: 0;
  transform: skewY(5deg);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
}

@media screen and (max-width: 500px) {
  .title-text {
    font-size: 50px;
  }
  .text-container {
    max-width: 90%;
  }
  .wrapper {
    font-size: 1rem;
  }
}
</style>
