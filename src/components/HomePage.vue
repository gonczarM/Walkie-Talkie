<template v-slot:user="{ user }">
    <div>
        <h3>Home</h3>
        <UserPage >
        
            <div v-if="user">
                Logged-in as {{ user.uid }}
            </div>
            <loginPage v-else/>
        </UserPage>
    </div>
</template>

<script>

import LoginPage from './LoginPage'
import UserPage from './UserPage'
export default {
    components: {
        LoginPage,
        UserPage,
    }
}
</script>