<script>
import Button from "./components/Button.vue";
import axios from "axios";

export default {
  components: {
    Button,
  },
  methods: {
    async searchCity(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

      const response = await axios.get(url);
      console.log(response);
      return response;
    },
  },
};
</script>

<template>
  <input type="text" v-model="city" placeholder="Search city" />
  <Button
    :text="'Search'"
    :class="['bg-green-500', 'rounded-full', 'py-1', 'px-6']"
    @click="searchCity(city)"
  />
</template>
