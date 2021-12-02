<template>
  <h1>info</h1>

  firstName:
  <input type="text" v-model="person.firstName" />
  <br />
  lastName:
  <input type="text" v-model="person.lastName" />
  <br />
  <hr>
  <span>fullName: {{ person.fullName }}</span>
</template>

<script>
import { reactive, computed } from "vue"

export default {
  name: "Demo",
  props: ["msg"],
  setup() {
    const person = reactive({
      firstName: "",
      lastName: ""
    })

    person.fullName = computed(() => person.firstName + person.lastName)

    return { person }
  }
}
</script>
