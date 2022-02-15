<template>
  <div class="">{{ name }}</div>
  <div>{{ topic }}</div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

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
    const route = useRoute();
    const name = computed(() => props.topic.name);
    const topic = ref();

    watch(
      () => route.params.id,
      (newId) => {
        // topic.value = await fetchTopic(newId);
        console.log(newId);
        topic.value = fetchTopic(newId);
      }
    );

    return {
      name,
    };
  },
});
</script>
