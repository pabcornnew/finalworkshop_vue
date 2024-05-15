<template>
  <v-col cols="auto">
    <v-card dark variant="outlined">
      <v-card-title>{{ name }}</v-card-title>
      <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          weight="200"
          height="200"
        />
      <v-card-text class="bg-surface-light pt-4">
        {{ detail }}
      </v-card-text>
      <v-card-text>{{ price }} ฿</v-card-text>
      <v-card-actions>
        <v-btn class="btn-primary">Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
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
