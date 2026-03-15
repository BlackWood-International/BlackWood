import { motion, AnimatePresence } from 'motion/react';
import { Activity, FileText, X, TrendingUp, ShieldCheck, Clock, BarChart2, ArrowRight, Globe, Cpu, Shield } from 'lucide-react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';

const CURRENT_PRICE = 229.60;

// --- STATIC DATA GENERATION (Deterministic & Historically Consistent) ---
// Deterministic PRNG to ensure zero randomness
const createSeededRandom = (seed: number) => {
  return () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
};

const generateStaticData = () => {
  const random = createSeededRandom(42);
  const now = new Date('2026-03-10T16:00:00'); // Fixed to lore date
  const marketData: Record<string, any[]> = {};
  const periods = ['1J', '1S', '1M', '3M', '6M', 'YTD', '1A', 'MAX'];

  periods.forEach(period => {
    let points = 0;
    const smaPeriod = 50;
    
    // Determine points based on period
    if (period === '1J') points = 78; // 5 min intervals (6.5 hours)
    else if (period === '1S') points = 60; // Hourly (5 days * 12 hours)
    else if (period === '1M') points = 22; // Trading days
    else if (period === '3M') points = 63;
    else if (period === '6M') points = 126;
    else if (period === 'YTD') points = 50; // Since Jan 1, 2026
    else if (period === '1A') points = 252;
    else if (period === 'MAX') points = 180; // Monthly for 15 years

    const totalPoints = points + smaPeriod; // Add padding for accurate SMA from point 1
    const rawPrices = new Array(totalPoints).fill(0);
    const volumes = new Array(totalPoints).fill(0);
    const dates = new Array(totalPoints).fill('');

    // Generate raw prices based on period narrative
    if (period === 'MAX') {
      let price = 45; // Start price ~15 years ago
      for (let i = 0; i < totalPoints; i++) {
        const date = new Date(now);
        date.setMonth(date.getMonth() - (totalPoints - 1 - i));
        dates[i] = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' });
        
        const year = date.getFullYear();
        const month = date.getMonth(); // 0-11

        let growth = 0.012; // Base monthly growth
        let volMult = 1;

        if (year === 2020 && month === 2) { 
          // COVID-19 Crash (March 2020)
          growth = -0.35; 
          volMult = 5;
        } else if (year === 2020 && month > 2 && month < 8) {
          // V-shape recovery
          growth = 0.12; 
          volMult = 2.5;
        } else if (year === 2022 && month === 1) { 
          // Ukraine War (Feb 2022) - Defense & Dynamics boost
          growth = 0.08; 
          volMult = 3.5;
        } else {
          // Normal volatility
          growth += (random() - 0.5) * 0.05; 
        }

        price *= (1 + growth);
        rawPrices[i] = price;
        volumes[i] = Math.floor(15000000 * volMult * (0.8 + random() * 0.4));
      }
    } else if (period === '6M') {
      let price = CURRENT_PRICE / 1.12; // +12% overall
      for (let i = 0; i < totalPoints; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - (totalPoints - 1 - i));
        dates[i] = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });

        let growth = 0.001;
        let volMult = 1;
        const daysFromEnd = totalPoints - 1 - i;
        
        if (daysFromEnd > 30) {
          // Steady growth
          growth = 0.0015 + (random() - 0.5) * 0.01;
        } else if (daysFromEnd > 5) {
          // Consolidation (lateral) before San Andreas
          growth = (random() - 0.5) * 0.006;
          volMult = 0.5;
        } else {
          // Breakout (MINERVA v3.1)
          growth = 0.012 + (random() - 0.2) * 0.01;
          volMult = 3.5;
        }

        price *= (1 + growth);
        rawPrices[i] = price;
        volumes[i] = Math.floor(12000000 * volMult * (0.8 + random() * 0.4));
      }
    } else if (period === '1J') {
      let price = CURRENT_PRICE / 1.008; // +0.8% intraday
      for (let i = 0; i < totalPoints; i++) {
        const date = new Date(now);
        date.setHours(9, 30, 0, 0);
        date.setMinutes(date.getMinutes() + (i - smaPeriod) * 5); // Adjust for padding
        dates[i] = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

        // Micro-fluctuations (market noise) with upward drift
        let growth = 0.00015 + (random() - 0.48) * 0.0025; 
        price *= (1 + growth);
        rawPrices[i] = price;
        volumes[i] = Math.floor(500000 * (0.5 + random()));
      }
    } else {
      // Generic generator for 1S, 1M, 3M, YTD, 1A
      let overallGrowth = 1.05;
      if (period === '1A') overallGrowth = 1.25;
      if (period === 'YTD') overallGrowth = 1.08;
      if (period === '3M') overallGrowth = 1.15; // Stronger upward trend
      if (period === '1M') overallGrowth = 1.06; // Stronger upward trend
      if (period === '1S') overallGrowth = 1.025; // Stronger upward trend
      
      let price = CURRENT_PRICE / overallGrowth;
      for (let i = 0; i < totalPoints; i++) {
        const date = new Date(now);
        if (period === '1S') {
          date.setHours(date.getHours() - (totalPoints - 1 - i));
          dates[i] = `${date.toLocaleDateString('fr-FR', { weekday: 'short' })} ${date.getHours()}h`;
        } else {
          date.setDate(date.getDate() - (totalPoints - 1 - i));
          dates[i] = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
        }

        // Reduce random noise and shift it slightly positive to ensure upward trajectory
        let noiseAmplitude = 0.015;
        let noiseShift = 0.5;
        
        if (['1S', '1M', '3M'].includes(period)) {
          noiseAmplitude = 0.008; // Less noise
          noiseShift = 0.45; // Shifted upwards (random() - 0.45 averages +0.05)
        }

        let growth = (Math.pow(overallGrowth, 1/totalPoints) - 1) + (random() - noiseShift) * noiseAmplitude;
        price *= (1 + growth);
        rawPrices[i] = price;
        volumes[i] = Math.floor(8000000 * (0.5 + random()));
      }
    }

    // Normalize to end exactly at CURRENT_PRICE
    const adjustment = CURRENT_PRICE / rawPrices[totalPoints - 1];
    for (let i = 0; i < totalPoints; i++) {
      rawPrices[i] *= adjustment;
    }

    const finalData = [];
    // Calculate SMA 50 and build final array (excluding padding)
    for (let i = smaPeriod; i < totalPoints; i++) {
      let sum = 0;
      for (let j = 0; j < smaPeriod; j++) {
        sum += rawPrices[i - j];
      }
      const sma = sum / smaPeriod;

      finalData.push({
        date: dates[i],
        price: Number(rawPrices[i].toFixed(2)),
        sma50: Number(sma.toFixed(2)),
        volume: volumes[i]
      });
    }
    
    marketData[period] = finalData;
  });

  return marketData;
};

