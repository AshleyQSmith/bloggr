import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: {},
    activeBlog: {},
    comments: {},
    activeComment: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setActiveBlog(state, activeBlog) {
      state.activeBlog = activeBlog;
    },
    setComments(state, comments){
      state.comments = comments
    },
    setActiveComment(state, comment) {
      state.activeComment = comment
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogs({ commit }) {
      try {
        let res = await api.get("blogs");
        commit("setBlogs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogById({ commit }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId);
        console.log(res.data)
        commit("setActiveBlog", res.data);
      } catch (error) {
        console.error(error)
      }
    },
    async createBlog({ commit, dispatch }, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    async createComment({commit, dispatch}, newComment) {
      try {
        let res = await api.post('comments', newComment)
        dispatch('getBlogById', newComment.blogId)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBlog({commit, dispatch}, blogId) {
      try {
        await api.delete('blogs/' + blogId)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment({commit, dispatch}, commentData) {
      try {
        await api.delete('comments/' + commentData.id)
        dispatch('getBlogById', commentData.blogId)
      } catch (error) {
        console.error(error)
      }
    },

    async editBlog({commit, dispatch}, blogData) {
    try {
      await api.put('blogs/' + blogData.id, blogData)
      dispatch('getBlogById', blogData.id)
    } catch (error) {
      console.error(error)
    }
  },

  async getBlogForEdit({ commit, }, blogId) {
    try {
      let res = await api.get('blogs/' + blogId)
      commit('setActiveBlog', res.data.blog)
      console.log(this.state.activeBlog)
    } catch (error) {
      console.error(error)
    }
  },

  async editComment({commit, dispatch}, commentData) {
    try {
      await api.put('comments/' + commentData.id, commentData)
      dispatch('getBlogById', commentData.blogId)
    } catch (error) {
      console.error(error)
    }
  }
},
});
