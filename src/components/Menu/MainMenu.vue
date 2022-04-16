<template>
  <nav class="full-width flex justify-center desktop-only">
    <ul class="horizontal__menu no-padding no-margin">
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/"
          >Inicio</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/about"
          >Sobre</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/countries/Africa"
          >Africa</router-link
        >
      </li>

      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/countries/Americas"
          >Americas</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/countries/Asia"
          >Asia</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/countries/Europe"
          >Europa</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/about"
          >Oceania</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.horizontal__menu-item {
  padding: 10px;
  display: inline-block;
}
.horizontal__menu-item-link,
.horizontal__menu-item-link:active {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}
</style>
