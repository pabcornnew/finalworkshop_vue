<template>
  <div>
    <h3>Product</h3>
  </div>
</template>

<script>
export default {
  name: 'thisproduct',
  data () {
    return {
      id: this.$route.params.id,
      apiProducts: [],
      postdata: {
        amount: 0
      },
      postdefault: {
        amount: 0
      }
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    async getProduct () {
      try {
        const response = await this.axios.get(`http://localhost:3000/products/${this.id}`)
        console.log(response.data)
        alert('respone is send in console')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
