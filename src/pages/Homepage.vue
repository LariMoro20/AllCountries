<template>
  <q-page class="">
    <div class="container">
      <div class="about row full-width q-pt-md">
        <div class="full-width q-pa-md">
          <div class="container">
            <div class="row">
              <div class="col-12 home__title">
                Seja bem vindo(a) ao AllCountries!
              </div>
              <div class="col-md-8 col-12">
                <p class="text-white">
                  Aqui você terá acesso a dados sobre todas as nações do mundo,
                  tais como bandeira, idiomas, moedas, latitude, população e
                  mais.<br />
                  Utilize o menu principal para navegar nos paises, agrupados
                  por continentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style scoped>
.about a {
  color: white;
}
.home__item-img {
  width: 100%;
}
.home__item-title {
  font-weight: 400;
  color: #fff;
  font-size: 3em;
  line-height: normal;
}
.home__item-text {
  font-weight: 400;
  font-size: 1.2em;
  line-height: normal;
}
.home__title {
  font-weight: 400;
  color: #fff;
  font-size: 2em;
  line-height: normal;
}
</style>
