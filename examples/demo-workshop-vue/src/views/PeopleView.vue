<template>
  <section class="sw-page-people">
    <div class="container mt-5">
      <h2>Star Wars People</h2>
      <div class="mt-4">
        <people-card
          v-for="person in people"
          :key="person.name"
          v-bind:person="person"></people-card>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import PeopleCard from '@/components/PeopleCard'
export default {
  name: 'PeopleView',
  components: {
    PeopleCard
  },
  data () {
    return {
      message: 'Welcome to PeopleView',
      people: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get(`https://swapi.co/api/people`).then((response) => {
        this.people = response.data.results
      }).catch(err => console.error(err))
    }
  }
}
</script>
<style></style>