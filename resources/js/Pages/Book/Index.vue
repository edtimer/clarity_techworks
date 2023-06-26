<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3'
//destructuring the prop
defineProps({ books: Array })
</script>

<!-- <template>

    <Head title="Welcome to books" />
    <h1>Book list</h1>
    <p>Hello {{ books[0].name}}, welcome to your first Inertia app!</p>

</template> -->
<template>
  {{ console.log(books) }}
  <AppLayout title="Dashboard">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4 mt-6">Book List</h1>
      <table class="table-auto min-w-full bg-white border border-gray-200 ">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Book Name</th>
            <th class="py-2 px-4 border-b">Book Isbn</th>
            <th class="py-2 px-4 border-b">Author</th>
            <th class="py-2 px-4 border-b">genre</th>
            <th class="py-2 px-4 border-b">view description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td class="py-2 px-2 border-b">{{ book.name }}</td>
            <td class="py-2 px-2 border-b">{{ book.isbn }}</td>
            <td class="py-2 px-2 border-b">{{ book.author }}</td>
            <td class="py-2 px-2 border-b">{{ book.genre }}</td>
            <button @click="viewDescription(book.description)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              view description
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </AppLayout>
</template>

