// Craft of Exile 한글화 확장프로그램
// 번역 데이터: https://github.com/mvp134/poe_trans_kr

const TRANS_URL = 'https://raw.githubusercontent.com/mvp134/poe_trans_kr/main/translations.json';
const CACHE_KEY = 'coe_kr_trans_v8';
const CACHE_TTL = 24 * 60 * 60 * 1000;

// ── 태그 단어 번역 (모드 태그 조합용) ─────────────────────────────────────────
const TAG_DICT = {
  'Energy Shield': '에너지 보호막',
  'Evasion': '회피',
  'Armour': '방어도',
  'Ward': '룬 수호',
  'Defences': '방어',
  'Life': '생명력',
  'Mana': '마나',
  'Damage': '피해',
  'Physical': '물리',
  'Elemental': '원소',
  'Elemental Resistance': '원소 저항',
  'Lightning': '번개',
  'Lightning Resistance': '번개 저항',
  'Fire': '화염',
  'Fire Resistance': '화염 저항',
  'Cold': '냉기',
  'Cold Resistance': '냉기 저항',
  'Chaos': '카오스',
  'Chaos Resistance': '카오스 저항',
  'Ailment': '상태이상',
  'Attack': '공격',
  'Caster': '캐스터',
  'Speed': '속도',
  'Critical': '치명타',
  'Attribute': '능력치',
  'Resistance': '저항',
  'Movement': '이동',
  'Minion': '소환수',
  'Curse': '저주',
  'Aura': '오라',
  'Totem': '토템',
  'Projectile': '투사체',
  'Area': '범위',
  'Duration': '지속시간',
  'Bleed': '출혈',
  'Poison': '독',
  'Ignite': '점화',
  'Freeze': '빙결',
  'Shock': '감전',
  'Chill': '냉각',
};

