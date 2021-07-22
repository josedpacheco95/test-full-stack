<template>
  <div>
    <div class="row">
      <div class="col-md-6 d-flex flex-column">
        <span class="d-flex justify-content-left"
          style="color: orange; font-size: 1.1rem;font-weight:bold;margin-left: 20px;"
        >ESCRIBIR NUEVO COMENTARIO</span>
        <label
          class="d-flex justify-content-left"
          style="color: orange; font-size: 0.85rem;font-weight:bold;margin-left: 20px;">
          NOMBRE
        </label>
        <b-form-group style="margin-left: 20px">
          <b-form-input v-model="name"></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 d-flex flex-column">
        <label
          class="d-flex justify-content-left"
          style="color: orange; font-size: 0.85rem;font-weight:bold;margin-left: 20px;"
        >COMENTARIO</label>
        <b-form-group style="margin-left: 20px">
           <b-form-textarea
              v-model="comment"
              id="textarea"
              rows="3"
              max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <div class="mb-4 mt-4">
          <b-button @click="sendComment()">
            ENVIAR
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CommentsForm',
  data() {
    return {
      name: '',
      comment: '',
    };
  },
  methods: {
    ...mapActions(['createComment']),
    async sendComment() {
      if (this.name.length === 0 || this.comment.length === 0) {
        this.$bvToast.toast('Complete todo los campos para poder enviar un comentario', {
          title: 'No se envio el comentario',
          variant: 'danger',
          autoHideDelay: 5000,
        });
      } else {
        this.createComment({
          userName: this.name,
          comment: this.comment,
          restaurantId: this.$route.params.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .btn-secondary {
    color: #fff;
    background-color: orange;
    border-color: orange;
}
</style>
