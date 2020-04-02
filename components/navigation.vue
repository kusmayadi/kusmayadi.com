<template>
  <header class="text-gray-400 sm:flex sm:justify-between sm:items-center">
    <div class="flex items-center justify-between px-4 py-3">
      <div>
        <nuxt-link to="/">Kusmayadi</nuxt-link>
      </div>

      <div class="sm:hidden">
        <button type="button" @click="openMenu" class="hover:text-white focus:text-white focus:outline-none">
          <font-awesome-icon v-if="!$store.state.isMenuOpen" :icon="['fas', 'bars']" class="fill-current" />
          <font-awesome-icon v-if="$store.state.isMenuOpen" :icon="['fas', 'times']" class="fill-current" />
        </button>
      </div>
    </div>

    <div :class="$store.state.isMenuOpen ? 'block' : 'hidden'" class="px-4 bg-gray-800 py-4 opacity-75 sm:flex sm:bg-transparent text-sm">
      <nuxt-link class="block sm:inline-block sm:ml-2 px-2 py-1 font-semibold hover:text-white focus:text-white" to="/work-experience"><font-awesome-icon :icon="['fas', 'briefcase']" class="mr-1"/> Work Experience</nuxt-link>
      <nuxt-link class="block sm:inline-block sm:ml-2 px-2 py-1 font-semibold hover:text-white focus:text-white" to="#"><font-awesome-icon :icon="['fas', 'archive']" class="mr-1"/> Projects</nuxt-link>
      <nuxt-link class="block sm:inline-block sm:ml-2 px-2 py-1 font-semibold hover:text-white focus:text-white" to="#"><font-awesome-icon :icon="['fas', 'code']" class="mr-1"/> Open Source</nuxt-link>
      <nuxt-link class="block sm:inline-block sm:ml-2 px-2 py-1 font-semibold hover:text-white focus:text-white" to="#"><font-awesome-icon :icon="['far', 'envelope']" class="mr-1"/> Contact</nuxt-link>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },

    methods: {
      openMenu() {
        this.$store.commit('isMenuOpen')
      }
    }
  }
</script>
