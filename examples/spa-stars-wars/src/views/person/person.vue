<template>
  <div class="sw-content sw-loading">
    <div class="container">
      <h3>Profile</h3>
      <div class="row">
        <div class="col-2">
          <div class="card">
            <div v-if="person" class="card-body">
              <img v-if="person.gender === 'female'" src="../../assets/female.png" style="width: 100%">
              <img v-else src="../../assets/male.png" style="width: 100%">
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="card">
            <div v-if="person" class="card-body">
              <h3>Basic information</h3>
              <ul class="list-group">
                <li class="list-group-item active">Name: {{person.name}}</li>
                <li class="list-group-item ">Birth year: {{person.birth_year}}</li>
              </ul>
              <h3 class="mt-4">Details</h3>
              <ul class="list-group">
                <li class="list-group-item">Gender: {{person.gender}}</li>
                <li class="list-group-item">Hair color: {{person.hair_color}}</li>
                <li class="list-group-item">Height: {{person.height}}</li>
                <li class="list-group-item">Skin color: {{person.skin_color}}</li>
                <li class="list-group-item">Mass: {{person.mass}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getPerson} from '@/services/people'
export default {
  name: 'Person',
  data () {
    return {
      person: null
    }
  },
  mounted () {
    getPerson(this.$route.params.id).then((response) => {
      this.person = response.data
    }).catch(err => console.error(err))
  }
}
</script>
