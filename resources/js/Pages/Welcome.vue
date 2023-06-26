<script setup>
import { Head, Link } from '@inertiajs/vue3';
import UnAuthenticatedLayout from '../Layouts/UnAuthenticatedLayout.vue';
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <UnAuthenticatedLayout>

        <Head title="Welcome to the best library" />

        <div
            class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                <Link v-if="$page.props.auth.user" :href="route('dashboard')"
                    class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Dashboard</Link>

                <template v-else>
                    <Link :href="route('login')"
                        class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                    Log in</Link>

                    <Link v-if="canRegister" :href="route('register')"
                        class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                    Register</Link>
                </template>
        </div>

        <!-- I can also make it a reusable component like this
        <BookCard url="https://www.pen-and-sword.co.uk/assets/img/jackets/large/12048.jpg"/> -->

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
  <img class="w-full" src="https://www.pen-and-sword.co.uk/assets/img/jackets/large/12048.jpg" alt="new book collection">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">view available books</div>
    <p class="text-gray-700 text-base">
      The best library in the world offers an endless selection of books.
    </p><Link :href="route('book')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View books
    </Link>
  </div>

</div>
</div>
<div class="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
    Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
</div>
</UnAuthenticatedLayout></template>  