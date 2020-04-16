<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Email</h1>
        <form>
            <div>
                <p class="app-title-small ma-0">Business Email</p>
                <v-text-field
                    placeholder="Eg. resto@resto.com"
                    single-line
                    dense
                    outlined
                ></v-text-field>
            </div>
            <div class="mt-8 d-flex justify-end align-end">
                <v-btn @click.prevent="handleFormSubmit" color="#FDB526" dark><span class="text-capitalize">save change</span></v-btn>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  methods: {
    handleFormSubmit () {

    }
  }
}
</script>
