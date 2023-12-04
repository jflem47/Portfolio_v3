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
      <div class="txt-container">
        <div class="wrapper">./past_experiences/blackwood_app</div>
        <div class="wrapper">
          <h3>
            Blackwood | Full-stack web application for in-house management
          </h3>
          Full-stack web developer and engineer for a project involving the
          creation of a sophisticated reservation system for a business managing
          a sizable attraction. The goal was to efficiently manage reservation
          details, automate email notifications, generate unique confirmation
          numbers, coordinate staff schedules, and verify client information
          upon arrival. The solution involved developing a web application using
          Next.js and MongoDB, deployed on Heroku, with a user-friendly
          interface crafted using the MUI framework. The application not only
          met core requirements but also included advanced features such as
          statistical analysis, resulting in a comprehensive and centralized
          system that streamlined the reservation process and improved
          operational efficiency.
          <br />
          <br />
          The technologies used in the described project include:<br />
          <br />
          1. <b>Back-End Development:</b><br />
          - MongoDB: A NoSQL database used for storing reservation details.<br />
          - Node.js: A JavaScript runtime for server-side development.<br />
          <br />
          2. <b>Front-End Development:</b><br />
          - React: A JavaScript library for building user interfaces.<br />
          - Next.js: A React framework for building web applications, providing
          server-side rendering and other features.<br />
          - Material UI (MUI): A React UI framework for creating visually
          appealing user interfaces.<br />
          <br />
          3. <b>Web Development:</b><br />
          - Full-Stack Development: Involves both front-end and back-end
          development, covering the entire web application.<br />
          <br />
          4. <b>Deployment:</b><br />
          - Heroku: A cloud platform used for deploying and hosting the web
          application, making it accessible from anywhere.<br />
          <br />
          These technologies were combined to create a comprehensive and
          responsive web application that addressed the specific needs of
          managing reservations for a sizable attraction.<br />
          <br />
          <br />
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
<script>
import { gsap } from "gsap";

export default {
  name: "Coesio",
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
  padding-inline: 1rem;
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
