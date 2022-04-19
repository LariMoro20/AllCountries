<template>
  <q-btn color="primary" label="Menu" class="mobile-only full-width">
    <q-menu fit>
      <q-list>
        <q-item clickable v-close-popup>
          <router-link class="horizontalmobile__menu-item-link" to="/"
            >Inicio</router-link
          >
        </q-item>

        <q-item clickable v-close-popup>
          <router-link class="horizontalmobile__menu-item-link" to="/about"
            >Sobre</router-link
          >
        </q-item>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link"
            to="/countries/Africa"
            >Países da Africa</router-link
          >
        </q-item>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link"
            to="/countries/Americas"
            >Países das Americas</router-link
          >
        </q-item>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link"
            to="/countries/Asia"
            >Países da Asia</router-link
          >
        </q-item>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link"
            to="/countries/Europe"
            >Países da Europa</router-link
          >
        </q-item>
        <q-item clickable v-close-popup>
          <router-link
            class="horizontalmobile__menu-item-link"
            to="/countries/Oceania"
            >Países da Oceania</router-link
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
