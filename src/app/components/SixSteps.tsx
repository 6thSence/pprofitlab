import { getPlaceholderImage } from '../utils/placeholder';
'use client';

import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Компонент циклической схемы маркетинга с анимированной стрелкой
function MarketingCycle() {
  const stages = [
    { 
      id: 1, 
      title: 'Анализ', 
      icon: '🔍',
      description: 'Изучаем аудиторию и конкурентов',
      angle: 0 
    },
    { 
      id: 2, 
      title: 'Стратегия', 
      icon: '🎯',
      description: 'Разрабатываем план действий',
      angle: 90 
    },
    { 
      id: 3, 
      title: 'Запуск', 
      icon: '🚀',
      description: 'Запускаем кампании',
      angle: 180 
    },
    { 
      id: 4, 
      title: 'Оптимизация', 
      icon: '⚡',
      description: 'Улучшаем результаты',
      angle: 270 
    }
  ];

  return (
    <div className="w-full max-w-xl mx-auto">
      <svg viewBox="0 0 500 500" className="w-full h-auto">
        <defs>
          {/* Градиент для круга */}
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2ba546', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: '#2db54d', stopOpacity: 0.2 }} />
          </linearGradient>

          {/* Градиент для стрелки */}
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#2ba546', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#2ba546', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2ba546', stopOpacity: 0.3 }} />
          </linearGradient>

          {/* Маркер для конца стрелки */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#2ba546" />
          </marker>
        </defs>

        {/* Фоновый круг */}
        <circle
          cx="250"
          cy="250"
          r="180"
          fill="url(#circleGradient)"
          stroke="#2ba546"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />

        {/* Анимированная стрелка по кругу */}
        <circle
          cx="250"
          cy="250"
          r="180"
          fill="none"
          stroke="url(#arrowGradient)"
          strokeWidth="8"
          strokeDasharray="80 1050"
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
          className="marketing-arrow"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Этапы маркетингового цикла */}
        {stages.map((stage, index) => {
          const angleRad = (stage.angle - 90) * (Math.PI / 180);
          const x = 250 + Math.cos(angleRad) * 180;
          const y = 250 + Math.sin(angleRad) * 180;
          
          return (
            <g key={stage.id}>
              {/* Круг этапа */}
              <circle
                cx={x}
                cy={y}
                r="55"
                fill="white"
                stroke="#2ba546"
                strokeWidth="3"
                className="transition-all duration-300 hover:stroke-[#34ae15] cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(43, 165, 70, 0.2))'
                }}
              />
              
              {/* Внутренний круг с градиентом */}
              <circle
                cx={x}
                cy={y}
                r="48"
                fill="url(#circleGradient)"
                opacity="0.3"
              />

              {/* Иконка */}
              <text
                x={x}
                y={y - 10}
                textAnchor="middle"
                fontSize="28"
                className="select-none"
              >
                {stage.icon}
              </text>

              {/* Название этапа */}
              <text
                x={x}
                y={y + 15}
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#1f2937"
                className="select-none"
              >
                {stage.title}
              </text>

              {/* Номер этапа */}
              <circle
                cx={x + 35}
                cy={y - 35}
                r="12"
                fill="#2ba546"
                className="transition-all duration-300"
              />
              <text
                x={x + 35}
                y={y - 31}
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill="white"
                className="select-none"
              >
                {stage.id}
              </text>
            </g>
          );
        })}

        {/* Центральная иконка цикла */}
        <circle
          cx="250"
          cy="250"
          r="40"
          fill="white"
          stroke="#2ba546"
          strokeWidth="3"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(43, 165, 70, 0.3))'
          }}
        />
        <circle
          cx="250"
          cy="250"
          r="33"
          fill="#2ba546"
          opacity="0.1"
        />
        <text
          x="250"
          y="260"
          textAnchor="middle"
          fontSize="32"
          className="select-none"
        >
          🔄
        </text>
      </svg>

      <style dangerouslySetInnerHTML={{__html: `
        .marketing-arrow {
          animation: pulse-arrow 2s ease-in-out infinite;
        }

        @keyframes pulse-arrow {
          0%, 100% {
            stroke-width: 8;
            opacity: 1;
          }
          50% {
            stroke-width: 10;
            opacity: 0.8;
          }
        }
      `}} />
    </div>
  );
}

interface SixStepsProps {
  onOpenDiagnostic: () => void;
}

