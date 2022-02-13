<template>
  <div class="">{{ name }}</div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TopicItem",
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const name = computed(() => props.topic.name);

    return {
      name,
    };
  },
});
</script>
