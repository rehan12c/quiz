<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!--navbar awal-->
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-ligth sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Profil</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li>
          <a class="nav-link active" aria-current="page" href="/cv">CV</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/galery">Galery</a></li>
            <li><a class="dropdown-item" href="/sosmed">Social Media</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/visitors">Visitors</a></li>
          </ul>
        </li>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </div>
</nav>
    </div>
    <!--navbar akhir-->
  </header>

  <RouterView />
</template>

<style scoped>

</style>
