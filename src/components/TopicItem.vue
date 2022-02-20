<template>
  <div class="" @onClick="setCurrentTopic">{{ name }}</div>
  <button @click="setCurrentTopic(name)">{{ name }}</button>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

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
    const router = useRouter();

    const setCurrentTopic = (name: string) => {
      setRoute();
      return store.commit("changeCurrentTopic", name);
    };

    const setRoute = () =>
      router.push({ name: "tracker-content", params: { id: props.topic.id } });

    return {
      name,
      setCurrentTopic,
    };
  },
});
</script>
