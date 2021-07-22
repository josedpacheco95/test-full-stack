<template>
  <div>
    <b-card
      :title="restaurant.name"
      :img-src="restaurant.logoUrl"
      :img-alt="restaurant.name"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        <div class="d-flex flex-column">
        <span v-b-tooltip.hover :title="restaurant.description">
        {{restaurant.description ? restaurant.description.substring(0,30) + '...': ''}}
        </span>
        <span
          class="ml-auto"
          style="cursor:pointer; color:orange; font-weight:600;"
          @click="$router.push(`/restaurant/${restaurant.id}`)">
            Ver Mas...
          </span>
        </div>
      </b-card-text>

    </b-card>
</div>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: ['restaurant'],
};
</script>

<style lang="scss" scoped>
::v-deep .card-img, .card-img-top, .card-img-bottom {
    width: 100%;
    height: 125px;
}
::v-deep .card-title {
    margin-bottom: 0.5rem;
    font-weight: bold;
}
</style>
