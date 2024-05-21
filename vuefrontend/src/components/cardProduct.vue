<template>
    <v-card dark variant="outlined">
      <v-card-title>{{ name }}</v-card-title>
      <v-card-subtitle>{{ price }} ฿</v-card-subtitle>
      <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          weight="200"
          height="200"
        />
        <v-card-text>{{ detail }}</v-card-text>
      <v-card-actions>
        <RouterLink :to="{ name: ''}"></RouterLink>
        <v-btn class="btn-primary">Buy</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>

export default {
  name: 'cardProduct',
  props: [
    'name',
    'price',
    'detail'
  ],

  data () {
    return {
      //
    }
  },
  methods: {
    //
  }
}
</script>
