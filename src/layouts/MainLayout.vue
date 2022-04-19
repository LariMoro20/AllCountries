<template>
  <q-layout view="lHh Lpr lFf" class="bg-black">
    <Header />
    <q-page-container class="countries__pages">
      <router-view class="countrie__page" :key="$route.fullPath" />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Header from "components/Parts/Header.vue";
import Footer from "components/Parts/Footer.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Header,
    Footer,
  },

  setup() {
    return {};
  },
});
</script>
<style>
* {
  font-family: "Josefin Sans", sans-serif;
}
.countries__pages {
  background-image: url("/bg/countries.jpg");
  background-size: cover;
}
.countrie__page {
  background-color: #100f34f2;
  margin-top: 150px;
}
</style>
