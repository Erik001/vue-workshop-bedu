<template>
  <div class="col-4">
    <div class="card sw-card text-center">
      <div class="card-body">
        <div class="sw-avatar align-middle">
          <img v-if="person.gender === 'female'" src="../assets/female.png" width="128">
          <img v-else src="../assets/male.png" width="128">
        </div>
        <h4 class="card-title">{{person.name}}</h4>
        <h6 class="card-subtitle text-muted">{{person.birth_year}}</h6>
        <p class="card-text"></p>
        <hr>
        <div class="text-center">
          <button class="btn btn-dark" @click.prevent="goToProfile()">View profile</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToProfile () {
      let personId = this.person.url.split('/')[5]
      this.$router.push({name: 'Person', params: { id: personId }})
    }
  }
}
</script>