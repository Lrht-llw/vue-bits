<template>
  <section class="prop-table-section">
    <h2 class="demo-title-extra">{{ t('props.title') }}</h2>

    <!-- Desktop table -->
    <div class="prop-table-wrap">
      <table class="prop-table">
        <thead>
          <tr>
            <th>{{ t('props.name') }}</th>
            <th>{{ t('props.type') }}</th>
            <th>{{ t('props.default') }}</th>
            <th>{{ t('props.description') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row.name">
            <td>
              <code class="prop-code">{{ row.name }}</code>
            </td>
            <td>
              <span class="prop-type">{{ row.type }}</span>
            </td>
            <td>
              <code class="prop-code">{{ row.default?.length ? row.default : '—' }}</code>
            </td>
            <td>{{ row.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="prop-cards">
      <div class="prop-card" v-for="row in data" :key="row.name">
        <div class="prop-card-header">
          <code class="prop-code">{{ row.name }}</code>
          <span class="prop-card-type">{{ row.type }}</span>
        </div>
        <p class="prop-card-desc">{{ row.description }}</p>
        <div class="prop-card-default">
          <span class="prop-card-label">{{ t('props.default') }}:</span>
          <code class="prop-code">{{ row.default?.length ? row.default : '—' }}</code>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n';

export type PropRow = {
  name: string;
  type: string;
  default: string;
  description: string;
};

const { t } = useI18n();

defineProps<{ data: PropRow[] }>();
</script>
