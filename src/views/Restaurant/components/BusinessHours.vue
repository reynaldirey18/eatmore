<template>
  <div class="px-4 py-6">
    <h1 class="app-title mb-10">Business Hours</h1>
    <form>
      <div>
        <p class="app-title-small" style="margin-bottom: 0px">Daily Bussiness</p>
        <div>
          <v-btn
            v-for="(day, i) in dayList"
            :key="'day' +i"
            class="btn-daylist"
            :color="day.active ? '#FDB526' : '#999999'"
            :style="day.active ? 'background-color:#FFF8E9': ''"
            height="44"
            outlined
            max-width="125"
            @click="day.active = !day.active"
          >
            <span class="text-capitalize">{{day.name}}</span>
          </v-btn>
        </div>
      </div>
      <div class="mt-8">
        <div
          v-for="(day, i) in dayActive"
          :key="'dayActive' + i"
        >
          <p class="app-subtitle">{{day.name}}</p>
          <v-row>
            <v-col cols="6">
              <div>
                <p class="app-title-small ma-0">Time Open</p>
                <v-text-field
                    placeholder="Eg. 11:00"
                    single-line
                    dense
                    outlined
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="6">
              <div>
                <p class="app-title-small ma-0">Time Close</p>
                <v-text-field
                  placeholder="Eg. 21:00"
                  single-line
                  dense
                  outlined
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="mt-8 d-flex justify-end align-end">
        <v-btn @click.prevent="handleFormSubmit" color="#FDB526" dark><span class="text-capitalize">save change</span></v-btn>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dayList: [
        {
          name: 'Monday',
          active: false
        },
        {
          name: 'Tuesday',
          active: false
        },
        {
          name: 'Wednesday',
          active: false
        },
        {
          name: 'Thursday',
          active: false
        },
        {
          name: 'Friday',
          active: false
        },
        {
          name: 'Saturday',
          active: false
        },
        {
          name: 'Sunday',
          active: false
        }
      ]
    }
  },
  computed: {
    dayActive () {
      return this.dayList.filter(day => day.active)
    }
  },
  methods: {
    handleFormSubmit () {
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-daylist {
  margin-right: 10px;
  background-color: #FAFAFA;
  &last-child {
      margin-right: 0px;
  }
}
</style>
