<template>
  <div>
    <b-row>
      <b-col>
        <span>ESCRIBIR NUEVO COMENTARIO</span>
        <label>NOMBRE</label>
        <b-form-group>
          <b-form-input v-model="name"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label>COMENTARIO</label>
        <b-form-group>
           <b-form-textarea
              v-model="comment"
              id="textarea"
              rows="3"
              max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
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
  },
};
</script>
