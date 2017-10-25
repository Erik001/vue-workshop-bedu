<template src="./home.html"></template>

<script>
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
      currentPage: 1
    }
  },
  computed: {
    contentClassObject () {
      return {
        'sw-loading': this.isLoading
      }
    }
  },
  methods: {
    getPeople (page = 1) {
      getPeople(page).then(response => {
        this.people = response.data.results
        this.isLoading = false
      }).catch(err => {
        console.error(err)
        this.isLoading = false
      })
    }
  }
}
</script>
