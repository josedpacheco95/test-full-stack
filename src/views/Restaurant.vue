<template>
  <div>
    <RestaurantHeader
      :logo="restaurant.logoUrl"
      :name="restaurant.name"
      :description="restaurant.description"
    />
    <Gallery :pictures="JSON.parse(restaurant.pictures)"/>
    <CommentsList/>
    <CommentsForm/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RestaurantHeader from '../components/restaurant/header.vue';
import Gallery from '../components/restaurant/pictures.vue';
import CommentsList from '../components/restaurant/CommentsList.vue';
import CommentsForm from '../components/restaurant/CommentsForm.vue';

export default {
  name: 'Restaurant',
  components: {
    RestaurantHeader,
    Gallery,
    CommentsList,
    CommentsForm,
  },
  async created() {
    console.log(this.$route);
    await this.getRestaurant({ id: this.$route.params.id });
  },
  computed: {
    ...mapGetters(['restaurant']),
  },
  methods: {
    ...mapActions(['getRestaurant']),
  },
};
</script>
