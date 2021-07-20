<template>
  <!-- <div>
    <b-navbar shadow>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item>
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                About
            </b-navbar-item>
            <b-navbar-dropdown label="Contact">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light" @click="isModal = true">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <b-modal
      v-model="isModal"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <form action="">
        <div class="modal-card" style="width: 350px;">
          <header class="modal-card-head">
              <p class="modal-card-title" style="text-align: center;">Login</p>
          </header>
           <section class="modal-card-body">
                <b-field label="Email">
                    <b-input
                        type="email"
                        v-model="email"
                        placeholder="Your email"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input
                        type="password"
                        v-model="password"
                        password-reveal
                        placeholder="Your password"
                        required>
                    </b-input>
                </b-field>

                <b-checkbox>Remember me</b-checkbox>
            </section>
            <footer class="modal-card-foot is-justify-content-space-between">
              <b-button class="px-6" outlined label="Close" @click="isModal = false" />
              <b-button class="px-6" type="is-primary" outlined label="Login" />
            </footer>
        </div>
      </form>
    </b-modal>
    <div class="container py-4">
      <nuxt />
    </div>
  </div> -->
  <div>
    <DruxtBlockRegion name="header" theme="bartik" />
    <DruxtBlockRegion name="content" theme="bartik" />
    <DruxtBlockRegion name="footer" theme="bartik" />
  </div>
</template>

<script>
export default { 
  data() {
    return {
      isModal: true,
      password: null,
      email: null
    }
  }
}
</script>

<style lang="scss">
</style>