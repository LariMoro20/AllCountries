<template>
  <q-img
    :src="countrie.flags['png']"
    style="height: 140px"
    @click="handleOpenDialog"
  >
    <div class="absolute-bottom text-subtitle1 text-center q-pa-none">
      {{ countrie.name["common"] }}
    </div>
  </q-img>
  <q-dialog
    class="text-white q-pa-none"
    v-model="openDialog"
    full-width
    :maximized="maximizedToggle"
    persistent
  >
    <q-card class="bg-grey-10 text-white" style="width: 100%; max-width: 100vw">
      <q-card-section class="text-center row items-center">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section
        class="q-pt-none scroll full-height flex items-center justify-center"
      >
        <div class="itemtrst full-width">
          <div class="row">
            <div
              class="col-md-12 text-center full-width flex justify-center items-center"
            >
              <div class="country__modal-image">
                <img
                  class="country__modal-image-img q-pa-md"
                  :src="countrie.flags['png']"
                />
              </div>
              <div
                class="country__modal-image"
                v-if="countrie.coatOfArms['png']"
              >
                <img :src="countrie.coatOfArms['png']" style="width: 110px" />
              </div>
            </div>
            <div
              class="text-h6 text-capitalize text-center text-center full-width"
            >
              {{ countrie.name["common"] }} | {{ countrie.name["official"] }}
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 text-white">
              <ul>
                <li>
                  País Independente: {{ countrie.independent ? "sim" : "não" }}
                </li>
                <li>Capital: {{ countrie.capital[0] }}</li>

                <li>
                  Membro das Nações Unidas:
                  {{ countrie.unMember ? "sim" : "não" }}
                </li>
                <li>
                  Moedas:
                  <ul>
                    <li
                      class="country__types-item text-capitalize"
                      v-for="(money, ikey) in countrie.currencies"
                      :key="ikey"
                    >
                      {{ money.name }} ({{ money.symbol }})
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-4 text-white">
              <ul>
                <li>Região: {{ countrie.region }}</li>

                <li>Continente: {{ countrie.continents[0] }}</li>

                <li>
                  Idiomas:
                  <ul>
                    <li
                      class="country__types-item text-capitalize"
                      v-for="(language, ikey) in countrie.languages"
                      :key="ikey"
                    >
                      {{ language }}
                    </li>
                  </ul>
                </li>

                <li>Bandeira: {{ countrie.flag }}</li>
              </ul>
            </div>
            <div class="col-12 col-md-4 text-white">
              <ul>
                <li>Área: {{ countrie.area }}</li>
                <li>População: {{ countrie.population }}</li>

                <li>Latitude: {{ countrie.latlng[0] }}</li>
                <li>Longitude: {{ countrie.latlng[1] }}</li>
                <li>
                  Timezones:
                  <ul>
                    <li
                      class="country__types-item text-capitalize"
                      v-for="(timezone, ikey) in countrie.timezones"
                      :key="ikey"
                    >
                      {{ timezone }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions
        align="right"
        class="bg-grey-10 text-white text-center flex justify-center q-pb-lg"
      >
        <q-btn
          flat
          label="Fechar"
          class="bg-primary col-12 col-md-4"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    countrie: {
      type: [Object, Array],
      default: null,
    },
  },
  data: () => ({
    openDialog: false,
    maximizedToggle: false,
  }),
  methods: {
    async handleOpenDialog() {
      this.openDialog = !this.openDialog;
    },
  },
};
</script>

<style scoped>
.country__modal-image-img {
  width: 200px;
}
</style>
