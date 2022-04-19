<template>
  <div class="header q-py-md bg-secondary">
    <div class="header-logo text-center">
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
.header-logo-img {
  width: 150px;
}
</style>
