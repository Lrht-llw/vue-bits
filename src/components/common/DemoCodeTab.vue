<script setup lang="ts">
import { useI18n } from '@/i18n';
import CliInstall from './CliInstall.vue';
import CodeBlock from './CodeBlock.vue';

const { t } = useI18n();

type Props = {
  slug: string;
  usage: string;
  source: string;
  utility?: string;
};

defineProps<Props>();
</script>

<template>
  <CliInstall :slug="slug" />
  <h3 class="demo-title-extra">{{ t('code.usage') }}</h3>
  <CodeBlock :code="usage" language="html" />
  <h3 class="demo-title-extra">{{ t('code.source') }}</h3>
  <CodeBlock :code="source" language="html" />
  <template v-if="utility">
    <h3 class="demo-title-extra">{{ t('code.utility') }}</h3>
    <CodeBlock :code="utility" language="ts" />
  </template>
</template>
