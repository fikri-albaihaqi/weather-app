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
      : weatherCondition.includes('drizzle')
      || weatherCondition.includes('rain')
      ? 'bg-shower-rain'
      : weatherCondition.includes('thunderstorm') === 'thunderstorm'
      ? 'bg-thunderstorm'
      : weatherCondition === 'overcast clouds'
      ? 'bg-overcast-clouds'
      : weatherCondition.includes('snow')
      || weatherCondition.includes('sleet')
      ? 'bg-snow'
      : weatherCondition === 'mist'
      || weatherCondition === 'fog'
      ? 'bg-mist'
      : weatherCondition === 'haze'
      ? 'bg-haze'
      : weatherCondition === 'smoke'
      ? 'bg-smoke'
      : weatherCondition.includes('dust')
      || weatherCondition.includes('sand')
      ? 'bg-dust'
      : weatherCondition.includes('ash')
      ? 'bg-ash'
      : weatherCondition === 'squalls'
      ? 'bg-squalls'
      : weatherCondition === 'tornado'
      ? 'bg-tornado'
      : 'bg-clear-sky',
  ]" class="h-screen bg-blue bg-cover font-rubik">
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
