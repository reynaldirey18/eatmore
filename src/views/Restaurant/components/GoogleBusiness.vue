<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Google Bussines</h1>
        <form>
            <div>
                <p class="app-title-small ma-0">ID Account</p>
                <v-text-field
                    placeholder="Eg. resto@resto.com"
                    single-line
                    dense
                    outlined
                ></v-text-field>
            </div>
            <div>
                <v-row>
                <v-col cols="6">
                    <v-card flat>
                    <v-list color="#F4F5F6" height="108">
                        <v-list-item three-line>
                        <v-list-item-icon>
                            <v-btn class="ma-1" outlined fab color="#1DBA81">
                            <v-icon>mdi-emoticon-happy</v-icon>
                            </v-btn>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                            75%
                            </v-list-item-title>
                            <v-list-item-subtitle>
                            Customer Satisfy
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class="app-subtitle-small">
                            Always keep your great performance!
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card flat>
                    <v-list color="#F4F5F6" height="108">
                        <v-list-item two-line>
                        <v-list-item-icon>
                            <v-btn class="ma-1" text fab color="#F32626">
                            <v-icon>mdi-star</v-icon>
                            </v-btn>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                            4.85 (433 Feeds)
                            </v-list-item-title>
                            <v-list-item-subtitle>
                            Your Review Is Excellent
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    </v-card>
                </v-col>
                </v-row>
            </div>
             <div>
                <p class="app-title-small ma-0">Address</p>
                <v-text-field
                    placeholder="Eg. Jalan Batununggal No. 12A"
                    single-line
                    dense
                    outlined
                ></v-text-field>
            </div>
             <div>
                <p class="app-title-small ma-0">No. Telephone</p>
                <v-text-field
                    placeholder="Eg. 085675840392"
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
