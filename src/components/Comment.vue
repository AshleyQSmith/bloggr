<template>
  <div class="comment">
  <h5>{{commentData.body}}</h5>


  </div>
</template>


<script>

export default {
  name: 'comment',
  data(){
    return {}
  },
  props: ["commentData"],

  // computed:{
  //   comments(){
  //     return this.$store.state.activeBlog.comments
      
  //   }
  // },
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>