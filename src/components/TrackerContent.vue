<template>
  <div class="">{{ name }}</div>
  <div>{{ topic }}</div>
  <button @click="logActivity">Log activity</button>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const fetchTopic = (id: string | string[]) => console.log(id);

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

    const logActivity = () => store.dispatch("logActivity", name);

    watch(
      () => route.params.id,
      (newId) => {
        // topic.value = await fetchTopic(newId);
        console.log(newId);
        topic.value = fetchTopic(newId);
      }
    );

    return {
      logActivity,
      name,
    };
  },
});
</script>
