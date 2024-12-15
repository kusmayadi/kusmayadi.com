<template>
  <div class="flex justify-center bg-white py-10 px-6 content">
    <div>
      <div class="mb-6">
        <h1>Artisan User</h1>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a target="packagist" href="https://packagist.org/packages/kusmayadi/artisan-user">artisan user on packagist</a></h3>
        <h3><font-awesome-icon :icon="['fab', 'github']" class="text-gray-500" /> <a target="github" href="https://github.com/kusmayadi/artisan-user-management">Source Code</a></h3>
        <p>Laravel package for managing users through artisan console.</p>
        <p class="tech-stack"><span>Language:</span> PHP</p>
        <p class="tech-stack"><span>Framework:</span> Laravel</p>
      </div>

      <div class="mb-6">
        <h1>brankas</h1>
        <h3><font-awesome-icon :icon="['fab', 'github']" class="text-gray-500" /> <a target="github" href="https://github.com/kusmayadi/brankas">Source Code</a></h3>
        <p>Web based password keeper.</p>
        <p class="tech-stack"><span>Language:</span> PHP</p>
        <p class="tech-stack"><span>Framework:</span> Laravel 6</p>
      </div>

      <div class="mb-4">
        <h1>nl2p</h1>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a target="packagist" href="https://packagist.org/packages/kusmayadi/nl2p">nl2p on packagist</a></h3>
        <h3><font-awesome-icon :icon="['fab', 'github']" class="text-gray-500" /> <a target="github" href="https://github.com/kusmayadi/nl2p">Source Code</a></h3>
        <p>A simple function to convert line breaks into &lt;p&gt;</p>
        <p class="tech-stack"><span>Language:</span> PHP</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Open Source Projects'
    },

    created() {
      this.$store.commit('changeHeaderTitle', 'Open Source Projects');
      this.$store.commit('isHomepage', false);
    },

    mounted () {
      this.$store.commit('isMenuOpen', false);
    }
  }
</script>
