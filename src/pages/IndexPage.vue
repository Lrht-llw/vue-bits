<template>
  <div>
    <title>Vue Bits - Component Index</title>
    <ComponentList :list="componentMetadata" :title="t('list.index')" sorting="alphabetical" has-favorite-button />
  </div>
</template>

<script setup lang="ts">
import ComponentList from '@/components/common/ComponentList.vue';
import { componentMetadata } from '@/constants/Information';
import { useI18n } from '@/i18n';

const { t } = useI18n();
</script>
