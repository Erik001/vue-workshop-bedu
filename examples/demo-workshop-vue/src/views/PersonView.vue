<template>
  <section class="sw-person-view">
    <div v-if="loading" class="mt-3 mb-3 text-center">
      <i class="sw-loader fa fa-cog fa-spin"></i>
    </div>
    <div v-else>
      <div class="container" v-if="person">
        <h1 class="mt-3">Person view</h1>
        <div class="row">
          <div class="col-6">
            <p>Name</p>
            <p>{{person.name}}</p>
          </div>
          <div class="col-6">
            <p>Detail</p>
            <p>Hair color: {{person.hair_color}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'PersonView',
  created () {
    this.getData()
  },
  data () {
    return {
      person: null,
      loading: true
    }
  },
  methods: {
    getData () {
      this.loading = true
      axios.get(`https://swapi.co/api/people/${this.$route.params.id}`).then((response) => {
        this.person = response.data
        this.loading = false
      }).catch(err => {
        this.loading = false
        console.err(err)
      })
    }
  }
}
</script>
<style>
  .sw-loader {
    font-size: 40px;
  }
</style>