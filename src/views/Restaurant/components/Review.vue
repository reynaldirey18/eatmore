<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Reviews</h1>
        <div>
            <v-row>
              <v-col cols="6">
                <v-card flat>
                  <v-list color="#F4F5F6" height="108">
                    <v-list-item three-line>
                      <v-list-item-icon>
                        <v-btn class="ma-2" outlined fab color="#1DBA81">
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
                    <v-list-item three-line>
                      <v-list-item-icon>
                        <v-btn class="ma-2" outlined fab color="#F32626">
                          <v-icon>mdi-emoticon-sad</v-icon>
                        </v-btn>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          25%
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          Customer Dissatify
                        </v-list-item-subtitle>
                        <v-list-item-action-text class="app-subtitle-small">
                          Tips make customer more satisfy
                        </v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
        </div>
         <div>
            <p class="app-title-small py-3" style="margin-bottom: 0px">All Reviews</p>
            <div>
                <v-btn
                    v-for="(star, i) in starFilterList"
                    :key="'day' +i"
                    class="btn-start-filter"
                    :color="starFilterIndex === i ? '#FDB526' : '#999999'"
                    :style="starFilterIndex === i ? 'background-color:#FFF8E9': ''"
                    height="44"
                    outlined
                    min-width="104"
                    @click="starFilterIndex = i"
                >
                <v-icon v-text="star.icon" class="mr-1" small></v-icon>
                <span class="text-capitalize">{{star.name}}</span>
                </v-btn>
            </div>
            <div>
              <v-list>
                <v-list-item three-line>
                  <v-list-item-avatar>
                    <v-img src="https://c-sf.smule.com/sf/s46/arr/eb/76/150550ba-d611-4e89-99a6-a193e63c4872.jpg"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="'Aang'"></v-list-item-title>
                    <v-list-item-action-text class="d-flex">
                      <v-rating
                        :value="4.5"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        hover
                        dense
                        x-small
                        readonly
                      ></v-rating>
                       <span class="caption small" style="color:#F9A825">
                        {{ 4.5 }}
                      </span>
                    </v-list-item-action-text>
                    <v-list-item-subtitle class="app-subtitle-small">
                      Wednesday, 27 April 2020
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="mt-2">
                      <p>Integer nulla turpis, vehicula vel ante et, scelerisque facilisis sapien. Praesent sagittis blandit turpis, eu sollicitudin erat consectetur sed. Cras eget magna fermentum, sollicitudin erat consectetur.</p>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      starFilterIndex: 0,
      starFilterList: [
        {
          name: 'Show All',
          active: true
        },
        {
          name: '5 Stars',
          active: false,
          icon: 'mdi-star'
        },
        {
          name: '4 Stars',
          active: false,
          icon: 'mdi-star'
        },
        {
          name: '3 Stars',
          active: false,
          icon: 'mdi-star'
        },
        {
          name: '2 Stars',
          active: false,
          icon: 'mdi-star'
        },
        {
          name: '1 Stars',
          active: false,
          icon: 'mdi-star'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-start-filter {
  margin-right: 10px;
  background-color: #FAFAFA;
  &last-child {
      margin-right: 0px;
  }
}
</style>
