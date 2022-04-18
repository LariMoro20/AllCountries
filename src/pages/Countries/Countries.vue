<template>
  <q-page class="">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center q-pa-md">
          <div class="text-h4 text-white">
            {{ $route.params.id.replace("_", " ") }}
            {{ countries.length > 0 ? "(" + countries.length + ")" : "" }}
          </div>
        </div>
        <ItemList v-if="countries" :countries="countries" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeMount } from "vue";
import { api } from "boot/axios";
import { useRoute } from "vue-router";
import ItemList from "src/components/Countries/ItemList.vue";
export default defineComponent({
  name: "Countries",
  components: {
    ItemList,
  },
  setup() {
    // watch(
    //  () => route.params.id,
    //  (val) => {
    //   console.log("Watch props.selected function called with args:", val);
    // }
    //  );
    const countries = ref([]);
    const route = useRoute();
    onBeforeMount(() => {
      getAPI();
    });
    onMounted(() => {
      getAPI();
    });

    const getAPI = async () => {
      await api.get("region/" + route.params.id).then((res) => {
        countries.value = res.data;
      });
    };

    return {
      countries,
      getAPI,
    };
  },
});
</script>
<style scoped></style>
