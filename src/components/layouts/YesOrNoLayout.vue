<template>
  <el-main>
    <h1 class="title">Ask a question to get yes or no answer</h1>
    <el-row :gutter="20" justify="center">
      <el-col :span="7"></el-col>
      <el-col :span="10">
        <el-input
          v-model="input"
          type="text"
          placeholder="Type here..."
          minlength="2"
          maxlength="100"
          show-word-limit
          clearable
        />
        <div class="questionInput">
          <el-button type="primary" @click="getAnswer">Ask</el-button>
          <el-button @click="clearText">Clear</el-button>
        </div></el-col
      >
      <el-col :span="7"></el-col>
    </el-row>
    <el-row justify="center" v-loading="loading">
      <el-col :span="8"></el-col>
      <el-col :span="8">
        <div class="answer">
          <h1>{{ answer }}</h1>
          <img :src="image" /></div
      ></el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </el-main>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    clearText() {
      this.input = "";
    },
    ...mapActions(["getAnswer"]),
  },
  computed: {
    ...mapState({
      loading: (state) => state.yesOrNo.loading,
      answer: (state) => state.yesOrNo.answer,
      image: (state) => state.yesOrNo.image,
    }),
  },
};
</script>
<style scoped>
.questionInput {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
}
.answer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.title {
  text-align: center;
}
</style>
