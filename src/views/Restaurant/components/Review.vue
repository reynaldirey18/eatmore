<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Reviews</h1>
        <div>
            <v-row>
              <v-col cols="6">
                <v-card flat>
                  <v-list color="#F4F5F6" three-line height="108">
                    <v-list-item>
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
                  <v-list color="#F4F5F6" three-line height="108">
                    <v-list-item>
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
    </div>
</template>
