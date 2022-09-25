<script>
import Button from "./components/Button.vue";
import Weather from "./components/Weather.vue";
import axios from "axios";

export default {
  components: {
    Button,
    Weather,
  },
  data() {
    return {
      response: [],
      weatherCondition: "",
    };
  },
  methods: {
    async searchCity(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

      this.response = await axios.get(url);
      this.weatherCondition = this.response.data.weather[0].description;
      console.log(this.weatherCondition);
    },
  },
};
</script>

<template>
  <div :class="[
      weatherCondition === 'clear sky'
      ? 'bg-clear-sky'
      : weatherCondition === 'few clouds'
      ? 'bg-few-clouds'
      : weatherCondition === 'scattered clouds'
      ? 'bg-scattered-clouds'
      : weatherCondition === 'broken clouds'
      ? 'bg-broken-clouds'
      : weatherCondition === 'thunderstorm'
      ? 'bg-thunderstorm'
      : weatherCondition === 'overcast clouds'
      ? 'bg-overcast-clouds'
      : weatherCondition === 'snow'
      ? 'bg-snow'
      : weatherCondition === 'mist'
      ? 'bg-mist'
      : 'bg-red',
  ]" class="h-screen bg-few-clouds bg-cover font-rubik">
    <div class="flex flex-col items-center pt-12">
      <div class="flex">
        <input v-model="city" @keyup.enter="searchCity(city)" class="
            mx-2
            p-2
            rounded-lg
            bg-white/20
            backdrop-blur-sm
            placeholder:text-white/60 placeholder:italic
            w-[50vh]
          " type="text" placeholder="Search city" />
      </div>
      <Weather :weatherData="response" />
    </div>
  </div>
</template>
