// app/page.tsx - 메인 대시보드
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* 📊 헤더 */}
      <header className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">🎯 투자 포트폴리오 관리자</h1>
        <p className="text-gray-600">수칙을 지키면 수익은 따라옵니다</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 💰 좌측: 자산 입력 & 기본 정보 */}
        <div className="lg:col-span-1 space-y-6">
          {/* 자산 입력 카드 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">💰 총 자산 입력</h2>
            <div className="space-y-4">
              <input
                type="number"
                placeholder="예: 100,000,000"
                className="w-full p-3 border border-gray-300 rounded-lg text-xl text-right"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                계산하기
              </button>
            </div>
          </div>

          {/* 📈 요약 카드 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">📊 투자 요약</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">총 투자 가능금</span>
                <span className="font-semibold">50,000,000원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">종목당 투자금</span>
                <span className="font-semibold">1,250,000원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">손절 라인</span>
                <span className="font-semibold text-red-600">-100,000원</span>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 중앙: 포트폴리오 & 위험도 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 🎯 포지션 계산기 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">🎯 포지션 계산기</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1.25%</div>
                <div className="text-sm text-gray-600">최소 포지션</div>
                <div className="font-semibold">1,250,000원</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="text-2xl font-bold text-green-600">2.25%</div>
                <div className="text-sm text-gray-600">최적 포지션</div>
                <div className="font-semibold">2,250,000원</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">2.5%</div>
                <div className="text-sm text-gray-600">최대 포지션</div>
                <div className="font-semibold">2,500,000원</div>
              </div>
            </div>
          </div>

          {/* ⚠️ 위험도 모니터링 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">⚠️ 위험도 모니터링</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>포트폴리오 위험도</span>
                  <span className="text-green-600">22% (안전)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '22%'}}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="font-semibold text-red-600">🚨 위험 경계</div>
                  <div>5% 이상</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="font-semibold text-green-600">✅ 안전 영역</div>
                  <div>5% 이하</div>
                </div>
              </div>
            </div>
          </div>

          {/* 📋 포트폴리오 현황 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">📋 현재 포트폴리오</h2>
            <div className="space-y-3">
              {['삼성전자', 'SK하이닉스', '네이버'].map((stock, index) => (
                <div key={index} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-semibold">{stock}</div>
                    <div className="text-sm text-gray-600">2.1% 포지션</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">+2.3%</div>
                    <div className="text-sm text-green-600">62,000원</div>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400">
                + 종목 추가하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
