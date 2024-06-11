<script setup lang="ts">
import { ref } from 'vue'
import './css/testComponent.css'
import type { State } from '../types/states'
import { load } from '../utils/load'

defineProps({
  text: { type: String, default: 'State' }
})
const state = ref<State>('idle')
const triggerLoad = () => load(state)
</script>

<template>
  <button @click="triggerLoad" data-testid="TestComponent">
    <span data-testid="span">{{ text }}: </span>
    <span data-testid="state">{{ state }}</span>
  </button>
</template>
