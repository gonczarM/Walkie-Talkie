<template>
  <aside class="section">
    <h3>Sign in Seductivly</h3>
    <button class="button" @click="auth.signInAnonymously()">Sign In</button>
    </aside>
</template>

<script>
import { auth } from '../firebase';
console.log(auth.signInAnonymously)
export default {
  data() {
    return {
      auth,
    }
  },
}
</script>