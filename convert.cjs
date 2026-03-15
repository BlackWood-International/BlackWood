const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/Hero.tsx',
  'src/pages/Home.tsx',
  'src/pages/Divisions.tsx',
  'src/pages/Governance.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Legal.tsx',
  'src/pages/GlobalPresence.tsx',
  'src/pages/GlobalReach.tsx',
  'src/pages/StockNews.tsx',
  'src/pages/Minerva.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Swap exact combinations
    content = content.replace(/bg-white text-black/g, 'bg-black text-white');
    content = content.replace(/text-black bg-white/g, 'text-white bg-black');
    content = content.replace(/selection:bg-white selection:text-black/g, 'selection:bg-black selection:text-white');
    
    // 2. Replace dark mode specific colors with placeholders
    content = content.replace(/bg-black\/90/g, 'PLACEHOLDER_BG_WHITE_95');
    content = content.replace(/bg-black\/80/g, 'PLACEHOLDER_BG_WHITE_80');
    content = content.replace(/bg-black\/60/g, 'PLACEHOLDER_BG_WHITE_80');
    content = content.replace(/bg-black\/50/g, 'PLACEHOLDER_BG_ZINC_100_50');
    content = content.replace(/bg-black\/40/g, 'PLACEHOLDER_BG_WHITE_40');
    content = content.replace(/bg-black\/20/g, 'PLACEHOLDER_BG_WHITE_20');
    content = content.replace(/bg-black/g, 'PLACEHOLDER_BG_WHITE');
    
    content = content.replace(/bg-\[#111111\]\/90/g, 'PLACEHOLDER_BG_WHITE_90');
    content = content.replace(/bg-\[#111\]\/90/g, 'PLACEHOLDER_BG_WHITE_90');
    content = content.replace(/bg-\[#111\]\/80/g, 'PLACEHOLDER_BG_WHITE_80');
    content = content.replace(/bg-\[#111\]\/40/g, 'PLACEHOLDER_BG_WHITE_40');
    content = content.replace(/bg-\[#111\]\/20/g, 'PLACEHOLDER_BG_WHITE_20');
    content = content.replace(/bg-\[#111\]/g, 'PLACEHOLDER_BG_ZINC_50');
    content = content.replace(/bg-\[#0a0a0a\]/g, 'PLACEHOLDER_BG_ZINC_50');
    content = content.replace(/bg-\[#151515\]/g, 'PLACEHOLDER_BG_ZINC_100');
    content = content.replace(/hover:bg-\[#151515\]/g, 'hover:bg-zinc-100');
    
    content = content.replace(/text-white\/90/g, 'PLACEHOLDER_TEXT_BLACK_90');
    content = content.replace(/text-white\/80/g, 'PLACEHOLDER_TEXT_BLACK_80');
    content = content.replace(/text-white\/70/g, 'PLACEHOLDER_TEXT_BLACK_70');
    content = content.replace(/text-white\/60/g, 'PLACEHOLDER_TEXT_BLACK_60');
    content = content.replace(/text-white\/50/g, 'PLACEHOLDER_TEXT_BLACK_50');
    content = content.replace(/text-white\/40/g, 'PLACEHOLDER_TEXT_BLACK_40');
    content = content.replace(/text-white\/30/g, 'PLACEHOLDER_TEXT_BLACK_30');
    content = content.replace(/text-white\/20/g, 'PLACEHOLDER_TEXT_BLACK_20');
    content = content.replace(/text-white\/10/g, 'PLACEHOLDER_TEXT_BLACK_10');
    content = content.replace(/text-white/g, 'PLACEHOLDER_TEXT_BLACK');
    
    content = content.replace(/border-white\/30/g, 'PLACEHOLDER_BORDER_BLACK_30');
    content = content.replace(/border-white\/20/g, 'PLACEHOLDER_BORDER_BLACK_20');
    content = content.replace(/border-white\/10/g, 'PLACEHOLDER_BORDER_BLACK_10');
    content = content.replace(/border-white\/5/g, 'PLACEHOLDER_BORDER_BLACK_5');
    content = content.replace(/border-white/g, 'PLACEHOLDER_BORDER_BLACK');
    
    content = content.replace(/bg-white\/20/g, 'PLACEHOLDER_BG_BLACK_10');
    content = content.replace(/bg-white\/10/g, 'PLACEHOLDER_BG_BLACK_5');
    content = content.replace(/bg-white\/5/g, 'PLACEHOLDER_BG_BLACK_5');
    content = content.replace(/bg-white/g, 'PLACEHOLDER_BG_BLACK');
    
    content = content.replace(/from-black\/90/g, 'PLACEHOLDER_FROM_WHITE_90');
    content = content.replace(/from-black\/80/g, 'PLACEHOLDER_FROM_WHITE_80');
    content = content.replace(/from-black/g, 'PLACEHOLDER_FROM_WHITE');
    content = content.replace(/via-black\/40/g, 'PLACEHOLDER_VIA_WHITE_40');
    content = content.replace(/via-black\/20/g, 'PLACEHOLDER_VIA_WHITE_20');
    content = content.replace(/to-black\/20/g, 'PLACEHOLDER_TO_WHITE_20');
    
    content = content.replace(/from-\[#111\]\/80/g, 'PLACEHOLDER_FROM_WHITE_80');
    content = content.replace(/via-\[#111\]\/40/g, 'PLACEHOLDER_VIA_WHITE_40');
    content = content.replace(/via-\[#111\]\/20/g, 'PLACEHOLDER_VIA_WHITE_20');
    content = content.replace(/from-\[#111\]/g, 'PLACEHOLDER_FROM_WHITE');
    
    content = content.replace(/ring-white\/10/g, 'PLACEHOLDER_RING_BLACK_10');
    content = content.replace(/shadow-white\/20/g, 'PLACEHOLDER_SHADOW_BLACK_20');
    content = content.replace(/shadow-white\/5/g, 'PLACEHOLDER_SHADOW_BLACK_5');
    
    content = content.replace(/prose-invert/g, '');
    content = content.replace(/rgba\(255,255,255,/g, 'rgba(0,0,0,');
    content = content.replace(/#ffffff05/g, '#00000005');
    
    // Map specific cases
    content = content.replace(/fill="#151515"/g, 'fill="#f4f4f5"');
    content = content.replace(/stroke="#333"/g, 'stroke="#e4e4e7"');
    content = content.replace(/hover: \{ fill: "#1a1a1a"/g, 'hover: { fill: "#e4e4e7"');
    content = content.replace(/fill=\{hub.city === "San Andreas" \? "#34d399" : "#ffffff"\}/g, 'fill={hub.city === "San Andreas" ? "#059669" : "#000000"}');
    content = content.replace(/fill: "#ffffff"/g, 'fill: "#000000"');
    content = content.replace(/fill="#222"/g, 'fill="#e4e4e7"');
    content = content.replace(/stroke="#fff"/g, 'stroke="#000"');
    content = content.replace(/stroke="#666"/g, 'stroke="#a1a1aa"');
    content = content.replace(/bg-gray-200/g, 'bg-zinc-800');
    content = content.replace(/text-emerald-400/g, 'text-emerald-600');
    content = content.replace(/text-red-400/g, 'text-red-600');
    content = content.replace(/text-\[#10b981\]/g, 'text-emerald-600');
    content = content.replace(/bg-\[#10b981\]\/10/g, 'bg-emerald-600/10');
    content = content.replace(/border-\[#10b981\]\/20/g, 'border-emerald-600/20');
    
    // 3. Replace placeholders with actual values
    content = content.replace(/PLACEHOLDER_BG_WHITE_95/g, 'bg-white/95');
    content = content.replace(/PLACEHOLDER_BG_WHITE_90/g, 'bg-white/90');
    content = content.replace(/PLACEHOLDER_BG_WHITE_80/g, 'bg-white/80');
    content = content.replace(/PLACEHOLDER_BG_ZINC_100_50/g, 'bg-zinc-100/50');
    content = content.replace(/PLACEHOLDER_BG_WHITE_40/g, 'bg-white/40');
    content = content.replace(/PLACEHOLDER_BG_WHITE_20/g, 'bg-white/20');
    content = content.replace(/PLACEHOLDER_BG_WHITE/g, 'bg-white');
    content = content.replace(/PLACEHOLDER_BG_ZINC_50/g, 'bg-zinc-50');
    content = content.replace(/PLACEHOLDER_BG_ZINC_100/g, 'bg-zinc-100');
    
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_90/g, 'text-black/90');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_80/g, 'text-black/80');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_70/g, 'text-black/70');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_60/g, 'text-black/60');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_50/g, 'text-black/50');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_40/g, 'text-black/40');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_30/g, 'text-black/30');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_20/g, 'text-black/20');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK_10/g, 'text-black/10');
    content = content.replace(/PLACEHOLDER_TEXT_BLACK/g, 'text-black');
    
    content = content.replace(/PLACEHOLDER_BORDER_BLACK_30/g, 'border-black/30');
    content = content.replace(/PLACEHOLDER_BORDER_BLACK_20/g, 'border-black/20');
    content = content.replace(/PLACEHOLDER_BORDER_BLACK_10/g, 'border-black/10');
    content = content.replace(/PLACEHOLDER_BORDER_BLACK_5/g, 'border-black/5');
    content = content.replace(/PLACEHOLDER_BORDER_BLACK/g, 'border-black');
    
    content = content.replace(/PLACEHOLDER_BG_BLACK_10/g, 'bg-black/10');
    content = content.replace(/PLACEHOLDER_BG_BLACK_5/g, 'bg-black/5');
    content = content.replace(/PLACEHOLDER_BG_BLACK/g, 'bg-black');
    
    content = content.replace(/PLACEHOLDER_FROM_WHITE_90/g, 'from-white/90');
    content = content.replace(/PLACEHOLDER_FROM_WHITE_80/g, 'from-white/80');
    content = content.replace(/PLACEHOLDER_FROM_WHITE/g, 'from-white');
    content = content.replace(/PLACEHOLDER_VIA_WHITE_40/g, 'via-white/40');
    content = content.replace(/PLACEHOLDER_VIA_WHITE_20/g, 'via-white/20');
    content = content.replace(/PLACEHOLDER_TO_WHITE_20/g, 'to-white/20');
    
    content = content.replace(/PLACEHOLDER_RING_BLACK_10/g, 'ring-black/10');
    content = content.replace(/PLACEHOLDER_SHADOW_BLACK_20/g, 'shadow-black/20');
    content = content.replace(/PLACEHOLDER_SHADOW_BLACK_5/g, 'shadow-black/5');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
