<template>
  <section id="bill-sect">
    <div class="anim-bill">
      <div id="billboard">
        <div class="bill-text">
          <div class="title-text">
            <b>JEFF LEMIEUX</b>
          </div>
        </div>
        <div class="svg-container">

          <svg class="prog" id="prog1" width="150" height="250" viewBox="0 0 116 383" xmlns="http://www.w3.org/2000/svg">
          <path d="M103.914 0.0859375L115.633 32.5078C104.695 36.6745 97.2734 44.0312 93.3672 54.5781C89.5911 65.125 87.7031 77.2344 87.7031 90.9062V130.75C87.7031 143.771 84.7083 155.685 78.7188 166.492C72.8594 177.169 63.5495 185.698 50.7891 192.078C38.0286 198.328 21.362 201.453 0.789062 201.453V170.398C12.5078 170.398 20.9062 166.818 25.9844 159.656C31.1927 152.495 33.7969 142.859 33.7969 130.75V90.9062C33.7969 77.2344 35.8802 64.474 40.0469 52.625C44.3438 40.6458 51.5703 30.1641 61.7266 21.1797C72.013 12.0651 86.0755 5.03385 103.914 0.0859375ZM115.633 349.891L103.914 382.508C86.0755 377.43 72.013 370.333 61.7266 361.219C51.5703 352.234 44.3438 341.753 40.0469 329.773C35.8802 317.924 33.7969 305.164 33.7969 291.492V251.844C33.7969 243.771 32.625 236.805 30.2812 230.945C28.0677 224.956 24.5521 220.333 19.7344 217.078C14.9167 213.823 8.60156 212.195 0.789062 212.195V180.945C21.362 180.945 38.0286 184.135 50.7891 190.516C63.5495 196.766 72.8594 205.229 78.7188 215.906C84.7083 226.583 87.7031 238.562 87.7031 251.844V291.492C87.7031 300.607 88.4844 309.07 90.0469 316.883C91.7396 324.695 94.6042 331.401 98.6406 337C102.807 342.729 108.471 347.026 115.633 349.891Z" 
          fill="magenta"/>
          </svg>
          <div id="sub-bill">
            <div class="subtitle-text">
             Web Solutions
            </div>
            <div class="subtitle-text">
              App Development
            </div>
            <div class="subtitle-text">
              Website Creation
            </div>
          </div>
          <svg class="prog" id="prog2" width="150" height="250" viewBox="0 0 116 383" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5081 382.508L0.789062 350.086C11.7271 345.919 19.1487 338.563 23.0549 328.016C26.831 317.469 28.719 305.36 28.719 291.688V251.844C28.719 238.823 31.7138 226.909 37.7033 216.102C43.5627 205.425 52.8726 196.896 65.633 190.516C78.3935 184.266 95.0601 181.141 115.633 181.141V212.196C103.914 212.196 95.5159 215.776 90.4377 222.938C85.2294 230.099 82.6252 239.735 82.6252 251.844V291.688C82.6252 305.36 80.5419 318.12 76.3752 329.969C72.0783 341.948 64.8518 352.43 54.6955 361.414C44.4091 370.529 30.3466 377.56 12.5081 382.508ZM0.789062 32.7029L12.5081 0.0859375C30.3466 5.16394 44.4091 12.2609 54.6955 21.3749C64.8518 30.3599 72.0783 40.8409 76.3752 52.8209C80.5419 64.6699 82.6252 77.4299 82.6252 91.1019V130.75C82.6252 138.823 83.7971 145.789 86.1409 151.649C88.3544 157.638 91.87 162.261 96.6877 165.516C101.505 168.771 107.821 170.399 115.633 170.399V201.649C95.0601 201.649 78.3935 198.459 65.633 192.078C52.8726 185.828 43.5627 177.365 37.7033 166.688C31.7138 156.011 28.719 144.032 28.719 130.75V91.1019C28.719 81.9869 27.9377 73.5239 26.3752 65.7109C24.6825 57.8989 21.8179 51.1929 17.7815 45.5939C13.6151 39.8649 7.95106 35.5679 0.789062 32.7029Z" 
          fill="lime"/>
          </svg>


        </div>
        <div class="instructions-bill">
          <b>I am a fullstack web developer.</b>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "BillBoard",
  components: {},
  mounted() {

    //Text animation
    let tl = gsap.timeline()
    tl.to('.title-text', {opacity: 1, ease: "circ.out"}).duration(1)
    tl.from(".prog", {opacity:0, y:30})
    tl.to('#sub-bill', {opacity: 1, ease: "circ.out"}).duration(2)
    tl.from(".instructions-bill", {opacity:0, y:30})

    let tl2= gsap.timeline({repeat:-1})
    tl2.to("#prog1", {rotation:"-=10", duration:2})
    .to("#prog2", {rotation:"+=10", duration:2})
    .yoyo(true)
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#billboard {
  background: linear-gradient(90deg, red 0% 16.67%, yellow 16.67% 33.33%, lime 33.33% 50%, cyan 50% 66.67%, blue 66.67% 83.33%, magenta 83.33% 100%), conic-gradient(from 180deg, red 0%, yellow 0 16.67%, lime 0 33.33%, cyan 0 50%, blue 0 66.67%, magenta 0 83.33%, red 0 100%);
  background-blend-mode: screen, normal;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.title-text {
  color: black;
  font-family: "Arvo", sans-serif;
  font-size: 160px;
  opacity: 0;
  white-space: nowrap;
}

.subtitle-text {
  font-family: "Khula", sans-serif;
  font-size: 50px;
  text-align: center;
  color: black;
  white-space: nowrap;
}

#sub-bill {
  opacity: 0;
}

.bill-text {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.instructions-bill {
  margin-top: 120px;
  font-family: "Arvo", sans-serif;
  color: black;
}

@media screen and (max-width: 1200px) {
  .title-text {
    font-size: 110px;
  }

  .subtitle-text {
    font-size: 30px;
  }

  .prog {
    width: 90px;
    height: 150px;
  }
}

@media screen and (max-width: 830px) {
  .title-text {
    font-size: 75px;
  }

  .subtitle-text {
    font-size: 18px;
  }

  .prog {
    width: 55px;
    height: 90px;
  }
  .instructions-bill {
    text-align: center;
    font-size: 12px;
  }
}

@media screen and (max-width: 570px) {

  .title-text {
    font-size: 60px;
  }

  .subtitle-text {
    font-size: 15px;
  }

  .instructions-bill {
    text-align: center;
    font-size: 10px;
  }
}

@media screen and (max-width: 470px) {

  .title-text {
    font-size: 50px;
  }

}

@media screen and (max-width: 380px) {

  .title-text {
    font-size: 40px;
  }
}
</style>