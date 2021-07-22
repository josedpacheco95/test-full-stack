<template>
  <div class="d-flex flex-column justify-content-left">
    <div style="margin-left: 20px">
      <span
      class="d-flex justify-content-left"
      style="color: orange; font-size: 1.1rem;font-weight:bold"
      >
        COMENTARIOS
      </span>
      <span v-if="comments.length === 0"
       class="d-flex justify-content-left"
      >
          NO HAY COMENTARIOS
      </span>
      <b-list-group v-else-if="comments.length > 0" flush>
        <b-list-group-item v-for="comment in comments" :key="comment.id">
          <div class="d-flex flex-column">
            <div class="d-flex flex-row">
              <span class="mr-2" style="color:orange; font-weight:600;">
                {{comment.userName ? comment.userName : 'ANONIMO'}}
              </span>
              <span style="margin-left: 5px;">
                el {{new Date(comment.createdAt).toLocaleDateString("es")}}
              </span>
            </div>
            <span class="mt-2 mb-2 d-flex justify-content-left">
              {{comment.comment}}
            </span>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CommentsList',
  async created() {
    await this.listComments(this.$route.params.id);
  },
  computed: {
    ...mapGetters(['comments']),
  },
  methods: {
    ...mapActions(['listComments']),
  },
};
</script>
