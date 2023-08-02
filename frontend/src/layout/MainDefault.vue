<template>
  <div>
    <v-app-bar color="#FFFFFF">
      <v-app-bar-nav-icon
        color="#85F068"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img
          :src="require('../assets/logo_name.png')"
          class="my-3"
          contain
          width="240px"
          height="44px"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="mr-2" style="width: 108px">
        <v-text-field
          label="Search"
          flat
          solo
          hide-details="auto"
          append-icon="mdi-magnify"
        >
          <template v-slot:label>
            <span style="color: #7cd40c">Search</span>
          </template>
          <template v-slot:append>
            <v-icon style="color: #7cd40c">mdi-magnify</v-icon>
          </template>
        </v-text-field>
      </div>
      <div class="mr-2">
        <v-btn icon small>
          <v-badge color="red" dot>
            <v-icon color="#7CD40C"> mdi-bell </v-icon>
          </v-badge>
        </v-btn>
      </div>
      <div class="mr-2" style="width: 78px">
        <v-select
          v-model="select"
          :items="item"
          flat
          solo
          hide-details="auto"
          color="#7CD40C"
        >
          <template v-slot:selection="{ item }">
            <span style="color: #7cd40c">{{ item }}</span>
          </template>
          <template v-slot:append>
            <v-icon style="color: #7cd40c">mdi-menu-down</v-icon>
          </template>
        </v-select>
      </div>
      <div class="mr-10">
        <v-btn icon>
          <v-avatar style="margin-left: 30%">
            <v-img
              center
              :src="require('../assets/profile.png')"
              style="height: 110px; margin-top: 50%"
            />
          </v-avatar>

          <v-icon class="" color="#7cd40c">mdi-menu-down</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-img
            :src="require('../assets/logo.png')"
            contain
            class="my-3 mx-auto"
            width="150px"
          />
          
          <v-list-item style="background-color: #38D9B2;">
            <v-list-item-icon class="mr-auto">
              <v-icon color="white">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-2 white--text">Login</v-list-item-title>
          </v-list-item>

          <v-list-item style="background-color: #F55A9A;">
            <v-list-item-icon class="mr-auto">
              <v-icon color="white">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-2 white--text">Sign out</v-list-item-title>
          </v-list-item>
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      select: "EN",
      item: ["EN", "TH"],
    };
  },
};
</script>

<style scoped></style>
