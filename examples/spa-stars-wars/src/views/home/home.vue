<template src="./home.html"></template>

<script>
import {getPeople} from '@/services/people'
export default {
  name: 'Home',
  mounted () {
    getPeople().then(response => {
      this.people = response.data.results
    }).catch(err => console.error(err))
  },
  data () {
    return {
      people: [],
      message: 'Welcome to home view'
    }
  }
}
</script>
