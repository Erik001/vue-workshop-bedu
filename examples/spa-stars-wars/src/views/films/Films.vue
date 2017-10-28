<template>
  <div class="sw-content sw-loading">
    <div class="container">
      <h3>Films</h3>
      <div class="row">
        <div class="col-4" v-for="film in films" :key="film.episode_id">
          <div class="card mb-2">
            <div class="card-body">
              <h4 class="card-title">{{film.title}}</h4>
              <h6 class="card-subtitle text-muted">{{film.director}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getFilms} from '@/services/films'
export default {
  name: 'Films',
  created () {
    this.getFilms()
  },
  data () {
    return {
      films: []
    }
  },
  methods: {
    getFilms () {
      getFilms().then((response) => {
        this.films = response.data.results
      }).catch(err => console.error(err))
    }
  }
}
</script>