<template>
  <div class="row">
    <div class="col">
      <p class="text-center">
        <button v-if="!isCurrentPage" class="btn btn-primary" @click.prevent="onLoadMore">Load more</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadMore',
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    pages () {
      return (this.total < 10) ? 1 : (Math.ceil(this.total / 10) - 1)
    },
    isCurrentPage () {
      return (this.pages === this.currentPage)
    }
  },
  methods: {
    onLoadMore () {
      this.currentPage += 1
      this.$emit('load-more', this.currentPage)
    }
  }
}
</script>