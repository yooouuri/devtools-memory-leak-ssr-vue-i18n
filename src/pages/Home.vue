<template>
  {{ t('hey') }}
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

console.log(globalThis)
</script>
