<script>
import {getPlanets} from '@/services/planets'
export default {
  name: 'PlanetsView',
  render (h) {
    let planets = this.planets.map((planet) => {
      return <div class="col-4">
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">{planet.name}</h4>
            <h6 class="card-subtitle text-muted">{planet.terrain}</h6>
          </div>
        </div>
      </div>
    })

    return (
    <div class="sw-content sw-loading">
      <div class="container">
        <h3>Planets</h3>
        <div class="row">
          {planets}
        </div>
      </div>
    </div>
    )
  },
  created () {
    this.getPlanets()
  },
  data () {
    return {
      planets: []
    }
  },
  methods: {
    getPlanets () {
      getPlanets().then((response) => {
        this.planets = response.data.results
      }).catch(err => console.error(err))
    }
  }
}
</script>