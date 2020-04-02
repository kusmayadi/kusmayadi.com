<template>
  <div class="flex justify-center items-center bg-white py-10 px-6">
    <div>
      <p class="text-center">You can contact me through my social media channel:</p>

      <div class="flex justify-center text-sm sm:text-4xl py-4">
        <div class="px-2 sm:px-4">
          <a href="https://www.linkedin.com/in/kusmayadi/" target="linkedin"><font-awesome-icon :icon="['fab', 'linkedin-in']"/> LinkedIn</a>
        </div>

        <div class="px-2 sm:px-4">
          <a href="https://github.com/kusmayadi" target="github"><font-awesome-icon :icon="['fab', 'github']"/> Github</a>
        </div>

        <div class="px-2 sm:px-4">
          <a href="https://twitter.com/kusmayadi" target="twitter"><font-awesome-icon :icon="['fab', 'twitter']"/> Twitter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Contact Me'
    },

    created() {
      this.$store.commit('changeHeaderTitle', 'Keep in Touch');
      this.$store.commit('isHomepage', false);
    },

    mounted () {
      this.$store.commit('isMenuOpen', false);
    }
  }
</script>
