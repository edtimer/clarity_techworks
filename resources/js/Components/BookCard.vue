
<script setup>

defineProps({
  url: String
})
</script>
<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
        <img class="w-full" src={{ url }}
            alt="new book collection">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">view available books</div>
            <p class="text-gray-700 text-base">
                The best library in the world offers an endless selection of books.
            </p>
        </div>
    </div>

</template>