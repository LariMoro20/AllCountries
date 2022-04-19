<template>
  <div
    class="header q-pt-sm bg-secondary fixed-top z-top text-center flex colunm items-center"
  >
    <div class="header-logo text-center full-width">
      <div class="row">
        <div class="col-12 col-md-3">
          <router-link to="/"
            ><img class="header-logo-img" src="/logo/logotipo.png"
          /></router-link>
        </div>
        <div class="col-12 col-md-8 flex justify-center items-center column">
          <div class="row">
            <div class="col-12 desktop-only"><MainMenu /></div>
            <div class="col-12 mobile-only"><MobileMenu /></div>
            <div class="col-12 row flex justify-center">
              <!--<FormSearch />-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "components/Menu/MainMenu.vue";
import MobileMenu from "components/Menu/MobileMenu.vue";

//import FormSearch from "components/Search/FormSearch.vue";

export default {
  components: {
    MainMenu,
    MobileMenu,
    //FormSearch
  },
  name: "Header",

  methods: {
    searchCountry() {
      this.$q.notify({
        type: "positive",
        position: "top",
        message: `País encontrado.`,
      });
    },
  },
};
</script>

<style>
.header {
  height: 150px;
}
.header-logo-img {
  width: 130px;
}
</style>
