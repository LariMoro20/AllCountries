<template>
  <q-page class="">
    <div class="container">
      <div class="about row full-width q-pt-md">
        <div class="full-width q-pa-md">
          <div class="container">
            <div class="row">
              <div class="col-12 home__title">
                Bem vindo(a) ao AllCountries!
              </div>
              <div class="col-md-12 col-12">
                <p class="text-white">
                  Esta aplicação reune dados sobre todos os paises do mundo,
                  como capital, idiomas, moeda, população e mais. <br />

                  Para isto, é usada a
                  <a href="https://restcountries.com/" target="_blank"
                    >API RestCountries</a
                  >
                  como fonte de todas as informações aqui exibidas!<br /><br />
                </p>
              </div>
              <div class="col-md-12 col-12 text-white">
                <div class="text-h6">Créditos das imagens:</div>

                <ul class="text-white q-ma-none">
                  <li>
                    <a
                      href="https://br.freepik.com/fotos-vetores-gratis/tecnologia"
                      >Tecnologia vetor criado por starline - br.freepik.com</a
                    >
                  </li>
                  <li>
                    <a href="https://br.freepik.com/fotos-vetores-gratis/escola"
                      >Escola foto criado por wirestock - br.freepik.com</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.flaticon.com/free-icons/globe"
                      title="globe icons"
                      >Globe icons created by Freepik - Flaticon</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-md-12 col-12 text-center q-pt-xl">
                <p class="text-white">
                  Desenvolvida com &#10084; por
                  <a
                    href="https://larissa-santos.vercel.app/"
                    class="text-white"
                    target="_blank"
                    >Larissa Santos</a
                  >, Desenvolvedora Web <br /><br />
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
