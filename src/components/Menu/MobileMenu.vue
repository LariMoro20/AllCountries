<template>
  <q-btn color="primary" label="Menu" class="mobile-only full-width">
    <q-menu fit>
      <q-list>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link full-width"
            to="/"
            >Inicial</router-link
          >
        </q-item>

        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link full-width"
            to="/categories"
            >Drinks</router-link
          >
        </q-item>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link full-width"
            to="/drinks/type/Non_Alcoholic/"
            >Drinks não alcoólicos</router-link
          >
        </q-item>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link full-width"
            to="/drinks/RandomDrink"
            >Drink Aleatório</router-link
          >
        </q-item>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link full-width"
            to="/about"
            >Sobre</router-link
          >
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {};
</script>

<style>
.horizontalmobile__menu-item-link,
.horizontalmobile__menu-item-link:active {
  text-decoration: none;
  color: black;
}
</style>
