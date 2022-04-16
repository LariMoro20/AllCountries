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
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormSearch",
});
</script>
<style scoped></style>
