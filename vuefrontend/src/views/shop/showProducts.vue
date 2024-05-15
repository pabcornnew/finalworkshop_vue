<template>
  <v-row dense justify="center">
    <div v-for="(item, index) in getData" :key="index">
      <cardP :name="item.product_name" :detail="item.detail" :price="item.price" />
    </div>
  </v-row>
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
