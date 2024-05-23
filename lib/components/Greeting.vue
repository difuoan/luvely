<script setup lang="ts">
import './greeting.css';
import { createGreeting } from '../utils/createGreeting.ts'

defineProps<{ name?: string }>()
</script>

<template>
    <h1>{{ createGreeting(name) }}</h1>
</template>