// ── UI 고정 번역 ───────────────────────────────────────────────────────────────
const UI_DICT = {

  // ── 대문자 스탯 레이블 ──
  'EVASION': '회피', 'ENERGY SHIELD': '에너지 보호막',
  'ARMOUR': '방어도', 'WARD': '룬 수호',
  'QUALITY': '퀄리티', 'LIFE': '생명력', 'MANA': '마나',


  // ── 개별 태그 단어 (span 노드로 쪼개져서 오는 경우) ──
  'Energy Shield': '에너지 보호막',
  'Evasion': '회피',
  'Armour': '방어도',
  'Life': '생명력',
  'Mana': '마나',
  'Physical': '물리',
  'Elemental': '원소',
  'Elemental Resistance': '원소 저항',
  'Lightning': '번개',
  'Lightning Resistance': '번개 저항',
  'Fire': '화염',
  'Fire Resistance': '화염 저항',
  'Cold': '냉기',
  'Cold Resistance': '냉기 저항',
  'Chaos': '카오스',
  'Chaos Resistance': '카오스 저항',
  'Damage': '피해',
  'Movement': '이동',
  'Minion': '소환수',
  'Curse': '저주',
  'Aura': '오라',
  'Totem': '토템',
  'Projectile': '투사체',
  'Area': '범위',
  'Duration': '지속시간',
  'Bleed': '출혈',
  'Poison': '독',
  'Ignite': '점화',
  'Freeze': '빙결',
  'Shock': '감전',
  'Chill': '냉각',

  // ── 네비게이션 탭 ──
  'Body Armours': '갑옷', 'Helmets': '투구',
  'Offhands': '보조 장비', 'Offhand': '보조 장비',
  'One-Handed Weapons': '한손 무기', 'One-Handed Weapon': '한손 무기',
  'Two-Handed Weapons': '양손 무기', 'Two-Handed Weapon': '양손 무기',
  'Tablets': '석판', 'Tablet': '석판',
  'Amulets': '부적', 'Rings': '반지', 'Belts': '허리띠',
  'Flasks': '플라스크', 'Jewels': '주얼', 'Jewel': '주얼',
  'Maps': '지도', 'Waystones': '경로석', 'Waystone': '경로석',
  'Weapons': '무기', 'Armours': '방어구', 'Accessories': '장신구',
  'Emerald': '에메랄드', 'Ward': '룬 수호',

  // ── 베이스 선택 UI ──
  'Choose a base': '베이스 선택',
  'Select item level': '아이템 레벨 선택',
  'Set item quality': '아이템 퀄리티 설정',
  'Set item sockets': '홈 설정',
  'Create new item': '새 아이템 추가',

  // ── 아이템 패널 ──
  'CRAFTING PROJECT': '제작 프로젝트', 'Crafting project': '제작 프로젝트',
  'ITEM LEVEL': '아이템 레벨', 'Item Level': '아이템 레벨',
  'REQUIRES LEVEL': '요구 레벨', 'Requires Level': '요구 레벨',
  'CRAFT': '제작',
  'Prefix modifier': '접두어 속성', 'Prefix Modifier': '접두어 속성',
  'Suffix modifier': '접미어 속성', 'Suffix Modifier': '접미어 속성',
  'Tier': '티어',
  'Armour, Defences': '방어도, 방어',
  'Life, Mana': '생명력, 마나',
  'Attribute': '능력치', 'Attributes': '능력치',
  'Caster': '캐스터', 'Attack': '공격',
  'Ailment': '상태이상', 'Speed': '속도',
  'Critical': '치명타', 'Resistance': '저항',
  'Defences': '방어',

  // ── 갑옷 (속성별) ──
  'Body Armour (DEX)': '갑옷 (민첩)', 'Body Armour (DEX/INT)': '갑옷 (민첩/지능)',
  'Body Armour (INT)': '갑옷 (지능)', 'Body Armour (STR)': '갑옷 (힘)',
  'Body Armour (STR/DEX)': '갑옷 (힘/민첩)', 'Body Armour (STR/INT)': '갑옷 (힘/지능)',
  'Helmet (DEX)': '투구 (민첩)', 'Helmet (DEX/INT)': '투구 (민첩/지능)',
  'Helmet (INT)': '투구 (지능)', 'Helmet (STR)': '투구 (힘)',
  'Helmet (STR/DEX)': '투구 (힘/민첩)', 'Helmet (STR/INT)': '투구 (힘/지능)',
  'Gloves (DEX)': '장갑 (민첩)', 'Gloves (DEX/INT)': '장갑 (민첩/지능)',
  'Gloves (INT)': '장갑 (지능)', 'Gloves (STR)': '장갑 (힘)',
  'Gloves (STR/DEX)': '장갑 (힘/민첩)', 'Gloves (STR/INT)': '장갑 (힘/지능)',
  'Boots (DEX)': '장화 (민첩)', 'Boots (DEX/INT)': '장화 (민첩/지능)',
  'Boots (INT)': '장화 (지능)', 'Boots (STR)': '장화 (힘)',
  'Boots (STR/DEX)': '장화 (힘/민첩)', 'Boots (STR/INT)': '장화 (힘/지능)',
  'Shield (DEX)': '방패 (민첩)', 'Shield (INT)': '방패 (지능)',
  'Shield (STR)': '방패 (힘)', 'Shield (STR/DEX)': '방패 (힘/민첩)',
  'Shield (STR/INT)': '방패 (힘/지능)', 'Shield (DEX/INT)': '방패 (민첩/지능)',

  // ── 무기 ──
  'One Hand Axe': '한손 도끼', 'One Hand Mace': '한손 철퇴',
  'One Hand Sword': '한손 검', 'Claw': '클로', 'Dagger': '단검',
  'Sceptre': '셉터', 'Flail': '도리깨',
  'Chaos Wand': '혼돈 완드', 'Fire Wand': '화염 완드',
  'Ice Wand': '냉기 완드', 'Lightning Wand': '번개 완드', 'Physical Wand': '물리 완드',
  'Two Hand Axe': '양손 도끼', 'Two Hand Mace': '양손 철퇴',
  'Two Hand Sword': '양손 검', 'Bow': '활', 'Crossbow': '석궁',
  'Quarterstaff': '지팡이창', 'Spear': '창', 'Staff': '스태프',

  // ── 메뉴 ──
  'Calculator': '계산기', 'Simulator': '시뮬레이터', 'Emulator': '에뮬레이터',
  'How to use': '사용 방법', 'Weightings': '가중치',
  'Changelog': '변경 사항', 'About': '정보',

  // ── 아이템 조작 ──
  'Import item': '아이템 가져오기', 'Reset': '초기화',
  'Advanced': '고급', 'Options': '옵션', 'Fractured': '균열',
  'Annul bad mod': '나쁜 속성 제거', 'RAW Export': 'RAW 내보내기',
  'Share link': '공유 링크', 'ILvl': '아이템 레벨',

  // ── 모드풀 UI ──
  'BASE MODPOOL': '기본 모드풀',
  'PREFIXES': '접두어', 'SUFFIXES': '접미어',
  'IMPLICITS': '고정 속성', 'DESECRATED': '훼손',
  'Search for an affix': '접사 검색',

  // ── 필터/시뮬 ──
  'Open filters': '필터 열기', 'Close filters': '필터 닫기',
  'Close all groups': '모든 그룹 닫기', 'Open all groups': '모든 그룹 열기',
  'Mass Simulation': '대량 시뮬레이션',
  'Start real-time simulation': '실시간 시뮬레이션 시작',
  'Continue simulation': '시뮬레이션 계속',
  'Stop simulation': '시뮬레이션 중지',
  'Run fixed simulation': '고정 시뮬레이션 실행',
  '# of items': '아이템 수',
  'Simulation is not available for this method of crafting': '이 제작 방식에서는 시뮬레이션을 사용할 수 없습니다',

  // ── 우측 패널 UI ──
  'HISTORY': '기록', 'History': '기록',
  'EXPORT': '내보내기', 'Export': '내보내기',
  'SPENDING': '소비', 'Spending': '소비',
  'STARTING SETUP': '시작 설정', 'Starting Setup': '시작 설정',
  'STARTING S': '시작 설정',

  // ── 모드풀 복합 패턴 (translations.json 미포함) ──
  '#% increased Evasion Rating, +# to Evasion Rating': '회피 #% 증가, 회피 +#',
  '#% increased Evasion Rating, +# to maximum Life': '회피 #% 증가, 생명력 최대치 +#',
  '#% increased Evasion and Energy Shield, +# to maximum Life': '회피 및 에너지 보호막 #% 증가, 생명력 최대치 +#',
  '#% increased Evasion and Energy Shield, +# to Evasion Rating, +# to maximum Energy Shield': '회피 및 에너지 보호막 #% 증가, 회피 +#, 에너지 보호막 최대치 +#',
  '#% of Physical Damage from Hits taken as Chaos Damage': '피격 시 물리 피해의 #%를 카오스 피해로 받음',
  'Allocates a random Notable Passive Skill': '무작위 주요 패시브 스킬 할당',
  'Bears the Mark of the Abyssal Lord': '심연의 군주의 징표 보유',
  'Mark of the Abyssal Lord': '심연의 군주의 징표',

  // ── 안내/기타 ──
  'Special rules': '특수 규칙', 'Diagnostics V2': '진단 V2',
  'There are no bases or items matching this search term.': '검색어와 일치하는 베이스 아이템이 없습니다.',
  'There are no affixes matching this search term.': '검색어와 일치하는 접사가 없습니다.',
  'donate': '후원', 'Learn how to craft': '제작 방법 배우기',
  'Latest Changes': '최근 변경사항', 'Disclaimer': '면책 조항',

  // ── POE2 제작 용어 ──
  'Prefix': '접두어', 'Suffix': '접미어',
  'Modifier': '속성', 'Modifiers': '속성',
  'Rune': '룬', 'Omen': '징조', 'Essence': '에센스',
  'Exalted Orb': '엑잘티드 오브',
  'Chaos Orb': '혼돈의 오브', 'Orb of Alchemy': '연금술 오브',
  'Regal Orb': '제왕의 오브', 'Orb of Annulment': '소멸의 오브',
  'Divine Orb': '신성한 오브',
  'Normal': '일반', 'Magic': '마법', 'Rare': '희귀',
  'Unique': '고유', 'Corrupted': '부패', 'Mirrored': '복제',
  'Quality': '퀄리티', 'Sockets': '소켓',
};

