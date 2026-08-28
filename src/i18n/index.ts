import { ref } from 'vue';

export type Locale = 'en' | 'zh';

const STORAGE_KEY = 'vue-bits-locale';

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'zh') return saved;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('zh')) return 'zh';
  return 'en';
}

const locale = ref<Locale>(detectLocale());

type Params = Record<string, string | number>;
type Message = string | ((params?: Params) => string);

const en: Record<string, Message> = {
  // Navbar
  'nav.docs': 'Docs',
  'nav.search': 'Search',
  'nav.searchPlaceholder': 'Search components, categories, or keywords...',
  'nav.favorites': 'Favorites',
  'nav.preferences': 'Preferences',
  'nav.menu': 'Menu',
  'nav.home': 'Vue Bits home',

  // Hero
  'hero.newComponent': 'New Component',
  'hero.headline1': 'Vue components for',
  'hero.headline2': 'creative developers',
  'hero.description':
    'Highly customizable animated components & backgrounds that drop into your project and instantly make it stand out',
  'hero.browse': 'Browse Components',
  'hero.dragHint': 'Drag or click values to edit',
  'hero.reset': 'Reset to defaults',

  // Features
  'features.title': "What's inside",
  'features.cards.marquee.title': '130+ Components',
  'features.cards.marquee.desc':
    "Backgrounds, text effects, animations, UI patterns. The stuff you'd build from scratch, already done.",
  'features.cards.orbit.title': 'Well Organized',
  'features.cards.orbit.desc': "Four clear categories so you're not scrolling through a wall of unrelated stuff.",
  'features.cards.variants.title': 'TypeScript + Tailwind',
  'features.cards.variants.desc':
    'Every component ships as a typed Vue 3 component styled with Tailwind. One stack, done right.',
  'features.cards.ai.title': 'AI-Ready',
  'features.cards.ai.desc': 'Works great with Cursor, Copilot, and v0. Describe what you need, drop it in, ship.',
  'features.cards.stars.title': 'Growing Fast',
  'features.cards.stars.desc': "Vue's newest creative component library. Star us on GitHub to follow along.",

  // Live demo
  'liveDemo.title': 'See them in action',

  // Quick start
  'quickStart.title': 'Get started in seconds',
  'quickStart.copy': 'Copy command',
  'quickStart.hintUse': 'Use',
  'quickStart.hintOr': 'or',
  'quickStart.hintTail': '— components land in your codebase, ready to use, instantly.',

  // CTA
  'cta.headline': 'Stop building from scratch.',
  'cta.sub': 'Beautiful, animated Vue components you can drop into any project. Open source. Always free.',
  'cta.browse': 'Browse Components',
  'cta.star': 'Star on GitHub',

  // Footer
  'footer.tagline': 'Animated UI components for Vue.',
  'footer.product': 'Product',
  'footer.docs': 'Docs',
  'footer.community': 'Community',
  'footer.attributionPrefix': 'A Vue port of',
  'footer.attributionBy': 'by',
  'footer.copyright': '© {year} Vue Bits',

  // Categories
  'category.get-started': 'Get Started',
  'category.text-animations': 'Text Animations',
  'category.animations': 'Animations',
  'category.components': 'Components',
  'category.backgrounds': 'Backgrounds',

  // Sidebar
  'sidebar.new': 'New',
  'sidebar.updated': 'Updated',
  'sidebar.navLabel': 'Docs navigation',

  // Component list / favorites
  'list.allComponents': 'All Components',
  'list.search': 'Search...',
  'list.category': 'Category',
  'list.clearFilters': 'Clear Filters',
  'list.noResults': 'No results...',
  'list.tryAdjust': 'Try adjusting your filters',
  'list.nothingHere': 'Nothing here yet...',
  'list.emptyDesc': 'Tap the heart on any component to save it',
  'list.browse': 'Browse Components',
  'list.new': 'New',
  'list.addToFavorites': 'Add to favorites',
  'list.removeFromFavorites': 'Remove from favorites',
  'list.favorites': 'Favorites',
  'list.index': 'Index',
  'list.addedToast': 'Added <{component} /> to favorites',
  'list.removedToast': 'Removed <{component} /> from favorites',

  // Search dialog
  'search.noResults': 'No results found for',
  'search.inCategory': 'in {category}',

  // CLI install
  'cli.install': 'Install',
  'cli.manual': 'Manual',
  'cli.manualTitle': 'Install dependencies manually',
  'cli.noDeps': 'No external dependencies',
  'cli.copy': 'Copy installation command',
  'cli.hintManual': 'Install dependencies manually, then copy the usage and component source below.',
  'cli.hintRegistry': 'Pulls the component from {url} and copies it into your project.',
  'cli.hintRegistryPrefix': 'Pulls the component from',
  'cli.hintRegistrySuffix': 'and copies it into your project.',

  // Demo code tab
  'code.usage': 'Usage',
  'code.source': 'Component source',
  'code.utility': 'Utility source',

  // Tabs layout
  'tabs.preview': 'Preview',
  'tabs.code': 'Code',
  'tabs.copyPrompt': 'Copy Prompt',
  'tabs.copied': 'Copied!',
  'tabs.reset': 'Reset',
  'tabs.copiedSummary': 'Copied',
  'tabs.copiedDetail': 'Prompt copied to clipboard',

  // Prop table
  'props.title': 'Props',
  'props.name': 'Name',
  'props.type': 'Type',
  'props.default': 'Default',
  'props.description': 'Description',

  // Customize
  'customize.title': 'Customize',

  // Dependencies
  'dependencies.title': 'Dependencies',

  // Contribution
  'contribution.heading': 'Help improve this component',
  'contribution.subtext': 'Found a bug or have an idea? Let us know on GitHub.',
  'contribution.report': 'Report an issue',
  'contribution.request': 'Request a feature'
};

