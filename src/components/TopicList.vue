<template>
  <div class=""></div>
  <TopicItem v-for="item in topicListItems" :key="item.id" :topic="item" />
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import TopicItem from "./TopicItem.vue";
import { topicList } from "../dummyData";

export default defineComponent({
  name: "TopicList",
  components: { TopicItem },
  setup() {
    const topicListItems = computed(() => topicList);

    return {
      topicListItems,
    };
  },
});
</script>