// ── 태그 조합 번역 (콤마 구분 태그 → 각각 번역 후 재조합) ───────────────────
function translateTagCombo(text) {
  // '— Evasion, Defences' 형태 — 앞의 대시 분리 후 처리
  const dashMatch = text.match(/^([—–-]+\s*)(.*)/);
  const prefix = dashMatch ? dashMatch[1] : '';
  const body = dashMatch ? dashMatch[2] : text;

  const parts = body.split(',').map(p => p.trim());
  const tagLower = {};
  for (const [k, v] of Object.entries(TAG_DICT)) {
    tagLower[k.toLowerCase()] = v;
  }
  const translated = parts.map(p => tagLower[p.toLowerCase()] || null);
  if (translated.every(v => v !== null)) {
    return prefix + translated.join(', ');
  }
  return null;
}

// ── 숫자 범위 정규화 ───────────────────────────────────────────────────────────
function normalizePattern(text) {
  return text
    .replace(/\d+\.\d+\(\d+[–—-]\d+\.?\d*\)/g, '#')  // 소수점+범위: 4.9(4–4.9)
    .replace(/\d+\(\d+[–—-]\d+\)/g, '#')                   // 정수+범위: 30(30-33)
    .replace(/\(\d+\.?\d*[–—-]\d+\.?\d*\)/g, '#')       // 범위: (4–4.9), (10–30)
    .replace(/\(\d+\)/g, '#')                                  // 단독: (10)
    .replace(/\b\d+\.\d+\b/g, '#')                          // 소수점 숫자: 4.9
    .replace(/\b\d+\b/g, '#')                                  // 정수
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();                                               // 대소문자 무시
}

