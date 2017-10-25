<template src="./home.html"></template>

<script>
import LoadMore from '@/components/load-more'
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
    LoadMore
  }
}
</script>
