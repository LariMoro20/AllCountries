<template>
  <div v-for="(countrie, ikey) in countries" :key="ikey" class="col-3 q-pa-md">
    <q-img :src="countrie.flags['png']" style="height: 140px">
      <div class="absolute-bottom text-subtitle1 text-center q-pa-none">
        {{ countrie.name["common"] }}
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  props: {
    countries: {
      type: [Object, Array],
      default: null,
    },
  },
};
</script>

<style></style>
