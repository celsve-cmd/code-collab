<script setup lang="ts">
</script>

<template>
  <main class="home">
    <h1>Code Collab</h1>
    <p>Skriv kode og diskuter med teamet ditt — i sanntid.</p>

    <RouterLink to="/editor" class="btn">Start koding →</RouterLink>

    <div class="recent-projects">
      <h2>Nylige prosjekter</h2>
      <RouterLink to="/editor/123">Prosjekt Alpha <br></RouterLink>
      <RouterLink to="/editor/456">Prosjekt Beta</RouterLink>
    </div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
}
h1 { font-size: 3rem; margin-bottom: 0.5rem; }
p { color: #666; margin-bottom: 2rem; }
.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
}
.btn:hover { background: #3aa876; }
</style>