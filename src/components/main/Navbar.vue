<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li
            v-for="(item, idx) in page.meta.breadcrumb"
            :key="idx"
            :class="{'is-active': idx != page.meta.breadcrumb.length - 1}"
          >{{ item.name }}</li>
        </ul>
      </nav>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button">
              <span class="icon is-small">
                <i class="fas fa-question-circle"></i>
              </span>
            </button>

            <div class="divider" />

            <button class="button">
              <span class="icon user-circle">
                <div class="initial">UT</div>
              </span>
              <span class="user-name">User Test</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "@/router";

export default {
  name: "NavbarComponent",
  data() {
    return {
      page: router.currentRoute
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  &.navbar {
    position: fixed;
    top: 0;
    left: 60px;
    height: 50px;
    width: calc(100% - 60px);
    border-bottom: 1px solid #dadada;
  }
  &.breadcrumb {
    padding: 15px;
    font-size: 0.8em;
    font-weight: 600;
    color: rgba(51, 51, 51, 0.8);
    & li + li::before {
      margin: 0 10px;
    }
  }
  .navbar-menu {
    .buttons {
      .button {
        height: 50px;
        border: 0;
      }
      .divider {
        border-left: 1px solid #dadada;
        height: 30px;
        margin: 0px 15px 8px 5px;
      }
      .user-circle {
        position: relative;
        display: inline-block;
        margin-right: 6px;
        width: 30px;
        height: 30px;
        background-color: #2db71e;
        border-radius: 50%;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        .initial {
          text-transform: uppercase;
          font-weight: 100;
          display: block;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: 600;
          color: #fff;
          text-shadow: 0 1px 2px rgba(123, 1, 0, 0.3);
        }
      }
      .user-name {
        color: #777;
        font-size: 95%;
        font-weight: 500;
        margin-left: 8px;
      }
    }
  }
}
</style>