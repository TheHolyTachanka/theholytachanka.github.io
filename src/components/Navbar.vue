<script setup>

</script>

<template>
<section class="relative px-8 w-full text-white bg-gray-900 body-font">
    <div class="container flex flex-col flex-wrap justify-between items-center py-5 mx-auto max-w-7xl md:flex-row">
        <a href="#_" class="flex relative z-10 items-center w-auto text-2xl font-extrabold leading-none text-white select-none">TheHolyTachanka</a>

        <nav class="flex top-0 left-0 z-0 justify-center items-center py-5 -ml-0 space-x-5 w-full h-full text-base md:-ml-5 md:py-0 md:absolute">
            <a href="/" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-800" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
                <span class="block">Home</span>
                <span class="inline-block overflow-hidden absolute bottom-0 left-0 -mb-1 w-full h-0.5">
                    <span x-show="hover" class="inline-block absolute inset-0 w-full h-full bg-gray-900 transform" x-transition:enter="transition ease duration-200" x-transition:enter-start="scale-0" x-transition:enter-end="scale-100" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="scale-100" x-transition:leave-end="scale-0"></span>
                </span>
            </a>
            <a href="/searx" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-800" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
                <span class="block">SearX</span>
                <span class="inline-block overflow-hidden absolute bottom-0 left-0 -mb-1 w-full h-0.5">
                    <span x-show="hover" class="inline-block absolute inset-0 w-full h-full bg-gray-900 transform" x-transition:enter="transition ease duration-200" x-transition:enter-start="scale-0" x-transition:enter-end="scale-100" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="scale-100" x-transition:leave-end="scale-0"></span>
                </span>
            </a>
        </nav>
    </div>
</section>
</template>