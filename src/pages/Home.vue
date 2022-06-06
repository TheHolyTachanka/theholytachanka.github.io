<script setup>
import testimonials from "../components/testimonials.vue"






  </script>

<template>
  

  <!-- section 2 -->
  <section class="text-white bg-gray-900">
  <div
    class="px-4 py-32 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex"
  >
    <div class="mx-auto max-w-3xl text-center">

      <a href="#" class="block relative">
        <img alt="pfp" src="https://i.imgur.com/02qsGxc.jpeg" class="object-cover mx-auto w-20 h-20 rounded-full"/>
      </a>
      
      <h1
        class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 sm:text-5xl mt-px10"
      >
        TheHolyTachanka
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:leading-relaxed sm:text-xl">
        Privacy advocate, SovietLinux developer, open source developer and supporter, and a passionate Rustacean!
      </p>

      <div class="flex flex-wrap gap-4 justify-center mt-8">
        <a
          class="block px-12 py-3 w-full text-sm font-medium text-white rounded border border-blue-600 sm:w-auto hover:bg-gray-600 active:bg-blue-500 focus:outline-none focus:ring"
          href="https://github.com/TheHolyTachanka"
        >
          Github
        </a>

        <a
          class="block px-12 py-3 w-full text-sm font-medium text-white rounded border border-blue-600 sm:w-auto hover:bg-red-600 active:bg-blue-500 focus:outline-none focus:ring"
          href="https://www.youtube.com/channel/UCKpJJJkfKNBb1Pt-omzaQqg"
        >
          Youtube
        </a>
        <a
          class="block px-12 py-3 w-full text-sm font-medium text-white rounded border border-blue-600 sm:w-auto hover:bg-orange-600 active:bg-blue-500 focus:outline-none focus:ring"
          href="https://www.reddit.com/u/TheHolyTachankaYT/"
        >
          Reddit
        </a>
      </div>
    </div>
  </div>
</section>
<testimonials/>



</template>