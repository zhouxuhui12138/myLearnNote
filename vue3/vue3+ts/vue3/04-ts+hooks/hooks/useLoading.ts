import { ref } from "vue"
import axios from "axios"

function useLoading<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const finished = ref(false)

  axios.get(url).then(res => {
    loading.value = false
    finished.value = true
    result.value = res.data
  })

  return {
    loading,
    finished,
    result
  }
}

export default useLoading