const zh: Record<string, Message> = {
  'nav.docs': '文档',
  'nav.search': '搜索',
  'nav.searchPlaceholder': '搜索组件、分类或关键词...',
  'nav.favorites': '收藏',
  'nav.preferences': '偏好设置',
  'nav.menu': '菜单',
  'nav.home': 'Vue Bits 首页',

  'hero.newComponent': '新组件',
  'hero.headline1': '为创意开发者',
  'hero.headline2': '打造的 Vue 组件',
  'hero.description': '高度可定制的动画组件与背景，接入项目即可瞬间脱颖而出',
  'hero.browse': '浏览组件',
  'hero.dragHint': '拖拽或点击数值进行编辑',
  'hero.reset': '重置为默认',

  'features.title': '内置能力',
  'features.cards.marquee.title': '130+ 个组件',
  'features.cards.marquee.desc': '背景、文字特效、动画、UI 模式。你本想从零构建的东西，已经为你做好。',
  'features.cards.orbit.title': '结构清晰',
  'features.cards.orbit.desc': '四大清晰分类，让你不必在一堆无关内容里翻找。',
  'features.cards.variants.title': 'TypeScript + Tailwind',
  'features.cards.variants.desc': '每个组件都是类型化的 Vue 3 组件，并使用 Tailwind 编写样式。一套技术栈，做到位。',
  'features.cards.ai.title': '适配 AI 开发',
  'features.cards.ai.desc': '与 Cursor、Copilot 和 v0 完美协作。描述你的需求，直接拿来用，即可上线。',
  'features.cards.stars.title': '快速增长',
  'features.cards.stars.desc': 'Vue 最新潮的创意组件库。在 GitHub 上 Star 我们以持续关注。',

  'liveDemo.title': '效果预览',

  'quickStart.title': '快速开始',
  'quickStart.copy': '复制命令',
  'quickStart.hintUse': '使用',
  'quickStart.hintOr': '或',
  'quickStart.hintTail': '—— 组件直接进入你的代码库，即刻可用。',

  'cta.headline': '不要再从零开始构建。',
  'cta.sub': '精美、动画化的 Vue 组件，可接入任何项目。开源，永久免费。',
  'cta.browse': '浏览组件',
  'cta.star': '在 GitHub 上 Star',

  'footer.tagline': 'Vue 动画 UI 组件。',
  'footer.product': '产品',
  'footer.docs': '文档',
  'footer.community': '社区',
  'footer.attributionPrefix': '一个 Vue 移植版，源自',
  'footer.attributionBy': '，作者',
  'footer.copyright': '© {year} Vue Bits',

  'category.get-started': '开始使用',
  'category.text-animations': '文字动画',
  'category.animations': '动画',
  'category.components': '组件',
  'category.backgrounds': '背景',

  'sidebar.new': '新',
  'sidebar.updated': '已更新',
  'sidebar.navLabel': '文档导航',

  'list.allComponents': '全部组件',
  'list.search': '搜索...',
  'list.category': '分类',
  'list.clearFilters': '清除筛选',
  'list.noResults': '无结果...',
  'list.tryAdjust': '尝试调整筛选条件',
  'list.nothingHere': '这里还没有内容...',
  'list.emptyDesc': '点击任意组件上的心形图标即可收藏',
  'list.browse': '浏览组件',
  'list.new': '新',
  'list.addToFavorites': '添加到收藏',
  'list.removeFromFavorites': '从收藏移除',
  'list.favorites': '收藏',
  'list.index': '索引',
  'list.addedToast': '已将 <{component} /> 添加到收藏',
  'list.removedToast': '已将 <{component} /> 从收藏移除',

  'search.noResults': '未找到与以下关键词相关的结果',
  'search.inCategory': '位于 {category}',

  'cli.install': '安装',
  'cli.manual': '手动',
  'cli.manualTitle': '手动安装依赖',
  'cli.noDeps': '无外部依赖',
  'cli.copy': '复制安装命令',
  'cli.hintManual': '手动安装依赖，然后复制下方的用法和组件源码。',
  'cli.hintRegistry': '从 {url} 拉取组件并复制到你的项目中。',
  'cli.hintRegistryPrefix': '从',
  'cli.hintRegistrySuffix': '拉取组件并复制到你的项目中。',

  'code.usage': '用法',
  'code.source': '组件源码',
  'code.utility': '工具源码',

  'tabs.preview': '预览',
  'tabs.code': '代码',
  'tabs.copyPrompt': '复制提示词',
  'tabs.copied': '已复制！',
  'tabs.reset': '重置',
  'tabs.copiedSummary': '已复制',
  'tabs.copiedDetail': '提示词已复制到剪贴板',

  'props.title': '属性',
  'props.name': '名称',
  'props.type': '类型',
  'props.default': '默认值',
  'props.description': '描述',

  'customize.title': '自定义',

  'dependencies.title': '依赖',

  'contribution.heading': '帮助改进这个组件',
  'contribution.subtext': '发现 bug 或有想法？在 GitHub 上告诉我们。',
  'contribution.report': '报告问题',
  'contribution.request': '请求新功能'
};

const messages: Record<Locale, Record<string, Message>> = { en, zh };

function interpolate(template: string, params?: Params): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = params[key];
    return value === undefined ? match : String(value);
  });
}

export function t(key: string, params?: Params): string {
  const msg = messages[locale.value][key] ?? messages.en[key];
  if (msg == null) return key;
  if (typeof msg === 'function') return msg(params);
  return interpolate(msg, params);
}

export function setLocale(next: Locale): void {
  locale.value = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  }
}

export function useI18n() {
  return { locale, t, setLocale };
}

if (typeof document !== 'undefined') {
  document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en';
}
