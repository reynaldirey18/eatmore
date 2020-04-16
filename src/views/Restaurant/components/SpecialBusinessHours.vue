<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Special Business Hours</h1>
        <div>
            <v-sheet
            tile
            height="54"
            color="grey lighten-3"
            class="d-flex"
            >
            <v-btn
                icon
                class="ma-2"
                @click="$refs.calendar.prev()"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
              <div class="d-flex align-center flex-1">
                <p class="app-subtitle">{{formatedDateTitle}}</p>
              </div>
            <v-spacer></v-spacer>
            <v-btn
                icon
                class="ma-2"
                @click="$refs.calendar.next()"
            >
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            </v-sheet>
            <v-sheet height="600">
            <v-calendar
                ref="calendar"
                v-model="value"
                :type="type"
                :events="events"
                :event-overlap-mode="mode"
                :event-overlap-threshold="30"
                :show-month-on-first="false"
                @change="getEvents"
                @click:date="dialog = true"
            ></v-calendar>
            </v-sheet>
        </div>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent width="450">
            <v-card>
              <div class="d-flex justify-space-between" style="
                height: 52px;
                box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.05);
                overflow: hidden;
              ">
                <v-card-title style="
                 font-weight: 500;
                 font-size: 16px;
                ">Special Hour</v-card-title>
                <v-icon @click="dialog = false" class="mr-3">mdi-close</v-icon>
              </div>

              <v-list two-line subheader>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>mdi-chevron-double-left</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content class="justify-center">
                    <v-list-item-title class="text-center" v-text="'Friday'"></v-list-item-title>
                    <v-list-item-subtitle class="text-center" v-text="'20 April 2020'"></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon>mdi-chevron-double-right</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item style="background-color:#F5F5F5; border-radius: 4px" class="mx-10">
                  <v-list-item-content class="justify-center">
                    <v-list-item-title v-text="'Set Enabled'"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-switch
                      v-model="enabled"
                    ></v-switch>
                  </v-list-item-action>
                </v-list-item>

              </v-list>

              <div class="px-5 mt-5">
                <p class="app-subtitle">Set Business Date</p>
                <v-row>
                  <v-col cols="6">
                    <div>
                        <p class="app-title-small ma-0">Start Date</p>
                        <v-text-field
                            single-line
                            dense
                            outlined
                        ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div>
                        <p class="app-title-small ma-0">End Date</p>
                        <v-text-field
                            single-line
                            dense
                            outlined
                        ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="px-5">
                <p class="app-subtitle">Set Business Time</p>
                <v-row>
                  <v-col cols="6">
                    <div>
                        <p class="app-title-small ma-0">Time Open</p>
                        <v-text-field
                            single-line
                            dense
                            outlined
                        ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div>
                        <p class="app-title-small ma-0">Time End</p>
                        <v-text-field
                            single-line
                            dense
                            outlined
                        ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <v-card-actions class="flex-column">
                <v-btn color="#FDB526" dark block @click="dialog = false">Save Changes</v-btn>
                <v-btn color="red" text block @click="dialog = false">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
    </div>
</template>

<script>
import * as moment from 'moment'
export default {
  data () {
    return {
      dialog: false,
      value: moment().format('YYYY-MM-DD'),
      mode: 'stack',
      type: 'month',
      events: [
        {
          name: '',
          start: '2020-04-01',
          end: '2020-04-01',
          color: 'blue'
        }
      ]
    }
  },
  computed: {
    formatedDateTitle () {
      return moment(this.value).format('MMMM, YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
