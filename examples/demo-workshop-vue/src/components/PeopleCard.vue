<template>
  <div class="card mb-2">
    <div class="card-body">
      <h1>{{person.name}}</h1>
      <p>{{person.birth_year}}</p>
      <p>{{person.height}}</p>
      <hr>
      <button
        class="btn btn-primary"
        @click="goToProfile">View profile</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PeopleCard',
  props: ['person'],
  methods: {
    goToProfile () {
      let personId = this.person.url.split('/')[5]
      this.$router.push({
        name: 'PersonView',
        params: {
          id: personId
        }
      })
    }
  }
}
</script>
