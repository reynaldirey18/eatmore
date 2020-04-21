<template>
  <div>
    <div class="d-flex">
      <h1 class="app-title mb-5">Add Rewards</h1>
      <v-spacer></v-spacer>
      <v-btn color="#FDB526" @click.prevent="handleCreateReward" dark><span class="text-capitalize">Create Rewards</span></v-btn>
    </div>
    <v-card class="pb-6 pt-3 px-4" outlined>
      <div>
          <p class="app-title-small ma-0">Title</p>
          <v-text-field
          outlined
          dense
          placeholder="Eg. Special Offer Holiday"
          ></v-text-field>
      </div>
      <div>
          <p class="app-title-small ma-0">Reward Type</p>
          <v-select
          dense
          v-model="rewardType"
          :items="rewardTypeList"
          outlined
          ></v-select>
      </div>
      <v-row>
        <v-col cols="6">
          <div>
              <p class="app-title-small ma-0">Start Promo</p>
              <v-dialog
                ref="dialog"
                v-model="startTime.visible"
                :return-value.sync="startTime.datetime"
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startTime.datetime"
                    outlined
                    dense
                    placeholder="Eg. Special Offer Holiday"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="startTime.showTime"
                  v-model="startTime.time"
                  full-width
                >
                  <v-btn text color="primary" @click="handleStartTimeSubmit">OK</v-btn>
                </v-time-picker>
                <v-date-picker v-else no-title v-model="startTime.date">
                  <v-btn text color="primary" @click="handleStartTimeNext">Next</v-btn>
                </v-date-picker>
              </v-dialog>
          </div>
        </v-col>
        <v-col cols="6">
          <div>
              <p class="app-title-small ma-0">End Promo</p>
               <v-dialog
                ref="dialog"
                v-model="startTime.visible"
                :return-value.sync="startTime.datetime"
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startTime.datetime"
                    outlined
                    dense
                    placeholder="Eg. Special Offer Holiday"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="startTime.showTime"
                  v-model="startTime.time"
                  full-width
                  color="#FDB526"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="#FDB526" @click="handleStartTimeSubmit">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-time-picker>
                <v-date-picker color="#FDB526" v-else no-title v-model="startTime.date">
                    <v-spacer></v-spacer>
                    <v-btn text color="#FDB526" @click="handleStartTimeNext">Next</v-btn>
                    <v-spacer></v-spacer>
                </v-date-picker>
              </v-dialog>
          </div>
        </v-col>
      </v-row>
      <div>
          <p class="app-title-small ma-0">Minimum Transaction Amount</p>
          <v-text-field
          outlined
          dense
          placeholder="Eg. 200.000"
          ></v-text-field>
      </div>
      <div>
          <p class="app-title-small ma-0">Terms & Condition</p>
          <v-textarea
          outlined
          dense
          placeholder="Eg. Only applies to selected products"
          ></v-textarea>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoyaltyRewardCard',
  data () {
    return {
      startTime: {
        date: null,
        time: null,
        datetime: '',
        showTime: false,
        visible: false
      },
      rewardType: 1,
      rewardTypeList: [
        {
          text: 'Vocher',
          value: 1
        }
      ]
    }
  },
  methods: {
    handleCreateReward () {
      this.$emit('setAddReward', false)
    },
    handleStartTimeNext () {
      this.startTime.showTime = true
      this.$nextTick(() => {
      })
    },
    handleStartTimeSubmit () {
      this.startTime.showTime = false
      this.$nextTick(() => {
        const formatedDate = this.startTime.date + ' / ' + this.startTime.time
        this.$refs.dialog.save(formatedDate)
        this.startTime.datetime = formatedDate
      })
    }
  }
}
</script>