// Generate the static data once
const MARKET_DATA = generateStaticData();

// --- NARRATIVE NEWS ---
const newsData = [
  {
    id: 1,
    date: '10 Mars 2026 - 08:45 EST',
    title: "BlackWood Capital : L'algorithme MINERVA anticipe une croissance asymétrique de 14% sur le secteur de San Andreas.",
    summary: "L'intégration de MINERVA v3.1 révèle des opportunités d'investissement massives, déclenchant un afflux de capitaux institutionnels sans précédent.",
    category: 'STRATEGY',
    icon: Cpu,
    content: "Dans une note confidentielle adressée aux investisseurs institutionnels ce matin, BlackWood Capital a révélé les dernières projections de son système d'intelligence prédictive MINERVA v3.1. L'algorithme anticipe une croissance asymétrique de 14% sur le secteur de San Andreas au cours des 18 prochains mois, justifiant une allocation massive de capitaux vers les infrastructures locales.\n\nCette annonce a immédiatement déclenché un volume d'achat institutionnel record, propulsant le titre BLWD au-delà de sa zone de consolidation technique. Les analystes estiment que cette avance technologique confère à BlackWood un avantage déloyal sur ses concurrents directs."
  },
  {
    id: 2,
    date: '08 Mars 2026 - 16:30 EST',
    title: "Résultats Q3 : Un bénéfice par action (EPS) supérieur aux attentes grâce à la division Defense & Dynamics.",
    summary: "La division de défense surperforme avec la signature de trois contrats gouvernementaux majeurs, consolidant les marges du groupe.",
    category: 'EARNINGS',
    icon: Shield,
    content: "BlackWood International Corp. a publié des résultats trimestriels dépassant largement le consensus de Wall Street. Le bénéfice par action (EPS) s'établit à $4.85 contre $4.62 attendus.\n\nCette surperformance est principalement attribuable aux marges exceptionnelles de la division Defense & Dynamics, qui a finalisé trois contrats gouvernementaux majeurs ce trimestre. Le conseil d'administration a profité de cette publication pour confirmer le maintien d'un dividende agressif, soulignant l'excellente génération de flux de trésorerie (Free Cash Flow) du groupe."
  },
  {
    id: 3,
    date: '05 Mars 2026 - 11:15 EST',
    title: "Analyse : Pourquoi les investisseurs institutionnels renforcent leurs positions sur $BLWD malgré la volatilité macro-économique.",
    summary: "Face aux incertitudes mondiales, la structure conglomérale de BlackWood s'impose comme la valeur refuge absolue pour les fonds souverains.",
    category: 'MARKET INSIGHT',
    icon: Globe,
    content: "Alors que les marchés mondiaux traversent une phase de turbulences liées aux incertitudes sur les taux d'intérêt, l'action BlackWood ($BLWD) fait figure de valeur refuge absolue.\n\nLes données 13F récentes montrent une accumulation nette de la part des fonds souverains et des méga-fonds de pension. Les analystes soulignent que la structure conglomérale de BlackWood, combinée à son avance technologique (MINERVA), offre une couverture naturelle contre l'inflation tout en capturant la prime de croissance liée à ses divisions technologiques et de défense."
  }
];

