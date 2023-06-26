<script setup>
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import SearchCard from '@/Components/AuthenticationCard.vue';
const form = useForm({
    bookNameParam: '',
    isbnParam: '',
});

const submit = () => {
    form.post(route('result'), {
        onFinish: () => form.reset('bookNameParam','isbnParam'),
    });
};
</script>

<template>
<SearchCard>
<form @submit.prevent="submit">
            <div>
                Name:
                <InputLabel for="Search book by ISBN or name" value="bookNameParam" />
                <TextInput 
                    id="bookNameParam"
                    v-model="form.bookNameParam"
                    type="text"
                    placeholder="book name"
                    class="mt-1 block w-full placeholder-gray-500"
                    required
                    autofocus
                    autocomplete="bookNameParam"
                />
                <InputError class="mt-2" :message="form.errors.bookNameParam" />
            </div>
            <div>
                ISBN
                <InputLabel for="ISBN" value="isbnParam" />
                <TextInput 
                    id="searchTerm"
                    v-model="form.isbnParam"
                    type="text"
                    placeholder="example 1234"
                    class="mt-1 block w-full placeholder-gray-500"
                    required
                    autofocus
                    autocomplete="isbnParam"
                />
                <InputError class="mt-2" :message="form.errors.isbnParam" />
            </div>

            <div class="flex items-center justify-end mt-4">


                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Search
                </PrimaryButton>
            </div>
        </form>
        </SearchCard>
</template>