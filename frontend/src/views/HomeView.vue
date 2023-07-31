<template>
  <div>
    <h1>home page</h1>
    <v-row class="ma-4">
      <v-btn class="mr-4" to="/about"> go to about pages </v-btn>
      <v-btn to="/ZeroWaste"> go to ZeroWaste</v-btn>
    </v-row>

    <v-row>
      <v-col cols="4" v-for="(item, index) in data" :key="index">
        <v-card class="ma-2">
          <h1>{{ index }}:Topic: {{ item.name }}</h1>
          <h1 v-for="(item2, index2) in item.detail" :key="index2">
            Detail: {{ item2 }}
          </h1>

          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="gray" v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>Click Me 1</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Click Me 2</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card>
      </v-col>
    </v-row>

    <v-col cols="12">
      <v-img
        :src="require('../assets/logo.png')"
        class="my-3"
        contain
        height="100"
      />
    </v-col>
  </div>
</template>

<script>
import dataAll from "../data/data.js";

export default {
  date() {
    return {
      data: [],
      name: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.data = dataAll;
      this.name = this.data[0].name;
      console.log(this.data);
      // console.log(this.data[0].Name);
    },
  },
};
</script>
