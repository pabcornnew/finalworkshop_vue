<template>
  <v-col cols="4">
    <v-card dark variant="outlined">
      <v-card-title>Vuetify</v-card-title>
      <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          weight="200"
          height="200"
        />
      <v-card-text class="bg-surface-light pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
      </v-card-text>
      <v-card-actions>
        <v-btn class="btn-primary" @click="connectToBackend()">Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'cardProduct',

  data () {
    return {
      getData: []
    }
  },
  methods: {
    async connectToBackend () {
      try {
        const response = await axios.get('http://localhost:3000/products')
        this.getData = response.data
        console.log(this.getData)
      } catch (error) {
        console.error('There was an error!', error)
        this.message = 'Error connecting to backend'
      }
    }
  }
}
</script>
