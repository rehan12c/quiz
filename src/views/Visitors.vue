<template>
    <div class="visitors"></div>
    <div id="visitors">
    <router-view></router-view>
  </div>
  <form>
  <div class="form-floating mb-3">
    <h2 align="center">Masukan Nama dan Akun Sosial Media</h2>
    <label for="text" class="form-label">Masukkan Nama</label>
    <input type="text" class="form-control" id="text" aria-describedby="text">
  </div>
  <div class="form-floating mb-3">
    <label for="sosmed" class="form-label">Masukan Akun Sosial Media</label>
    <input type="text" class="form-control" id="sosmed" aria-describedby="text">
    <div id="sosmed" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="form-floating mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Ceklis untuk lanjut</label>
  </div>
  <button type="submit" class="btn btn-primary">Tambah Pengunjung</button>
</form>
</template>