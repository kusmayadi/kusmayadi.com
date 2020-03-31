<template>
  <div class="h-screen bg-fixed bg-center bg-cover" style="background-image: url(/images/silver-and-black-laptop-computer-1229861.jpg)">
    <div class="absolute w-full">
      <navigation/>
    </div>
    <div class="m-auto flex items-center justify-center align-middle h-screen">
      <h1 class="text-center text-white font-semibold text-6xl">Hello, world!</h1>
    </div>
    <nuxt/>
    <div class="absolute mt-5 w-full">
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
