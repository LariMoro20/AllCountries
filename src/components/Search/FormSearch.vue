<template>
  <div class="col-8">
    <q-input
      dense
      color="white"
      label-color="black"
      standout
      bg-color="white"
      outlined
      rounded
      v-model="countryName"
      placeholder="Pesquisar um país"
    >
      <template v-slot:append>
        <q-btn
          label="Ir"
          flat
          @click="searchCountry"
          class="full-height full-width text-black full-height"
        />
      </template>
    </q-input>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FormSearch",
  setup() {
    const countryName = ref("");
    const searchCountry = async () => {
      // await api.get("region/" + route.params.id).then((res) => {
      //  countries.value = res.data;
      // });
    };
    return {
      countryName,
      searchCountry,
    };
  },
});
</script>
<style scoped></style>
