<template>
  <demo msg="你好" @hello="hello" />
</template>

<script>
import Demo from "./components/Demo.vue"
export default {
  name: "App",
  components: { Demo },
  setup() {
    function hello(val) {
      alert(val)
    }

    return {
      hello
    }
  }
}
</script>
