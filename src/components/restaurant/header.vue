<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      <img :src="logo ? logo: ''" alt="name" style="width:150px; height: 100px;"/>
      <div class="d-flex flex-column">
        <span style="font-size: 3rem;font-weight: bold;">
          {{name}}
        </span>
        <span v-if="description.length > 100"
          v-b-tooltip.hover
          :title="description"> {{description.substring(0,100)}} </span>
        <span v-else>{{description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantHeader',
  props: ['logo', 'name', 'description'],
};
</script>
