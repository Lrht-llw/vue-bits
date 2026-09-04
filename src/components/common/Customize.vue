<script setup lang="ts">
import { useI18n } from '@/i18n';

const { t } = useI18n();
</script>

<template>
  <div class="preview-options">
    <h2 class="demo-title-extra">{{ t('customize.title') }}</h2>
    <slot />
  </div>
</template>
