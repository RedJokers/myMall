<template>
    <section>
        <div class="md-modal modal-msg md-modal-transition" :class="{'md-show':mdShow}">
            <div class="md-modal-inner">
                <div class="md-top">
                    <button class="md-close" @click="closeModal">Close</button>
                </div>
                <div class="md-content">
                    <div class="md-tips">
                        <slot name="message"></slot>
                    </div>
                    <div class="btn-wrap">
                        <slot name="btnGroup"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-overlay" @click="closeModal" v-if="mdShow"></div>
    </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['mdShow'],
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style>
  .md-tips {
    font-size: 22px;
    font-weight: 300;
    min-height: 50px;
  }
</style>
