<template>
  <div
    v-for="(countrie, ikey) in countries"
    :key="ikey"
    class="col-6 col-md-3 q-pa-md"
  >
    <Item :countrie="countrie" />
  </div>
</template>

<script>
import Item from "src/components/Countries/Item.vue";

export default {
  props: {
    countries: {
      type: [Object, Array],
      default: null,
    },
  },
  components: {
    Item,
  },
};
</script>

<style></style>
