<template src="./home.html"></template>

<script>
import _ from 'lodash'
import LoadMore from '@/components/load-more'
import PersonCard from '@/components/person-card'
import {getPeople} from '@/services/people'
export default {
  name: 'Home',
  mounted () {
    this.isLoading = true
    this.getPeople()
  },
  data () {
    return {
      people: [],
      message: 'Welcome to home view',
      isLoading: false,
      search: {
        person: ''
      },
      total: 0
    }
  },
  computed: {
    contentClassObject () {
      return {
        'sw-loading': this.isLoading
      }
    },
    filteredPeople () {
      return _.filter(this.people, (person) => {
        return _.includes(person.name.toLowerCase(), this.search.person.toLowerCase())
      })
    }
  },
  methods: {
    getPeople (page = 1) {
      getPeople(page).then(response => {
        this.people = [...response.data.results, ...this.people]
        this.total = response.data.count
        this.isLoading = false
      }).catch(err => {
        console.error(err)
        this.isLoading = false
      })
    },
    onLoadMore (page) {
      this.getPeople(page)
    }
  },
  components: {
    LoadMore,
    PersonCard
  }
}
</script>
