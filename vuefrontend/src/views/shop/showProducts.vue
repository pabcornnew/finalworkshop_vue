<template>
  <v-container>
    <v-container>
      <v-flex>
        <v-btn color="blue">Cart</v-btn>
      </v-flex>
    </v-container>
    <v-container class="grey" fluid>
      <v-row no-gutters>
        <v-col cols="12" sm="4" v-for="(item, index) in getData" :key="index">
          <cardP class="ma-2 pa-2" :name="item.product_name" :detail="item.product_detail" :price="item.price" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'

import cardP from '../../components/cardProduct.vue'

export default {
  name: 'showProduct',

  data () {
    return {
      getData: [],
      message: ''
    }
  },
  created () {
    this.connectToProducts()
  },
  methods: {
    async connectToProducts () {
      try {
        const response = await axios.get('http://localhost:3000/products')
        this.getData = response.data
        console.log(this.getData)
        this.message = 'data is connected'
        console.log(this.getData)
      } catch (error) {
        console.error('There was an error!', error)
        this.message = 'Error connecting to backend : ' + error
      }
    }
  },
  components: { cardP }
}
</script>