// --- CUSTOM TOOLTIP ---
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const price = payload.find((p: any) => p.dataKey === 'price')?.value;
    const sma = payload.find((p: any) => p.dataKey === 'sma50')?.value;
    const volume = payload.find((p: any) => p.dataKey === 'volume')?.value;
    
    return (
      <div className="bg-white/90 border border-black/10 p-4 rounded-2xl shadow-2xl backdrop-blur-3xl">
        <p className="text-black/40 text-[10px] font-mono mb-3 uppercase tracking-widest">{label}</p>
        <div className="space-y-2.5">
          <p className="text-black text-sm font-mono flex justify-between gap-8 items-center">
            <span className="text-black/40 text-xs">BLWD</span> 
            <span className="font-semibold text-base">${price?.toFixed(2)}</span>
          </p>
          {sma && (
            <p className="text-black text-sm font-mono flex justify-between gap-8 items-center">
              <span className="text-black/40 text-xs">SMA 50</span> 
              <span>${sma?.toFixed(2)}</span>
            </p>
          )}
          {volume && (
            <p className="text-black text-sm font-mono flex justify-between gap-8 items-center">
              <span className="text-black/40 text-xs">VOL</span> 
              <span>{(volume / 1000000).toFixed(2)}M</span>
            </p>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default function StockNews() {
  const [selectedArticle, setSelectedArticle] = useState<typeof newsData[0] | null>(null);
  const [activePeriod, setActivePeriod] = useState('1J'); // Default to 1J
  const timeRanges = ['1J', '1S', '1M', '3M', '6M', 'YTD', '1A', 'MAX'];

  const chartData = MARKET_DATA[activePeriod];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedArticle]);

  return (
    <div className="w-full text-black">
      <Hero 
        subtitle="Market Insights"
        title={<>BLWD <span className="text-black/20 font-light">|</span> BlackWood Intl.</>}
        description="Terminal d'analyse financière institutionnelle. Données de marché en temps réel, intelligence prédictive et flux d'actualités stratégiques."
        background="dark"
      />
      <div className="relative z-10 bg-white pb-40 pt-24 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Key Metrics Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {/* Price */}
          <div className="bg-zinc-50 border border-black/10 p-8 rounded-[2rem] shadow-sm hover:bg-zinc-100 transition-colors duration-500 flex flex-col justify-between group">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase mb-6 group-hover:text-black/60 transition-colors">Action BLWD</p>
            <div>
              <div className="flex items-baseline gap-2 mb-3">
                <h2 className="text-4xl lg:text-5xl font-mono text-black tracking-tighter">$229.60</h2>
                <span className="text-sm font-mono text-black/40">USD</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 bg-emerald-600/10 w-fit px-3 py-1.5 rounded-full border border-emerald-600/20">
                <TrendingUp className="h-3.5 w-3.5" />
                <span className="font-medium">+0.80% (Intraday)</span>
              </div>
            </div>
          </div>

          {/* Market Cap */}
          <div className="bg-zinc-50 border border-black/10 p-8 rounded-[2rem] shadow-sm hover:bg-zinc-100 transition-colors duration-500 flex flex-col justify-between group">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase mb-6 group-hover:text-black/60 transition-colors">Market Cap</p>
            <div>
              <div className="flex items-baseline gap-1 mb-3">
                <h2 className="text-4xl lg:text-5xl font-mono text-black tracking-tighter">$468.4</h2>
                <span className="text-xl font-mono text-black/40">B</span>
              </div>
              <p className="text-xs font-mono text-black/40">Capitalisation boursière</p>
            </div>
          </div>

          {/* P/E Ratio */}
          <div className="bg-zinc-50 border border-black/10 p-8 rounded-[2rem] shadow-sm hover:bg-zinc-100 transition-colors duration-500 flex flex-col justify-between group">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase mb-6 group-hover:text-black/60 transition-colors">P/E Ratio (TTM)</p>
            <div>
              <h2 className="text-4xl lg:text-5xl font-mono text-black tracking-tighter mb-3">21.8</h2>
              <p className="text-xs font-mono text-black/40">Premium Growth Valuation</p>
            </div>
          </div>

          {/* Dividend */}
          <div className="bg-zinc-50 border border-black/10 p-8 rounded-[2rem] shadow-sm hover:bg-zinc-100 transition-colors duration-500 flex flex-col justify-between group">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase mb-6 group-hover:text-black/60 transition-colors">Dividende (Yield)</p>
            <div>
              <h2 className="text-4xl lg:text-5xl font-mono text-black tracking-tighter mb-3">1.85%</h2>
              <p className="text-xs font-mono text-black/40">Génération FCF massive</p>
            </div>
          </div>
        </motion.div>

        {/* Chart Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-50 border border-black/10 rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-sm mb-24"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12 gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-serif text-black mb-3">Performance Historique</h3>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-black"></div>
                  <span className="text-[10px] font-mono text-black/50 uppercase tracking-widest">Prix</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-black/10 border-t border-dashed border-black/30"></div>
                  <span className="text-[10px] font-mono text-black/50 uppercase tracking-widest">SMA 50</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black/5"></div>
                  <span className="text-[10px] font-mono text-black/50 uppercase tracking-widest">Volume</span>
                </div>
              </div>
            </div>
            
            {/* Time Ranges */}
            <div className="flex flex-wrap gap-1 bg-black/5 p-1.5 rounded-2xl border border-black/10 w-full lg:w-auto overflow-x-auto hide-scrollbar">
              {timeRanges.map((period) => (
                <button 
                  key={period}
                  onClick={() => setActivePeriod(period)}
                  className={`flex-1 min-w-[44px] lg:flex-none px-3 lg:px-4 py-2.5 lg:py-2 text-[10px] font-mono font-medium rounded-xl transition-all duration-300 ${
                    activePeriod === period 
                      ? 'bg-white text-black shadow-sm' 
                      : 'text-black/50 active:text-black lg:hover:text-black lg:hover:bg-black/5 border border-transparent'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full h-[350px] lg:h-[500px] -ml-2 lg:ml-0">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#666', fontFamily: 'monospace' }} 
                  dy={15}
                  minTickGap={30}
                />
                <YAxis 
                  yAxisId="price"
                  domain={['auto', 'auto']} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#666', fontFamily: 'monospace' }}
                  tickFormatter={(value) => `$${value}`}
                  width={45}
                  orientation="right"
                  dx={5}
                />
                <YAxis 
                  yAxisId="volume"
                  domain={[0, 'dataMax * 4']} // Pushes volume bars to the bottom 25%
                  hide
                />
                <Tooltip 
                  content={<CustomTooltip />} 
                  cursor={{ stroke: '#444', strokeWidth: 1, strokeDasharray: '4 4' }} 
                  isAnimationActive={false}
                />
                
                {/* Animations disabled for instant data switching */}
                <Bar 
                  yAxisId="volume" 
                  dataKey="volume" 
                  fill="#e4e4e7" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false} 
                />
                
                <Line 
                  yAxisId="price"
                  type="monotone" 
                  dataKey="sma50" 
                  stroke="#a1a1aa" 
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  dot={false}
                  isAnimationActive={false}
                />
                
                <Line 
                  yAxisId="price"
                  type="monotone" 
                  dataKey="price" 
                  stroke="#000" 
                  strokeWidth={2.5}
                  dot={false}
                  isAnimationActive={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Latest Market News */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-black">Latest Market News</h2>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-black/40">
              <ShieldCheck className="h-4 w-4" />
              <span>Verified by BlackWood Intelligence</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-zinc-50 rounded-[2rem] p-6 lg:p-8 border border-black/10 flex flex-col h-full group lg:hover:bg-zinc-100 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center lg:group-hover:bg-black/5 transition-colors duration-500">
                    <news.icon className="h-4 w-4 lg:h-5 lg:w-5 text-black/60 lg:group-hover:text-black transition-colors duration-500" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-black/50 uppercase bg-black/5 px-3 py-1.5 rounded-full border border-black/10">
                    {news.category}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-[10px] lg:text-xs font-mono text-black/40 mb-4">
                  <Clock className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                  <span>{news.date}</span>
                </div>

                <h3 className="text-lg lg:text-xl font-serif text-black mb-4 leading-snug lg:group-hover:text-black/80 transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-sm text-black/50 leading-relaxed mb-8 flex-grow font-light">
                  {news.summary}
                </p>

                <Button 
                  label="Lire l'analyse complète" 
                  onClick={() => setSelectedArticle(news)} 
                  variant="ghost" 
                  showArrow 
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      </div>

      {/* Article Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="absolute inset-0 bg-white/80 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-3xl bg-zinc-50 border border-black/10 rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden"
              >
                <div className="flex items-center justify-between p-6 sm:p-8 border-b border-black/10 bg-white/80 backdrop-blur-xl sticky top-0 z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center">
                      <selectedArticle.icon className="h-4 w-4 text-black" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-black/80 uppercase block mb-0.5">
                        {selectedArticle.category}
                      </span>
                      <span className="text-xs font-mono text-black/40">{selectedArticle.date}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/5 flex items-center justify-center text-black/60 hover:text-black transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="p-8 sm:p-12 overflow-y-auto">
                  <h2 className="text-3xl sm:text-4xl font-serif text-black mb-8 leading-tight">
                    {selectedArticle.title}
                  </h2>
                  <div className="prose prose-lg  max-w-none font-sans">
                    {selectedArticle.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-black/60 font-light leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-16 pt-8 border-t border-black/10 flex items-center justify-between">
                    <p className="text-[10px] font-mono text-black/40 uppercase tracking-widest">
                      Source: BlackWood Capital Intelligence
                    </p>
                    <div className="flex items-center gap-2 text-black/30">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-[10px] font-mono tracking-widest">SECURE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
