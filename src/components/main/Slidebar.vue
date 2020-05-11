<template>
  <div>
    <nav>
      <div class="img-container has-text-centered" @click="main">
        <img src="../../assets/logo.png" alt="masivian-logo" width="50" height="50" />
      </div>
      <aside class="menu">
        <ul class="menu-list">
          <li>
            <router-link to="/MasivianErp/Dashboard" class="is-flex">
              <i class="fas fa-plus-circle" />
            </router-link>
          </li>
          <li>
            <router-link to="/MasivianErp/Report" class="is-flex">
              <i class="fas fa-chart-line" />
            </router-link>
          </li>
        </ul>
      </aside>
    </nav>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "SlidebarComponent",
  methods: {
    main() {
      router.push("/MasivianErp/Dashboard");
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 60px;
  background-color: #192354;
  box-shadow: none;
  .img-container {
    height: 50px;
    color: #333;
    border-bottom: 1px solid;
    cursor: pointer;
  }
  .menu .menu-list li {
    height: 40px;
    a {
        height: 100%;
        align-items: center;
        justify-content: center;
      &,
      &:active,
      &:hover,
      &:focus {
        color: #fff;
        transition: 0.3s all ease;
      }
      &:active,
      &:hover,
      &:focus {
        border-left: 4px solid blue;
        background: transparent;
      }
    }
  }
}
</style>