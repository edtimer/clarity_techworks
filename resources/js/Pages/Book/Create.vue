<script setup>
import { Head, Link, useForm,usePage } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';

const form = useForm({
    name: '',
    isbn: '',
    author: '',
    genre: '',
    description: '',
});
//toast for success and failure
const { $toast } = usePage();


const submit = () => {
    form.post(route('store'), {
        onFinish: () => form.reset(['name', 'isbn', 'author', 'genre', 'description']),onError:(e)=>console.log(e)
    });
};
</script>

<template>
    <AppLayout>

        <Head title="Register" />

        <AuthenticationCard>

            <h1>Add a new Book</h1>
            <form @submit.prevent="submit">
                <div>
                    <InputLabel for="name" value="name" />
                    <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required
                        autofocus autocomplete="name" />
                    <InputError class="mt-2" :message="form.errors.name" />
                </div>

                <div class="mt-4">
                    <InputLabel for="isbn" value="isbn" />
                    <TextInput id="isbn" v-model="form.isbn" type="text" class="mt-1 block w-full" required
                        autocomplete="isbn" />
                    <InputError class="mt-2" :message="form.errors.isbn" />
                </div>

                <div class="mt-4">
                    <InputLabel for="author" value="author" />
                    <TextInput id="author" v-model="form.author" type="text" class="mt-1 block w-full" required
                        autocomplete="author" />
                    <InputError class="mt-2" :message="form.errors.author" />
                </div>

                <div class="mt-4">
                    <InputLabel for="genre" value="genre" />
                    <TextInput id="genre" v-model="form.genre" type="text" class="mt-1 block w-full" required
                        autocomplete="genre" />
                    <InputError class="mt-2" :message="form.errors.genre" />
                </div>

                <div class="mt-4">
                    <InputLabel for="description" value="description" />
                    <TextInput id="description" v-model="form.description" type="text" class="mt-1 block w-full" required
                        autofocus autocomplete="description" />
                    <InputError class="mt-2" :message="form.errors.description" />
                </div>

                <div class="flex items-center justify-end mt-4">


                    <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Add
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticationCard>
    </AppLayout>
</template>