export function SixSteps({ onOpenDiagnostic }: SixStepsProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  // Состояния для анимации счетчиков в блоке Финансы
  const [financeVisible, setFinanceVisible] = useState(false);
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [animatedProfit, setAnimatedProfit] = useState(0);
  const [animatedMargin, setAnimatedMargin] = useState(0);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const financeRef = useRef<HTMLDivElement>(null);

  // Refs для расчета позиций линий
  const stepCircleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineHeights, setLineHeights] = useState({ gray: 0, green: 0 });



  const steps = [
    {
      id: 0,
      title: 'Диагностика',
      shortTitle: 'Диагностика'
    },
    {
      id: 1,
      title: 'Финансы',
      shortTitle: 'Финансы'
    },
    {
      id: 2,
      title: 'Процессы',
      shortTitle: 'Процессы'
    },
    {
      id: 3,
      title: 'Команда',
      shortTitle: 'Команда'
    },
    {
      id: 4,
      title: 'Отчетность',
      shortTitle: 'Отчетность'
    },
    {
      id: 5,
      title: 'Маркетинг',
      shortTitle: 'Маркетинг'
    },
    {
      id: 6,
      title: 'ИИ',
      shortTitle: 'ИИ'
    }
  ];

  useEffect(() => {
    const currentRef = tabRefs.current[activeStep];
    if (currentRef) {
      setIndicatorStyle({
        left: currentRef.offsetLeft,
        width: currentRef.offsetWidth
      });
    }
  }, [activeStep]);

  // Расчет высоты линий на основе реальных позиций кружков
  useEffect(() => {
    const calculateLineHeights = () => {
      const firstCircle = stepCircleRefs.current[0];
      const lastCircle = stepCircleRefs.current[steps.length - 1];
      const activeCircle = stepCircleRefs.current[activeStep];
      
      if (firstCircle && lastCircle && activeCircle) {
        // Получаем позиции относительно viewport
        const firstRect = firstCircle.getBoundingClientRect();
        const lastRect = lastCircle.getBoundingClientRect();
        const activeRect = activeCircle.getBoundingClientRect();
        
        // Центр каждого кружка
        const firstCenter = firstRect.top + firstRect.height / 2;
        const lastCenter = lastRect.top + lastRect.height / 2;
        const activeCenter = activeRect.top + activeRect.height / 2;
        
        // Высоты линий
        const grayHeight = lastCenter - firstCenter;
        const greenHeight = activeCenter - firstCenter;
        
        setLineHeights({
          gray: Math.max(0, grayHeight),
          green: Math.max(0, greenHeight)
        });
      }
    };

    // Небольшая задержка для рендера
    const timer = setTimeout(calculateLineHeights, 100);
    
    // Пересчитываем при ресайзе
    window.addEventListener('resize', calculateLineHeights);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateLineHeights);
    };
  }, [activeStep, steps.length]);

  // Анимация счетчиков для блока Финансы
  useEffect(() => {
    if (activeStep === 1 && !financeVisible) {
      setFinanceVisible(true);
      animateFinanceCounters();
    }
  }, [activeStep]);

  const animateFinanceCounters = () => {
    const duration = 2000; // 2 секунды
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Easing функция с амортизацией (ease-out-back)
      const easeOutBack = (x: number): number => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
      };
      
      const easedProgress = easeOutBack(progress);
      
      setAnimatedRevenue(2840000 * easedProgress);
      setAnimatedProfit(840000 * easedProgress);
      setAnimatedMargin(29.5 * easedProgress);
      setAnimatedPercentage(23 * easedProgress);
      
      if (frame >= totalFrames) {
        clearInterval(timer);
        setAnimatedRevenue(2840000);
        setAnimatedProfit(840000);
        setAnimatedMargin(29.5);
        setAnimatedPercentage(23);
      }
    }, frameRate);
  };

  // Компонент радар-чарта для диагностики
  const RadarChart = () => {
    const [interactiveValues, setInteractiveValues] = useState<number[]>([80, 60, 50, 40, 70, 85, 90, 55]);
    const [isHovering, setIsHovering] = useState(false);
    
    const areas = [
      { label: 'Команда', angle: 0 },
      { label: 'Оцифровка', angle: 45 },
      { label: 'Найм и адаптация', angle: 90 },
      { label: 'Маркетинг', angle: 135 },
      { label: 'Продажи', angle: 180 },
      { label: 'Прибыльность', angle: 225 },
      { label: 'Финансы', angle: 270 },
      { label: 'Отдел контроля качества', angle: 315 }
    ];

    const defaultValues = [80, 60, 50, 40, 70, 85, 90, 55];

    const centerX = 200;
    const centerY = 200;
    const radius = 140;
    const levels = 4;

    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
      const svg = e.currentTarget;
      const rect = svg.getBoundingClientRect();
      const scaleX = 400 / rect.width;
      const scaleY = 400 / rect.height;
      
      const mouseX = (e.clientX - rect.left) * scaleX;
      const mouseY = (e.clientY - rect.top) * scaleY;
      
      // Вычисляем расстояние и угол от центра до курсора
      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
      const mouseAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      
      // Ограничиваем расстояние радиусом
      const clampedDistance = Math.min(distanceFromCenter, radius);
      const valuePercentage = (clampedDistance / radius) * 100;
      
      // Обновляем значения для каждой оси на основе близости к курсору
      const newValues = areas.map((area) => {
        let angleDiff = Math.abs(mouseAngle - area.angle);
        if (angleDiff > 180) angleDiff = 360 - angleDiff;
        
        // Чем ближе ось к курсору, тем сильнее эффект
        const influence = Math.max(0, 1 - angleDiff / 90);
        const targetValue = valuePercentage * influence + defaultValues[areas.indexOf(area)] * (1 - influence);
        
        return targetValue;
      });
      
      setInteractiveValues(newValues);
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setInteractiveValues(defaultValues);
      setIsHovering(false);
    };

    const dataPoints = areas.map((area, idx) => {
      const angle = (area.angle - 90) * (Math.PI / 180);
      const value = interactiveValues[idx] / 100;
      const x = centerX + Math.cos(angle) * radius * value;
      const y = centerY + Math.sin(angle) * radius * value;
      return `${x},${y}`;
    });

    return (
      <svg 
        width="400" 
        height="400" 
        viewBox="0 0 400 400" 
        className="mx-auto cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {[...Array(levels)].map((_, i) => (
          <circle
            key={i}
            cx={centerX}
            cy={centerY}
            r={(radius / levels) * (i + 1)}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {areas.map((area, idx) => {
          const angle = (area.angle - 90) * (Math.PI / 180);
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          return (
            <line
              key={idx}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          );
        })}

        <polygon
          points={dataPoints.join(' ')}
          fill="#2ba546"
          fillOpacity={isHovering ? "0.4" : "0.3"}
          stroke="#2ba546"
          strokeWidth="2"
          style={{ transition: 'fill-opacity 0.2s ease' }}
        />

        {areas.map((area, idx) => {
          const angle = (area.angle - 90) * (Math.PI / 180);
          const value = interactiveValues[idx] / 100;
          const x = centerX + Math.cos(angle) * radius * value;
          const y = centerY + Math.sin(angle) * radius * value;
          
          const labelDistance = radius + 30;
          const labelX = centerX + Math.cos(angle) * labelDistance;
          const labelY = centerY + Math.sin(angle) * labelDistance;

          return (
            <g key={idx}>
              <circle 
                cx={x} 
                cy={y} 
                r="6" 
                fill="#2ba546"
                style={{ transition: 'cx 0.1s ease, cy 0.1s ease' }}
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                className="text-sm"
                fill="#374151"
              >
                {area.label}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };

  // Компонент зеленого AI робота
  const AIRobot = () => {
    return (
      <>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes headBob {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-2deg); }
            75% { transform: rotate(2deg); }
          }
          @keyframes armWaveLeft {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-5deg); }
          }
          @keyframes armWaveRight {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          @keyframes neuralRotate {
            0% { transform: translate(200px, 300px) rotate(0deg); }
            100% { transform: translate(200px, 300px) rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.5; }
          }
          @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(43, 165, 70, 0.3)); }
            50% { filter: drop-shadow(0 0 15px rgba(43, 165, 70, 0.6)); }
          }
          .robot-container {
            animation: float 4s ease-in-out infinite;
          }
          .robot-head {
            transform-origin: 200px 150px;
            animation: headBob 3s ease-in-out infinite;
          }
          .robot-arm-left {
            transform-origin: 97.5px 280px;
            animation: armWaveLeft 2.5s ease-in-out infinite;
          }
          .robot-arm-right {
            transform-origin: 302.5px 280px;
            animation: armWaveRight 2.5s ease-in-out infinite 0.3s;
          }
          .neural-network {
            animation: neuralRotate 8s linear infinite;
          }
          .background-neurons {
            animation: pulse 3s ease-in-out infinite;
          }
          .robot-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}</style>
        <svg width="400" height="500" viewBox="0 0 400 500" className="mx-auto">
          <defs>
            <linearGradient id="robotGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34ae15" />
              <stop offset="100%" stopColor="#2ba546" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2ba546" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#34ae15" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2db54d" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          <g className="robot-container">
            {/* Фоновые нейронные связи */}
            <g className="background-neurons">
              <circle cx="80" cy="100" r="4" fill="#2ba546" />
              <circle cx="120" cy="80" r="4" fill="#34ae15" />
              <circle cx="280" cy="120" r="4" fill="#2db54d" />
              <circle cx="320" cy="90" r="4" fill="#2ba546" />
              <line x1="80" y1="100" x2="120" y2="80" stroke="#2ba546" strokeWidth="1" />
              <line x1="120" y1="80" x2="280" y2="120" stroke="#34ae15" strokeWidth="1" />
              <line x1="280" y1="120" x2="320" y2="90" stroke="#2db54d" strokeWidth="1" />
            </g>

            {/* Антенна */}
            <line x1="200" y1="100" x2="200" y2="70" stroke="url(#robotGradient)" strokeWidth="4" strokeLinecap="round" className="robot-glow" />
            <circle cx="200" cy="65" r="8" fill="#34ae15" className="robot-glow" />
            <circle cx="200" cy="65" r="12" fill="none" stroke="#34ae15" strokeWidth="2" opacity="0.3">
              <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Голова робота */}
            <g className="robot-head">
              <rect x="140" y="100" width="120" height="100" rx="20" fill="url(#robotGradient)" />
              <rect x="145" y="105" width="110" height="90" rx="15" fill="#fff" fillOpacity="0.1" />

              {/* Глаза с анимацией */}
              <g>
                {/* Левый глаз */}
                <rect x="160" y="130" width="35" height="25" rx="5" fill="#fff" />
                <circle cx="177.5" cy="142.5" r="10" fill="#2ba546">
                  <animate attributeName="r" values="10;8;10" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Правый глаз */}
                <rect x="205" y="130" width="35" height="25" rx="5" fill="#fff" />
                <circle cx="222.5" cy="142.5" r="10" fill="#2ba546">
                  <animate attributeName="r" values="10;8;10" dur="3s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Экран с кодом/нейросеть */}
              <rect x="155" y="170" width="90" height="20" rx="3" fill="#34ae15" fillOpacity="0.3" />
              <line x1="160" y1="175" x2="180" y2="175" stroke="#2ba546" strokeWidth="2" />
              <line x1="185" y1="175" x2="195" y2="175" stroke="#2ba546" strokeWidth="2" />
              <line x1="200" y1="175" x2="220" y2="175" stroke="#2ba546" strokeWidth="2" />
              <line x1="160" y1="185" x2="175" y2="185" stroke="#34ae15" strokeWidth="2" />
              <line x1="180" y1="185" x2="210" y2="185" stroke="#34ae15" strokeWidth="2" />
            </g>

            {/* Тело робота */}
            <rect x="120" y="210" width="160" height="180" rx="25" fill="url(#robotGradient)" />
            <rect x="125" y="215" width="150" height="170" rx="20" fill="#fff" fillOpacity="0.1" />

            {/* Центральный дисплей нейросети */}
            <circle cx="200" cy="300" r="50" fill="#fff" fillOpacity="0.2" />
            <g className="neural-network">
              {/* Нейронные узлы */}
              <circle cx="0" cy="-30" r="6" fill="#fff" />
              <circle cx="-25" cy="0" r="6" fill="#fff" />
              <circle cx="25" cy="0" r="6" fill="#fff" />
              <circle cx="-15" cy="25" r="6" fill="#fff" />
              <circle cx="15" cy="25" r="6" fill="#fff" />
              
              {/* Связи */}
              <line x1="0" y1="-30" x2="-25" y2="0" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
              <line x1="0" y1="-30" x2="25" y2="0" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
              <line x1="-25" y1="0" x2="-15" y2="25" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
              <line x1="-25" y1="0" x2="15" y2="25" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
              <line x1="25" y1="0" x2="-15" y2="25" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
              <line x1="25" y1="0" x2="15" y2="25" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
            </g>

            {/* Индикаторы по бокам */}
            <circle cx="145" cy="250" r="8" fill="#34ae15">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="145" cy="275" r="8" fill="#2db54d">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="145" cy="300" r="8" fill="#2ba546">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>

            <circle cx="255" cy="250" r="8" fill="#34ae15">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="255" cy="275" r="8" fill="#2db54d">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="255" cy="300" r="8" fill="#2ba546">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>

            {/* Руки */}
            <g>
              {/* Левая рука */}
              <g className="robot-arm-left">
                <rect x="80" y="230" width="35" height="100" rx="17.5" fill="url(#robotGradient)" />
                <circle cx="97.5" cy="340" r="20" fill="#2db54d" />
                <circle cx="97.5" cy="340" r="12" fill="#fff" fillOpacity="0.3" />
              </g>
              
              {/* Правая рука */}
              <g className="robot-arm-right">
                <rect x="285" y="230" width="35" height="100" rx="17.5" fill="url(#robotGradient)" />
                <circle cx="302.5" cy="340" r="20" fill="#2db54d" />
                <circle cx="302.5" cy="340" r="12" fill="#fff" fillOpacity="0.3" />
              </g>
            </g>

            {/* Ноги */}
            <g>
              {/* Левая нога */}
              <rect x="145" y="395" width="45" height="80" rx="10" fill="url(#robotGradient)" />
              <rect x="140" y="470" width="55" height="25" rx="12" fill="#2db54d" />
              
              {/* Правая нога */}
              <rect x="210" y="395" width="45" height="80" rx="10" fill="url(#robotGradient)" />
              <rect x="205" y="470" width="55" height="25" rx="12" fill="#2db54d" />
            </g>

            {/* Дополнительные элементы нейросети вокруг */}
            <g className="background-neurons">
              <circle cx="60" cy="350" r="3" fill="#2ba546" />
              <circle cx="340" cy="350" r="3" fill="#34ae15" />
              <line x1="80" y1="330" x2="60" y2="350" stroke="#2ba546" strokeWidth="1" />
              <line x1="320" y1="330" x2="340" y2="350" stroke="#34ae15" strokeWidth="1" />
            </g>
          </g>
        </svg>
      </>
    );
  };

  const getStepContent = (stepId: number) => {
    switch (stepId) {
      case 0: // Диагностика
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-500 text-sm mb-3">Полный аудит вашего бизнеса</p>
              <h3 className="text-xl md:text-2xl mb-6">
                Что <span className="text-red-500">мешает</span> расти вашем бизнесу?
              </h3>
              <p className="text-gray-600 mb-8">
                Мы проведем диагностику вашего бизнеса для поиска слабых мест и определим точки роста. 
                Диагностику проведет операционный директор.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="mb-2">Результат:</p>
                  <p className="text-primary">Индивидуальный план развития вашей компании</p>
                </div>
                <div>
                  <p className="mb-2">Формат:</p>
                  <p className="text-gray-600">Индивидуальная zoom-встреча с нашим экспертом</p>
                </div>
              </div>

              <button 
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group" 
                onClick={onOpenDiagnostic}
              >
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Записаться на диагностику</span>
              </button>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <RadarChart />
            </div>
          </div>
        );
      
      case 1: // Финансы
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-500 text-sm mb-3">Порядок в финансах, рост прибыли</p>
              <h3 className="text-xl md:text-2xl mb-8">
                Как <span style={{color: '#2ba546'}}>увеличить прибыль?</span>
              </h3>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">Результаты:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">Наведём порядок в финансах<br />и определим текущую прибыль</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">Обезопасим вас от кассового разрыва</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">Построим план роста прибыли на год</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">Организуем и делегируем работу с финансами</p>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group" onClick={onOpenDiagnostic}>
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Создать план роста</span>
              </button>
            </div>

            <div className="flex items-center justify-center">
              {/* График финансов */}
              <div className="hidden lg:block bg-white rounded-3xl shadow-lg p-8 border border-gray-200 w-full max-w-lg" ref={financeRef}>
                <style>{`
                  @keyframes growBar {
                    from {
                      transform: scaleY(0);
                    }
                    to {
                      transform: scaleY(1);
                    }
                  }
                  .bar-animate {
                    transform-origin: bottom;
                    animation: growBar 0.8s ease-out forwards;
                  }
                `}</style>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Выручка за месяц</div>
                    <div className="font-futura text-4xl text-primary">
                      {Math.round(animatedRevenue).toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-sm text-green-600 mt-1">
                      ↑ +{Math.round(animatedPercentage)}% к прошлому месяцу
                    </div>
                  </div>

                  <div className="h-px bg-gray-200"></div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Читая прибыль</div>
                      <div className="font-futura text-2xl">
                        {Math.round(animatedProfit).toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Маржинальность</div>
                      <div className="font-futura text-2xl text-primary">
                        {animatedMargin.toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  {/* График (упрощенный) */}
                  <div className="pt-4">
                    <div className="flex items-end gap-2 h-32">
                      {[40, 55, 45, 70, 60, 85, 75, 95].map((height, idx) => (
                        <div 
                          key={idx} 
                          className="flex-1 bg-gradient-to-t from-[#2ba546] to-[#34ae15] rounded-t opacity-90 hover:opacity-100 transition-opacity bar-animate"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${idx * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Янв</span>
                      <span>Фев</span>
                      <span>Мар</span>
                      <span>Апр</span>
                      <span>Май</span>
                      <span>Июн</span>
                      <span>Июл</span>
                      <span>Авг</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2: // Процессы
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-500 text-sm mb-3">Организационная схема и бизнес-процессы</p>
              <h3 className="text-xl md:text-2xl mb-8">
                Как создать <span style={{color: '#2ba546'}}>слаженную и самостоятельную команду?</span>
              </h3>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">Результаты:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      <span className="text-gray-900">Опишем бизнес-процессы и орг. схему</span> компании, 
                      чтобы понимать кто за что отвечает в компании
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      <span className="text-gray-900">Определим продукт</span> каждой должности и ее метрики
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Поймем <span className="text-gray-900">кто нам еще нужен</span> в компании для стабильного роста
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group" onClick={onOpenDiagnostic}>
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Создать систему процессов</span>
              </button>
            </div>

            <div className="hidden lg:flex items-start justify-center lg:justify-end">
              {/* Анимированная диаграмма бизнес-процессов */}
              <div className="w-full max-w-xl">
                <style>{`
                  @keyframes drawProcessPath {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  @keyframes fadeInCircle {
                    from {
                      opacity: 0;
                      transform: scale(0);
                    }
                    to {
                      opacity: 1;
                      transform: scale(1);
                    }
                  }
                  @keyframes pulse {
                    0%, 100% {
                      opacity: 0.6;
                    }
                    50% {
                      opacity: 1;
                    }
                  }
                  .process-path {
                    stroke-dasharray: 2000;
                    stroke-dashoffset: 2000;
                    animation: drawProcessPath 3s ease-in-out forwards;
                  }
                  .process-circle {
                    opacity: 0;
                    transform-origin: center;
                  }
                  .process-circle-1 {
                    animation: fadeInCircle 0.6s ease-out 0.3s forwards;
                  }
                  .process-circle-2 {
                    animation: fadeInCircle 0.6s ease-out 1s forwards;
                  }
                  .process-circle-3 {
                    animation: fadeInCircle 0.6s ease-out 1.7s forwards;
                  }
                  .process-circle-4 {
                    animation: fadeInCircle 0.6s ease-out 2.4s forwards;
                  }
                  .process-icon {
                    opacity: 0;
                  }
                  .process-icon-1 {
                    animation: fadeInCircle 0.4s ease-out 0.9s forwards, pulse 2s ease-in-out 1.3s infinite;
                  }
                  .process-icon-2 {
                    animation: fadeInCircle 0.4s ease-out 1.6s forwards, pulse 2s ease-in-out 2s infinite;
                  }
                  .process-icon-3 {
                    animation: fadeInCircle 0.4s ease-out 2.3s forwards, pulse 2s ease-in-out 2.7s infinite;
                  }
                  .process-icon-4 {
                    animation: fadeInCircle 0.4s ease-out 3s forwards, pulse 2s ease-in-out 3.4s infinite;
                  }
                `}</style>
                <svg width="100%" height="450" viewBox="0 0 600 450" className="mx-auto">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2ba546" />
                      <stop offset="50%" stopColor="#34ae15" />
                      <stop offset="100%" stopColor="#2db54d" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Основной путь процесса */}
                  <path 
                    d="M 80 80 L 250 80 Q 280 80 280 110 L 280 180 Q 280 210 310 210 L 480 210 Q 510 210 510 240 L 510 340 Q 510 370 480 370 L 120 370" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="4" 
                    fill="none" 
                    className="process-path"
                    filter="url(#glow)"
                    strokeLinecap="round"
                  />

                  {/* Точка 1: Маркетинг */}
                  <g className="process-circle process-circle-1">
                    <circle cx="80" cy="80" r="35" fill="#fff" stroke="#2ba546" strokeWidth="3" />
                    <circle cx="80" cy="80" r="28" fill="#2ba546" opacity="0.1" />
                    {/* Иконка: Мегафон */}
                    <g className="process-icon process-icon-1">
                      <path d="M 65 75 L 75 70 L 75 90 L 65 85 Z" fill="#2ba546" />
                      <circle cx="78" cy="80" r="5" fill="none" stroke="#2ba546" strokeWidth="2" />
                      <path d="M 82 77 L 88 73 M 82 83 L 88 87" stroke="#2ba546" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  </g>

                  {/* Точка 2: Лиды */}
                  <g className="process-circle process-circle-2">
                    <circle cx="280" cy="210" r="35" fill="#fff" stroke="#34ae15" strokeWidth="3" />
                    <circle cx="280" cy="210" r="28" fill="#34ae15" opacity="0.1" />
                    {/* Иконка: Группа людей */}
                    <g className="process-icon process-icon-2">
                      <circle cx="272" cy="205" r="6" fill="#34ae15" />
                      <path d="M 265 215 Q 272 212 279 215" fill="none" stroke="#34ae15" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="288" cy="205" r="6" fill="#34ae15" />
                      <path d="M 281 215 Q 288 212 295 215" fill="none" stroke="#34ae15" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  </g>

                  {/* Точка 3: Продажи */}
                  <g className="process-circle process-circle-3">
                    <circle cx="510" cy="340" r="35" fill="#fff" stroke="#2db54d" strokeWidth="3" />
                    <circle cx="510" cy="340" r="28" fill="#2db54d" opacity="0.1" />
                    {/* Иконка: Рукопожатие */}
                    <g className="process-icon process-icon-3">
                      <rect x="500" y="333" width="8" height="14" rx="2" fill="#2db54d" />
                      <rect x="512" y="333" width="8" height="14" rx="2" fill="#2db54d" />
                      <circle cx="510" cy="340" r="3" fill="#fff" />
                    </g>
                  </g>

                  {/* Точка 4: Реализация */}
                  <g className="process-circle process-circle-4">
                    <circle cx="120" cy="370" r="35" fill="#fff" stroke="#2ba546" strokeWidth="3" />
                    <circle cx="120" cy="370" r="28" fill="#2ba546" opacity="0.1" />
                    {/* Иконка: Галочка */}
                    <g className="process-icon process-icon-4">
                      <path d="M 110 370 L 117 377 L 132 362" stroke="#2ba546" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        );
      
      case 3: // Команда
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-500 text-sm mb-3">Команда: найм, адаптация, папки</p>
              <h3 className="text-xl md:text-2xl mb-8">
                Как нанимать <span style={{color: '#2ba546'}}>лучших специалистов на рынке?</span>
              </h3>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">Результаты:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Создадим <span className="text-gray-900">систему найма и адаптации</span> для сотрудников-чемпионов
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Построим <span className="text-gray-900">воронку найма</span> для быстрого поиска нужных людей
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Создадим <span className="text-gray-900">должностные папки</span> сотрудников и единую <span className="text-gray-900">базу знаний</span> для команды
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Консультация по найму</span>
              </button>
            </div>

            <div className="hidden lg:flex items-start justify-center lg:justify-end">
              <img
                src={getPlaceholderImage("Команда")}
                alt="Воронка найма сотрудников"
                className="w-full max-w-xl"
              />
            </div>
          </div>
        );
      
      case 4: // Отчетность
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-500 text-sm mb-3">Управленческая отчетность и дашборд</p>
              <h3 className="text-xl md:text-2xl mb-8">
                Как всегда знать, что просходит в компании <span style={{color: '#2ba546'}}>и быстро принимать решения?</span>
              </h3>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">Результаты:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Соберем единую <span className="text-gray-900">панель управления</span> всей компании для простого управления полетом
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Вы сможете <span className="text-gray-900">легко управлять бизнесом на основе цифр</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Внедрим <span className="text-gray-900">регулярный менеджмент</span> и отдадим управление в руки руководителей
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group" onClick={onOpenDiagnostic}>
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Стратегическая сессия</span>
              </button>
            </div>

            <div className="hidden lg:flex items-start justify-center lg:justify-end">
              <img
                src={getPlaceholderImage("Отчетность")}
                alt="Панель управления компанией"
                className="w-full max-w-xl"
              />
            </div>
          </div>
        );
      
      case 5: // Маркетинг
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-500 text-sm mb-3">Маркетинг и привлечение клиентов</p>
              <h3 className="text-xl md:text-2xl mb-8">
                Как <span style={{color: '#2ba546'}}>привлекать клиентов стабильно и предсказуемо?</span>
              </h3>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">Результаты:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Проведем <span className="text-gray-900">полный маркетинговый аудит пути клиента</span> от первого касания до покупки
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Разработаем <span className="text-gray-900">детальный план работ</span> по привлечению и удержанию клиентов
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Внедрим <span className="text-gray-900">систему аналитики</span> для отслеживания эффективности каждого канала
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group" onClick={onOpenDiagnostic}>
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Маркетинговый аудит</span>
              </button>
            </div>

            <div className="hidden lg:flex items-start justify-center lg:justify-end">
              <MarketingCycle />
            </div>
          </div>
        );
      
      case 6: // ИИ
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-500 text-sm mb-3">Внедрение искусственного интеллекта</p>
              <h3 className="text-xl md:text-2xl mb-8">
                Как использовать <span style={{color: '#2ba546'}}>ИИ для роста бизнеса?</span>
              </h3>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">Результаты:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Автоматизируем <span className="text-gray-900">рутинные задачи с помощью ИИ</span>, освободив время для стратегических решений
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Внедрим <span className="text-gray-900">чат-ботов и голосовых помощников</span> для обработки клиентских запросов 24/7
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{color: '#2ba546'}} className="text-xl mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700">
                      Настром <span className="text-gray-900">умную аналитику данных</span> для прогнозирования трендов и принятия решений
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group" onClick={onOpenDiagnostic}>
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Консультация по ИИ</span>
              </button>
            </div>

            <div className="hidden lg:flex items-start justify-center lg:justify-end">
              <AIRobot />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-futura text-3xl md:text-4xl mb-4">
Запишитесь на диагностику – остальное сделаем мы
          </h2>
        </div>

        <div className="w-full mx-auto">
          {/* Timeline дизайн */}
          <div className="grid lg:grid-cols-[220px_1fr] gap-4 lg:gap-6">
            
            {/* Левая колонка - вертикальная временная линия - скрыта на мобилке */}
            <div className="hidden lg:block relative" style={{ minHeight: '500px' }}>
              {/* Серая статичная линия - фиксированная */}
              <div 
                className="absolute left-6 w-0.5 bg-gray-200"
                style={{
                  top: '24px',
                  height: `${lineHeights.gray}px`
                }}
              />
              
              {/* Зеленая активная часть линии */}
              <div 
                className="absolute left-6 w-0.5 bg-gradient-to-b from-[#2ba546] to-[#2db54d] transition-all duration-500 ease-out"
                style={{
                  top: '24px',
                  height: `${lineHeights.green}px`
                }}
              />
              
              {/* Шаги */}
              <div className="space-y-2 relative">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="w-full text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 py-3">
                      {/* Точка */}
                      <div 
                        ref={(el) => (stepCircleRefs.current[index] = el)}
                        className={`
                          relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                          ${activeStep === step.id 
                            ? 'bg-gradient-to-br from-[#2ba546] to-[#2db54d] shadow-lg scale-110' 
                            : 'bg-white border-2 border-gray-300 group-hover:border-[#2ba546] group-hover:scale-105'
                          }
                        `}
                      >
                        <span className={`
                          font-futura transition-colors duration-300
                          ${activeStep === step.id ? 'text-white' : 'text-gray-400 group-hover:text-[#2ba546]'}
                        `} style={{ fontSize: '18px' }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      {/* Название */}
                      <div className="flex-1">
                        <h3 className={`
                          transition-all duration-300
                          ${activeStep === step.id 
                            ? 'text-[#2ba546]' 
                            : 'text-gray-600 group-hover:text-[#2ba546]'
                          }
                        `} style={{ fontSize: '16px', fontWeight: activeStep === step.id ? '600' : '500' }}>
                          {step.shortTitle}
                        </h3>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Правая колонка - контент активного шага на десктопе */}
            <div className="hidden lg:block rounded-3xl py-8 lg:py-12 px-6 lg:px-8 shadow-xl min-h-[400px] animate-fade-in bg-white">
              {getStepContent(activeStep)}
            </div>

            {/* Мобильная версия - все блоки друг за другом */}
            <div className="lg:hidden space-y-6">
              {steps.map((step, index) => (
                <div key={step.id} className="bg-white rounded-2xl p-6 shadow-lg">
                  {getStepContent(step.id)}
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}