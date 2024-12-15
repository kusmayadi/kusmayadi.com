<template>
  <div class="py-10 px-6 grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-10 mx-auto bg-white content-center">
    <div v-for="stack in stacks" :key="stack.name">
      <a :href="stack.url" target="techstack">
        <img :src="'/images/' + stack.image" :alt="stack.name" class="object-center h-32 w-full">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Tech Stack'
    },

    data() {
      return {
        stacks: [
          {
            name: 'PHP',
            image: 'php.svg',
            url: 'https://www.php.net/'
          },

          {
            name: 'Laravel',
            image: 'laravel.svg',
            url: 'https://laravel.com/'
          },

          {
            name: 'Composer',
            image: 'composer.svg',
            url: 'https://getcomposer.org/'
          },

          {
            name: 'Node.js',
            image: 'nodejs.svg',
            url: 'https://nodejs.org/'
          },

          {
            name: 'npm',
            image: 'npm.svg',
            url: 'https://www.npmjs.com/'
          },

          {
            name: 'Sails',
            image: 'sails.svg',
            url: 'https://sailsjs.com/'
          },

          {
            name: 'Nuxt',
            image: 'nuxt.svg',
            url: 'https://nuxtjs.org/'
          },

          {
            name: 'Vue.js',
            image: 'vue.svg',
            url: 'https://vuejs.org/'
          },

          {
            name: 'jQuery',
            image: 'jquery.svg',
            url: 'https://jquery.com/'
          },

          {
            name: 'tailwindcss',
            image: 'tailwindcss-icon.svg',
            url: 'https://tailwindcss.com/'
          },

          {
            name: 'Bootstrap',
            image: 'bootstrap.svg',
            url: 'https://getbootstrap.com/'
          },

          {
            name: 'MySQL',
            image: 'mysql.svg',
            url: 'https://www.mysql.com/'
          },

          {
            name: 'redis',
            image: 'redis.svg',
            url: 'https://redis.io/'
          },

          {
            name: 'AWS',
            image: 'aws.svg',
            url: 'https://aws.amazon.com/'
          },

          {
            name: 'DigitalOcean',
            image: 'digital-ocean.svg',
            url: 'https://www.digitalocean.com/'
          },

          {
            name: 'NGINX',
            image: 'nginx.svg',
            url: 'https://www.nginx.com/'
          },

          {
            name: 'Ansible',
            image: 'ansible.svg',
            url: 'https://www.ansible.com/'
          },

          {
            name: 'Vagrant',
            image: 'vagrant.svg',
            url: 'https://www.vagrantup.com/'
          },

          {
            name: 'Atom',
            image: 'atom.svg',
            url: 'https://atom.io/'
          },

          {
            name: 'Visual Studio Code',
            image: 'visual-studio-code.svg',
            url: 'https://code.visualstudio.com/'
          },

          {
            name: 'git',
            image: 'git-icon.svg',
            url: 'https://git-scm.com/'
          },

          {
            name: 'GitHub',
            image: 'github-icon.svg',
            url: 'https://github.com/'
          },

          {
            name: 'GitLab',
            image: 'gitlab.svg',
            url: 'https://about.gitlab.com/'
          },

          {
            name: 'Bitbucket',
            image: 'bitbucket.svg',
            url: 'https://bitbucket.org/'
          },

          {
            name: 'Pivotal Tracker',
            image: 'pivotal_tracker.svg',
            url: 'https://www.pivotaltracker.com/'
          },

          {
            name: 'Trello',
            image: 'trello.svg',
            url: 'https://trello.com/'
          },

          {
            name: 'Slack',
            image: 'slack-icon.svg',
            url: 'https://slack.com/'
          },

          {
            name: 'macOS',
            image: 'macOS.svg',
            url: 'https://www.apple.com/id/macos'
          },

          {
            name: 'Ubuntu',
            image: 'ubuntu.svg',
            url: 'https://ubuntu.com/'
          },

          {
            name: 'elementary OS',
            image: 'elementary.svg',
            url: 'https://elementary.io/'
          }
        ]
      }
    },

    created() {
      this.$store.commit('changeHeaderTitle', 'Tech Stack');
      this.$store.commit('isHomepage', false);
    },

    mounted () {
      this.$store.commit('isMenuOpen', false);
    }
  }
</script>
