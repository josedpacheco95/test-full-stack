<template>
  <div class="row pl-3 pr-3">
    <div class="col-md-3 p-1" v-for="restaurant in restaurants" :key="restaurant.id">
      <RestaurantCard :restaurant="restaurant"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RestaurantCard from './RestaurantCard.vue';

export default {
  name: 'RestaurantList',
  async created() {
    await this.listRestaurants();
  },
  components: {
    RestaurantCard,
  },
  computed: {
    ...mapGetters(['restaurants']),
  },
  methods: {
    ...mapActions(['listRestaurants']),
  },
};
</script>
