// app/page.tsx
'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, AlertTriangle, PieChart } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 투자 포트폴리오 관리자
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            수칙을 지키면 수익은 따라옵니다. 포지션 크기와 위험도를 실시간으로 관리하세요.
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          {/* 좌측 사이드바 */}
          <div className="xl:col-span-1 space-y-6">
            {/* 자산 입력 카드 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">총 자산 입력</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    투자 가능 자산
                  </label>
                  <input
                    type="number"
                    value={totalAssets}
                    onChange={(e) => setTotalAssets(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {[50000000, 100000000, 200000000, 500000000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setTotalAssets(amount)}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {formatCurrency(amount).replace('원', '')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 투자 규칙 요약 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-semibold text-gray-900">투자 수칙</h2>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">종목당 투자비중</span>
                  <span className="font-semibold">1.25% - 2.5%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">최대 손절라인</span>
                  <span className="font-semibold text-red-600">-10%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">전체 손실 한도</span>
                  <span className="font-semibold">-6%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">최대 종목수</span>
                  <span className="font-semibold">12개</span>
                </div>
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="xl:col-span-3 space-y-6">
            {/* 포지션 계산기 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <PieChart className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">포지션 계산기</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: '최소 포지션', value: calculations.perStockMin, percent: '1.25%', color: 'blue' },
                  { label: '최적 포지션', value: calculations.optimal, percent: '2.25%', color: 'green' },
                  { label: '최대 포지션', value: calculations.perStockMax, percent: '2.5%', color: 'orange' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 ${
                      item.color === 'green' 
                        ? 'border-green-200 bg-green-50' 
                        : item.color === 'blue'
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-orange-200 bg-orange-50'
                    } text-center`}
                  >
                    <div className={`text-2xl font-bold ${
                      item.color === 'green' ? 'text-green-600' :
                      item.color === 'blue' ? 'text-blue-600' : 'text-orange-600'
                    } mb-2`}>
                      {item.percent}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">{item.label}</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {formatCurrency(item.value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 위험도 & 포트폴리오 그리드 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 위험도 모니터링 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">위험도 모니터링</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700">포트폴리오 위험도</span>
                      <span className="font-semibold text-green-600">안전 (22%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-yellow-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: '22%' }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="text-green-600 font-semibold">✅ 안전</div>
                      <div className="text-sm text-gray-600 mt-1">5% 이하</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                      <div className="text-red-600 font-semibold">🚨 위험</div>
                      <div className="text-sm text-gray-600 mt-1">5% 이상</div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">종목당 손절금액</span>
                      <span className="font-semibold text-red-600">
                        {formatCurrency(calculations.stopLoss)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 포트폴리오 현황 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">포트폴리오 현황</h2>
                  <span className="text-sm text-gray-500">0 / {calculations.maxStocks} 종목</span>
                </div>

                <div className="space-y-4">
                  <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
                    <div className="text-gray-400 mb-2">아직 종목이 없습니다</div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      + 첫 번째 종목 추가하기
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">총 투자금</div>
                      <div>{formatCurrency(0)}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">남은 금액</div>
                      <div>{formatCurrency(calculations.maxInvestment)}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">사용률</div>
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
  );
}