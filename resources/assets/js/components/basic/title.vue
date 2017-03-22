<template>
    <div class="title">
        <h1>{{title}}</h1>
    </div>
</template>
<script>
  export default {
    name: 'title',
    props: {
      title: String
    }
  }
</script>
<style lang="sass" scoped>
  .title {
    font-size: 15px;
    color: #56B7DA;
    line-height: 50px;
    border-bottom: 1px solid #016CA4;
    font-weight: normal;
  }
</style>