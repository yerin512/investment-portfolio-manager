// app/page.tsx
'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, AlertTriangle, PieChart } from 'lucide-react';
import styles from './styles/Home.module.scss';

export default function Home() {
  const [totalAssets, setTotalAssets] = useState<number>(100000000);

  const calculations = {
    maxInvestment: totalAssets * 0.5,
    perStockMin: totalAssets * 0.0125,
    perStockMax: totalAssets * 0.025,
    optimal: totalAssets * 0.0225,
    stopLoss: totalAssets * 0.0225 * 0.08,
    maxStocks: 12
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* 헤더 */}
        <header className={styles.header}>
          <h1>
            🎯 투자 포트폴리오 관리자
          </h1>
          <p>
            수칙을 지키면 수익은 따라옵니다. 포지션 크기와 위험도를 실시간으로 관리하세요.
          </p>
        </header>

        <div className={styles.grid}>
          
          {/* 좌측 사이드바 */}
          <div className={styles.sidebar}>
            {/* 자산 입력 카드 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Calculator className={styles.icon} />
                <h2>총 자산 입력</h2>
              </div>
              
              <div className={styles.inputGroup}>
                <div>
                  <label>
                    투자 가능 자산
                  </label>
                  <input
                    type="number"
                    value={totalAssets}
                    onChange={(e) => setTotalAssets(Number(e.target.value))}
                  />
                </div>
                
                <div className={styles.quickButtons}>
                  {[50000000, 100000000, 200000000, 500000000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setTotalAssets(amount)}
                    >
                      {formatCurrency(amount).replace('원', '')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 투자 규칙 요약 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <AlertTriangle className={styles.icon} />
                <h2>투자 수칙</h2>
              </div>
              
              <div className={styles.ruleList}>
                <div className={styles.ruleItem}>
                  <span>종목당 투자비중</span>
                  <span>1.25% - 2.5%</span>
                </div>
                <div className={styles.ruleItem}>
                  <span>최대 손절라인</span>
                  <span className={styles.danger}>-10%</span>
                </div>
                <div className={styles.ruleItem}>
                  <span>전체 손실 한도</span>
                  <span>-6%</span>
                </div>
                <div className={styles.ruleItem}>
                  <span>최대 종목수</span>
                  <span>12개</span>
                </div>
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className={styles.mainContent}>
            {/* 포지션 계산기 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <PieChart className={styles.icon} />
                <h2>포지션 계산기</h2>
              </div>

              <div className={styles.positionGrid}>
                {[
                  { label: '최소 포지션', value: calculations.perStockMin, percent: '1.25%', color: 'blue' },
                  { label: '최적 포지션', value: calculations.optimal, percent: '2.25%', color: 'green' },
                  { label: '최대 포지션', value: calculations.perStockMax, percent: '2.5%', color: 'orange' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.positionCard} ${styles[item.color]}`}
                  >
                    <div className={styles.percent}>
                      {item.percent}
                    </div>
                    <div className={styles.label}>{item.label}</div>
                    <div className={styles.value}>
                      {formatCurrency(item.value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 위험도 & 포트폴리오 그리드 */}
            <div className={styles.statsGrid}>
              {/* 위험도 모니터링 */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <TrendingUp className={styles.icon} />
                  <h2>위험도 모니터링</h2>
                </div>

                <div className={styles.riskMonitor}>
                  <div>
                    <div className={styles.riskHeader}>
                      <span>포트폴리오 위험도</span>
                      <span className={styles.safe}>안전 (22%)</span>
                    </div>
                    <div className={styles.progress}>
                      <div 
                        className={styles.bar}
                        style={{ width: '22%' }}
                      ></div>
                    </div>
                  </div>

                  <div className={styles.statusGrid}>
                    <div className={`${styles.status} ${styles.safe}`}>
                      <div className={styles.label}>✅ 안전</div>
                      <div className={styles.value}>5% 이하</div>
                    </div>
                    <div className={`${styles.status} ${styles.danger}`}>
                      <div className={styles.label}>🚨 위험</div>
                      <div className={styles.value}>5% 이상</div>
                    </div>
                  </div>

                  <div className={styles.stopLoss}>
                    <div className={styles.stopLossContent}>
                      <span>종목당 손절금액</span>
                      <span className={styles.amount}>
                        {formatCurrency(calculations.stopLoss)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 포트폴리오 현황 */}
                            {/* 포트폴리오 현황 */}
              <div className={styles.card}>
                <div className={styles.portfolioHeader}>
                  <h2>포트폴리오 현황</h2>
                  <span className={styles.count}>0 / {calculations.maxStocks} 종목</span>
                </div>

                <div className={styles.portfolioContent}>
                  <div className={styles.emptyState}>
                    <div className={styles.message}>아직 종목이 없습니다</div>
                    <button>
                      + 첫 번째 종목 추가하기
                    </button>
                  </div>

                  <div className={styles.portfolioStats}>
                    <div className={styles.stat}>
                      <div className={styles.label}>총 투자금</div>
                      <div>{formatCurrency(0)}</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.label}>남은 금액</div>
                      <div>{formatCurrency(calculations.maxInvestment)}</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.label}>사용률</div>
                      <div>0%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}