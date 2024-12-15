<template>
  <div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('changeHeaderTitle', 'Hello, world!')
    this.$store.commit('isHomepage', true);
  },

  mounted () {
    this.$store.commit('isMenuOpen', false);
  }
}
</script>
