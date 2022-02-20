<template>
  <div class="">{{ name }}</div>
  <div>{{ topic }}</div>
  <button @click="logActivity">Log activity</button>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "TrackerContent",
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const name = computed(() => props.topic.name);
    const topic = ref();

    const logActivity = () => {
      console.log("logging activity");
      console.log(name);
      store.dispatch("logActivity", name);
    };

    watch(
      () => route.params.id,
      (newId) => {
        // topic.value = await fetchTopic(newId);
        console.log(newId);
        topic.value = store.getters.getTopicsList.filter(
          (topic: { id: string | string[] }) => topic.id === newId
        );
      }
    );

    return {
      logActivity,
      name,
    };
  },
});
</script>
