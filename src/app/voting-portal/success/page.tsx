"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl shadow-sm">
          <div className="h-16 px-6 flex items-center justify-center pt-safe">
            <span className="font-semibold text-lg text-[#00236f]">Selesai</span>
          </div>
        </header>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header />
      </div>

      <main className="w-full min-h-screen bg-[#f7f9fb] flex flex-col md:block">
        
        {/* Desktop Version */}
        <div className="hidden md:flex flex-col w-full h-full relative overflow-hidden pt-20">
          
          <div className="flex-1 w-full max-w-[800px] mx-auto px-6 pt-12 pb-24 flex flex-col gap-12 relative z-10">
            
            {/* Header / Progress Area */}
            <div className="flex flex-col gap-8 items-center text-center">
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#f2f4f6] shadow-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#00236f] text-white flex items-center justify-center text-[14px] font-bold">1</div>
                  <div className="w-12 h-1 bg-[#00236f]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#00236f] text-white flex items-center justify-center text-[14px] font-bold">2</div>
                  <div className="w-12 h-1 bg-[#00236f]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#00236f] text-white flex items-center justify-center text-[14px] font-bold">3</div>
                </div>
              </div>
            </div>

            {/* Success Message Display */}
            <div className="w-full max-w-lg mx-auto bg-white rounded-[32px] shadow-sm p-10 border border-[#c5c5d3]/30 flex flex-col items-center text-center gap-6 mt-4">
              <div className="w-24 h-24 rounded-full bg-[#d8e2ff] flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[#00236f] text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h1 className="text-3xl font-bold text-[#191c1e]">Suara Berhasil Terkirim</h1>
              <p className="text-[16px] text-[#444651] leading-relaxed">
                Terima kasih! Partisipasi Anda sangat berarti bagi masa depan OSIS. Suara Anda telah berhasil dienkripsi dan direkam secara anonim ke dalam sistem.
              </p>
              
              <button 
                className="mt-6 w-full px-8 py-4 rounded-full bg-[#00236f] text-white text-[16px] font-bold hover:scale-105 shadow-md transition-all flex items-center justify-center gap-2"
                type="button"
                onClick={() => router.push('/results')}
              >
                Lihat Hasil Sementara <span className="material-symbols-outlined text-[20px]">leaderboard</span>
              </button>
            </div>

          </div>

          {/* Ambient background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b5c4ff]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#b7c8e1]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        </div>

        {/* Mobile Version */}
        <div className="flex flex-col md:hidden flex-1 w-full relative pt-16 pb-32 bg-[#f7f9fb]">
          
          {/* Progress Header */}
          <div className="px-6 pt-6 pb-4 bg-[#f7f9fb] sticky top-16 z-40 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[14px] text-[#444651] font-medium">
              <span>Langkah 3 dari 3</span>
              <span className="text-[#00236f] font-semibold">Selesai</span>
            </div>
            <div className="w-full h-1 bg-[#e6e8ea] rounded-full overflow-hidden flex relative">
              <div className="absolute top-0 left-0 h-full bg-[#00236f] rounded-full transition-all duration-500 ease-out" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="px-6 mt-12 flex flex-col items-center text-center gap-6 relative z-10">
            <div className="w-24 h-24 rounded-full bg-[#dce1ff] flex items-center justify-center mb-2 shadow-sm animate-[bounce_1s_ease-in-out_1]">
              <span className="material-symbols-outlined text-[#00236f] text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div>
              <h2 className="text-[28px] font-bold text-[#191c1e] mb-3 leading-tight">Suara Berhasil Terkirim</h2>
              <p className="text-[14px] text-[#444651] leading-relaxed max-w-xs mx-auto">
                Terima kasih! Suara Anda telah berhasil direkam secara anonim. Partisipasi Anda sangat berarti bagi masa depan OSIS.
              </p>
            </div>
          </div>

          {/* Sticky Action Area */}
          <div className="fixed bottom-0 left-0 w-full px-4 z-50 pb-safe-bottom pt-4 bg-transparent">
            <div className="pb-6">
              <button 
                className="w-full font-bold text-[14px] h-14 rounded-full flex items-center justify-center gap-2 transition-all bg-[#00236f] text-white active:scale-95 shadow-lg"
                onClick={() => router.push('/results')}
              >
                <span>Lihat Hasil Sementara</span>
                <span className="material-symbols-outlined text-[20px]">leaderboard</span>
              </button>
            </div>
          </div>

          {/* Mobile Ambient background elements */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00236f]/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/2"></div>
        </div>

      </main>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
}
