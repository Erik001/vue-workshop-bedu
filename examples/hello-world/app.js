new Vue({
  el: '#app',
  data: {
    message: 'Hello world. Welcome to Vue.js',
    languages: [
      {name: 'Javascript'},
      {name: 'PHP'},
      {name: 'Go'},
      {name: 'Java'}
    ],
    showElement: true,
    inputValue: '',
    user: {
      firstName: '',
      lastName: ''
    },
    filter: ''
  },
  computed: {
    fullName: function () {
      return this.user.firstName + ' ' + this.user.lastName;
    },
    filterLanguages: function () {
      var filter = this.filter;
      return (this.filter == '') ? this.languages
      : this.languages.filter(function (language) {
        return language.name.toLowerCase() === filter.toLowerCase();
      });
    }
  },
  methods: {
    toggleElement: function () {
      this.showElement = !this.showElement;
    }
  } 
});
