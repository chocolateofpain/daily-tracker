<template>
  <div class="home">
    <TopicList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopicList from "@/components/TopicList.vue";

export default defineComponent({
  name: "TrackerView",
  components: {
    TopicList,
  },
});
</script>
