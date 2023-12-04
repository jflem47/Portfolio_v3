import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faAt);
library.add(faGithub);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.config.globalProperties.$lang = "fr";


app.use(router);

app.mount("#app");