// ── 패턴 사전 빌드 ─────────────────────────────────────────────────────────────
function buildPatternMap(dict) {
  const map = new Map();
  for (const [en, kr] of Object.entries(dict)) {
    const normEn = normalizePattern(en);
    if (!map.has(normEn)) {
      map.set(normEn, normalizePattern(kr));
    }
  }
  return map;
}

// ── 번역 데이터 로드 ───────────────────────────────────────────────────────────
async function loadTranslations() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { ts, data } = JSON.parse(cached);
      if (Date.now() - ts < CACHE_TTL) return data;
    }
  } catch (e) {}
  try {
    const res = await fetch(TRANS_URL);
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
    } catch (e) {}
    return data;
  } catch (e) {
    console.warn('[CoE 한글화] 번역 데이터 로드 실패:', e);
    return {};
  }
}

// ── 텍스트 번역 함수 ───────────────────────────────────────────────────────────
function translate(text, dict, uiDict, patternMap) {
  const trimmed = text.trim();
  if (!trimmed) return text;

  // 1) UI 딕셔너리 정확 매칭
  if (uiDict[trimmed]) return text.replace(trimmed, uiDict[trimmed]);

  // 2) translations.json 정확 매칭
  if (dict[trimmed]) return text.replace(trimmed, dict[trimmed]);

  // 3) 정규화 패턴 매칭
  const normInput = normalizePattern(trimmed);
  if (patternMap.has(normInput)) {
    const krPattern = patternMap.get(normInput);
    const numbers = trimmed.match(/\d+/g) || [];
    let i = 0;
    const kr = krPattern.replace(/#/g, () => numbers[i++] ?? '#');
    return text.replace(trimmed, kr);
  }

  // 4) Prefix/Suffix modifier (Tier: N) 동적 패턴
  const prefixTier = trimmed.match(/^Prefix modifier \(Tier: (\d+)\)$/i);
  if (prefixTier) return text.replace(trimmed, `접두어 속성 (티어: ${prefixTier[1]})`);
  const suffixTier = trimmed.match(/^Suffix modifier \(Tier: (\d+)\)$/i);
  if (suffixTier) return text.replace(trimmed, `접미어 속성 (티어: ${suffixTier[1]})`);

  // 5) 태그 조합 번역 (콤마 포함 텍스트)
  if (trimmed.includes(',')) {
    const tagResult = translateTagCombo(trimmed);
    if (tagResult) return text.replace(trimmed, tagResult);
  }

  // 6) 대소문자 무시 매칭 (UI_DICT)
  const lower = trimmed.toLowerCase();
  for (const [k, v] of Object.entries(uiDict)) {
    if (k.toLowerCase() === lower) return text.replace(trimmed, v);
  }

  return text;
}

// ── DOM 노드 번역 ──────────────────────────────────────────────────────────────
function translateNode(node, dict, uiDict, patternMap, translated) {
  if (translated.has(node)) return;
  if (node.nodeType === Node.TEXT_NODE) {
    const original = node.textContent;
    const result = translate(original, dict, uiDict, patternMap);
    if (result !== original) {
      node.textContent = result;
      translated.add(node);
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (const attr of ['placeholder', 'title', 'aria-label']) {
      const val = node.getAttribute(attr);
      if (val) {
        const result = translate(val, dict, uiDict, patternMap);
        if (result !== val) node.setAttribute(attr, result);
      }
    }
    const tag = node.tagName.toLowerCase();
    if (tag !== 'script' && tag !== 'style' && tag !== 'textarea') {
      for (const child of node.childNodes) {
        translateNode(child, dict, uiDict, patternMap, translated);
      }
    }
  }
}

// ── 전체 번역 실행 ─────────────────────────────────────────────────────────────
function translatePage(dict, uiDict, patternMap) {
  const translated = new WeakSet();
  translateNode(document.body, dict, uiDict, patternMap, translated);
}

// ── MutationObserver ───────────────────────────────────────────────────────────
function observeDOM(dict, uiDict, patternMap) {
  const translated = new WeakSet();
  let pending = false;
  const observer = new MutationObserver((mutations) => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          translateNode(node, dict, uiDict, patternMap, translated);
        }
        if (mutation.type === 'characterData') {
          translateNode(mutation.target, dict, uiDict, patternMap, translated);
        }
      }
      pending = false;
    });
  });
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
}

// ── 초기화 ────────────────────────────────────────────────────────────────────
(async () => {
  const dict = await loadTranslations();
  const patternMap = buildPatternMap(dict);
  console.log(`[CoE 한글화] 로드 완료: 원본 ${Object.keys(dict).length}개 / 패턴 ${patternMap.size}개`);
  translatePage(dict, UI_DICT, patternMap);
  observeDOM(dict, UI_DICT, patternMap);
})();
