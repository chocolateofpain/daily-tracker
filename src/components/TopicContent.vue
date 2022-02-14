<template>
  <div class="">{{ topicTitle }}</div>
  <v-date-picker :value="null" color="red" is-dark is-range />
  <Calendar />
  <DatePicker />
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { Calendar, DatePicker } from "v-calendar";

export default defineComponent({
  name: "TopicContent",
  components: {
    Calendar,
    DatePicker,
  },
  setup() {
    const store = useStore();

    const topicTitle = computed(() => store.state.currentTopic);

    return {
      topicTitle,
    };
  },
});
</script>
