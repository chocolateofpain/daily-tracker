<template>
  <div class="" @onClick="setCurrentTopic">{{ name }}</div>
  <button @click="setCurrentTopic(name)">{{ name }}</button>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TopicItem",
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const name = computed(() => props.topic.name);

    const setCurrentTopic = (name: string) => {
      return store.commit("changeCurrentTopic", name);
    };

    return {
      name,
      setCurrentTopic,
    };
  },
});
</script>
