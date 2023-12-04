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
      <div class="title-text">COESIO</div>

      <div class="txt-container top">
        <div class="wrapper">./past_experiences/coesio</div>
        <div class="wrapper">
          <h3>COESIO's new website</h3>
          <div class="button">
            <font-awesome-icon icon="fa-solid fa-at" />
            <a
              aria-label="Link to the website"
              class="email"
              href="https://www.coesio.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              coesio.com
            </a>
          </div>
          <br /><br />
          <p>
            This project was undertaken for an environmental consultation firm
            located in Montreal, Canada. The client's requirements included the
            development of a business website that aligned with their branding,
            incorporated a Content Management System (CMS), and allowed for
            seamless and efficient content editing. Opting for the Webflow
            platform, I made this choice due to its strong integration with HTML
            and CSS, as well as its user-friendly customization capabilities.
            The implemented solution involved the creation of a robust blog
            system, integration of job offering modules, and the establishment
            of a responsive design ensuring optimal functionality across all
            platforms. By leveraging Webflow's capabilities, I ensured that the
            client not only received a visually appealing and on-brand website
            but also gained the ability to easily manage and update content as
            needed.
            <br />
            <br />
            <b>Back-End Development:</b><br />
            1. MongoDB: NoSQL database for flexible data storage.<br />
            2. Node.js: JavaScript runtime for server-side development.<br />
            <br />
            <b>Front-End Development:</b><br />
            1. CSS: Stylesheet language for web page design.<br />
            2. HTML: Markup language for structuring web content.<br />
            3. Figma: Collaborative design tool for UI/UX design.<br />
            4. Webflow: Visual web design tool for creating responsive
            websites.<br />
            <br />
            <b>Web Development:</b><br />
            - Full-Stack Development: Involves both front-end and back-end
            tasks, covering the entire web application development process.
            <br />
            <br />
          </p>
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
  text-align: center;
  margin: 30px;
  font-size: 120px;
  font-family: "Arvo", sans-serif;
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
