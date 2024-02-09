<script setup lang="ts">
import TextSection from '@/components/TextSection.vue'
// import BorderButton from '@/components/BorderButton.vue';
import CountdownTimer from '@/components/CountdownTimer.vue';
import { useRouter } from 'vue-router'
const router = useRouter();

const handleCountdownEnd = () => {
    console.log('Handling countdown end in parent component');
    router.push('/feedback');
};

</script>

<template>
    <TextSection title="Time left"/>
    <CountdownTimer :initialTime="5" :onCountdownEnd="handleCountdownEnd"/>
    <!-- <RouterLink to="/feedback"><BorderButton cta="End"/></RouterLink> -->
</template>
