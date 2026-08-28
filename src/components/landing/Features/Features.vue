<script setup lang="ts">
import { onMounted, ref, type ComponentPublicInstance } from 'vue';

import { useI18n } from '@/i18n';

import AITerminal from './AITerminal.vue';
import CategorySelector from './CategorySelector.vue';
import ComponentMarquee from './ComponentMarquee.vue';
import StarCard from './StarCard.vue';
import VariantTabs from './VariantTabs.vue';

import './Features.css';

type CardKey = 'marquee' | 'orbit' | 'variants' | 'ai' | 'stars';

interface Card {
  key: CardKey;
  span: 7 | 5 | 4 | 3;
}

const { t } = useI18n();

const CARDS: Card[] = [
  { key: 'marquee', span: 7 },
  { key: 'orbit', span: 5 },
  { key: 'variants', span: 4 },
  { key: 'ai', span: 5 },
  { key: 'stars', span: 3 }
];

const visible = ref<boolean[]>(Array(CARDS.length).fill(false));

const cardEls = ref<(HTMLElement | null)[]>(Array(CARDS.length).fill(null));

function setCardRef(el: Element | ComponentPublicInstance | null, index: number) {
  cardEls.value[index] = el as HTMLElement | null;
}

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    visible.value = visible.value.map(() => true);
    return;
  }

  const io = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const i = cardEls.value.indexOf(entry.target as HTMLElement);

        if (i === -1) continue;

        visible.value[i] = true;

        io.unobserve(entry.target);
      }
    },
    {
      rootMargin: '-60px 0px'
    }
  );

  for (const el of cardEls.value) {
    if (el) {
      io.observe(el);
    }
  }
});
</script>

<template>
  <section class="ln-features-section">
    <div class="ln-features-inner">
      <h2 class="ln-features-title">{{ t('features.title') }}</h2>

      <div class="ln-features-grid">
        <div
          v-for="(card, i) in CARDS"
          :key="card.key"
          :ref="el => setCardRef(el, i)"
          :class="[
            'ln-features-card',
            `ln-features-card--span-${card.span}`,
            {
              'is-visible': visible[i]
            }
          ]"
          :style="{
            transitionDelay: `${i * 70}ms`
          }"
        >
          <div class="ln-features-card-visual">
            <ComponentMarquee v-if="card.key === 'marquee'" />

            <CategorySelector v-else-if="card.key === 'orbit'" />

            <VariantTabs v-else-if="card.key === 'variants'" />

            <AITerminal v-else-if="card.key === 'ai'" />

            <StarCard v-else-if="card.key === 'stars'" />
          </div>

          <div class="ln-features-card-body">
            <h3>
              {{ t(`features.cards.${card.key}.title`) }}
            </h3>

            <p>
              {{ t(`features.cards.${card.key}.desc`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
