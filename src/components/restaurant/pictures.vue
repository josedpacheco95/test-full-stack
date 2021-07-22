<template>
  <div class="d-flex flex-column justify-content-center">
      <span
        class ="mt-2 mb-1"
        style="color: orange; font-size: 1.1rem;font-weight:bold">
        FOTOGRAFIAS
      </span>
      <div class="d-flex justify-content-center">
        <lingallery :iid.sync="currentId" :width="200" :height="200" :items="items"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'picturesGallery',
  props: ['pictures'],
  computed: {
    items() {
      if (this.pictures.length > 0) {
        return this.pictures.map((picture) => {  // eslint-disable-line
          return {
            src: picture,
            thumbnail: picture,
          };
        });
      }
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .carousel-item img {
        height:100vh!important ;
    }
</style>
