<template>
  <div class="container-login">
    <div
      class="tile"
      style="border-radius: 5px; box-shadow: 1px 6px 13px -3px rgba(152, 152, 152, 0.75)"
    >
      <div class="tile">
        <div class="container-img hero has-text-centered">
          <div
            class="hero-body"
            style="display: flex; align-items: center; justify-content: center;"
          >
            <img src="../../assets/masivian-white.png" alt="Logo Masivian Fondo Blanco" width="70%" />
          </div>
        </div>
      </div>
      <div class="tile">
        <div
          class="section"
          style="width: 100%; padding-top: 0; padding-bottom: 1em; background: #fff;"
        >
          <div class="hero">
            <div class="hero-body">
              <h3 class="title is-4 has-text-centered">ERP Integrator</h3>
              <hr />
              <form>
                <div class="field">
                  <label class="label">Usuario</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Escribe el usuario"
                      v-model="username"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Contraseña</label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="Escribe la contraseña"
                      v-model="password"
                    />
                  </div>
                </div>

                <label class="checkbox">
                  <input type="checkbox" v-model="saveUser" />
                  Recordarme
                </label>

                <div class="control">
                  <button
                    class="button m-button--success is-fullwidth"
                    @click="login"
                  >Iniciar sesión</button>
                </div>
              </form>
              <div class="has-text-centered">
                <a href="#">¿Olvidaste la contraseña?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sessionApi } from "@/api/session/SessionApi";
import { mapActions } from "vuex";
import router from "@/router";

export default {
  data() {
    return {
      username: null,
      password: null,
      saveUser: null
    };
  },
  methods: {
    ...mapActions({
      updateSession: "updateSession"
    }),
    login() {
      /*sessionApi
        .loginUser({
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.updateSession(response.data);
          router.push("/MasivianErp/Dashboard");
        })
        .catch(err => {
          console.log("Error: ", err);
        });*/
      router.push("/MasivianErp/Dashboard");
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin-top: 1rem;
}
.container {
  padding: 15% 0;
  height: 100vh;
}
.container-login {
  background-color: rgb(247, 247, 247);
  display: flex;
  vertical-align: middle;
  align-items: center;
  height: 100vh;
  padding: 0 20%;
}
.button.is-fullwidth {
  margin: 1.5em 0;
}
a {
  text-decoration: underline;
  color: #2a2a91;
}
.container-img {
  background-color: #2a2a91;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>
