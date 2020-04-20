<template>
  <div class="comment text-left m-1 pt-1 border-top">
  <h6>{{commentData.creator.name}}: {{commentData.body}}</h6>


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