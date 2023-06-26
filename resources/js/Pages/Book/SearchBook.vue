<script>
const form = useForm({
    searchTerm: '',
});

const submit = () => {
    form.post(route('result'), {
        onFinish: () => form.reset('searchTerm'),
    });
};
</script>

<template>

<form @submit.prevent="submit">
            <div>
                <InputLabel for="searchTerm" value="searchTerm" />
                <TextInput
                    id="searchTerm"
                    v-model="form.searchTerm"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="searchTerm"
                />
                <InputError class="mt-2" :message="form.errors.searchTerm" />
            </div>

            <div class="flex items-center justify-end mt-4">


                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Search
                </PrimaryButton>
            </div>
        </form>
</template>