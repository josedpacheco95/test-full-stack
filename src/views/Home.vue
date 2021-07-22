<template>
  <div class="home">
    <Header/>
  <div style="margin-right:20px; margin-left:20px;">
    <RestaurantList/>
  </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/home/Footer.vue';
import RestaurantList from '../components/home/RestaurantList.vue';
import Header from '../components/home/Header.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    RestaurantList,
    Header,
  },
};
</script>
