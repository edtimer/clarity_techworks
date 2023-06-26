<script setup>
import { Head, Link } from '@inertiajs/vue3';
</script>
<template>
    <div>
        <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
            <ApplicationLogo class="block h-12 w-auto" />

            <h1 class="mt-8 text-2xl font-medium text-gray-900">
                Add a Book
            </h1>

            <p class="mt-6 text-gray-500 leading-relaxed">
    selec the following to add a book to the list of books.
            </p>
        </div>
        <Link :href="route('create')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add book
    </Link>

    </div>
</template>