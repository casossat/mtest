<template>
  <div>
    <navbar-component />
    <slidebar-component />
    <div class="page">
      <vue-page-transition name="fade-in-right">
        <router-view />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/main/Navbar.vue";
import SlidebarComponent from "@/components/main/Slidebar.vue";

export default {
  name: "Principal",
  components: {
    NavbarComponent,
    SlidebarComponent
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  overflow: auto;
  padding-top: 50px;
  padding-left: 60px;
}
</style>