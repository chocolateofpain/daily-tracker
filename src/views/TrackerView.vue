<template>
  <div class="grid grid-cols-[400px,1fr]">
    <TopicList />
    <TopicContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopicList from "@/components/TopicList.vue";
import TopicContent from "@/components/TopicContent.vue";

export default defineComponent({
  name: "TrackerView",
  components: {
    TopicContent,
    TopicList,
  },
});
</script>
