<template>
  <div class="comment text-left m-1 pt-1 border-top">
  <h6>{{commentData.creator.name}}: {{commentData.body}}</h6>

<div v-if="this.commentData.creator.email == this.$auth.userInfo.email">
<button class="btn-sm btn-danger" @click="deleteComment()" >Delete</button>

<button 
class="btn-sm btn-warning"
@click="triggerEditComment(commentData)"
data-toggle="modal" 
data-target="#editCommentModal"
>Edit</button>

<editCommentModal id="editCommentModal"></editCommentModal>
</div>

  </div>
</template>


<script>
import editCommentModal from "../components/EditCommentModal.vue"
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
      this.$store.dispatch('deleteComment', this.commentData)
    },
     triggerEditComment(commentData) {
      this.$store.commit("setActiveComment", commentData);
    },
  },
  components:{editCommentModal}
}
</script>


<style scoped>

</style>