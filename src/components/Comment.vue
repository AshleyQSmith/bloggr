<template>
  <div class="comment text-left m-1 pt-1 border-top">
  <h6>{{commentData.creator.name}}: {{commentData.body}}</h6>

<div v-if="this.commentData.creator.email == this.$auth.userInfo.email">
<button class="btn-sm btn-danger" @click="deleteComment()" >Delete</button>
<button class="btn-sm btn-warning" @click="editComment()" >Edit</button>
</div>

  </div>
</template>


<script>

export default {
  name: 'comment',
  data(){
    return {}
  },
  props: ["commentData"],

  computed:{},
  methods:{
    deleteComment(){
      this.$router.push({name: "ActiveBlog"})
      this.$store.dispatch('deleteComment', this.commentData.id)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>