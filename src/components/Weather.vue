<script>
export default {
  name: "Weather",
  props: {
    weatherData: Object,
  },
  methods: {
    upperCaseFirstLetter() {
      const sentence = this.weatherData.data.weather[0].description;
      const finalSentence = sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );

      return finalSentence;
    },
  },
};
</script>

<template>
  <div
    v-if="weatherData.length !== 0"
    class="flex justify-between items-center text-white w-[90%] mt-32"
  >
    <div>
      <h3 class="flex mt-8 text-xl">
        <span class="material-symbols-outlined mx-1">location_on</span>
        {{ weatherData.data.name }}
      </h3>

      <h1 class="text-9xl">{{ weatherData.data.main.temp.toFixed(0) }}°</h1>
      <h2 class="flex"><span class="material-symbols-outlined mx-1">air</span> {{ weatherData.data.wind.speed }}m/s</h2>
    </div>
    <div>
      <h3 class="-rotate-90">
        {{ upperCaseFirstLetter() }}
      </h3>
    </div>
  </div>
</template>
