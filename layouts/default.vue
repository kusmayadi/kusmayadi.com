<template>
  <div>
    <header :class="{ 'h-screen' : $store.state.homepage, 'h-64' : !$store.state.homepage }" class="bg-fixed bg-center bg-cover" style="background-image: url(/images/silver-and-black-laptop-computer-1229861.jpg)">
      <div class="absolute w-full">
        <navigation/>
      </div>
      <div :class="{ 'h-screen' : $store.state.homepage, 'h-64' : !$store.state.homepage }" class="m-auto flex items-center justify-center align-middle">
        <h1 class="text-center text-white font-semibold text-4xl sm:text-5xl md:text-6xl">{{ $store.state.headerTitle }}</h1>
      </div>
    </header>
    <nuxt/>
    <div v-if="!$store.state.homepage" class="w-full">
      <site-footer/>
    </div>
  </div>
</template>

<script>
  import navigation from '~/components/navigation'
  import siteFooter from '~/components/footer'

  export default {
    components: {
      navigation,
      siteFooter
    }
  }
</script>
