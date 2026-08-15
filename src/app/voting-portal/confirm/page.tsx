"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import { Suspense } from "react";
import Link from "next/link";

const candidates = {
  budi: {
    name: "Budi Santoso",
    id: "01",
    major: "Kelas 12, MIPA",
    color: "#00236f", // primary
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM5eTnSIHP-JJbN5qcQYahFvAaGc9f7Va29xKnXOKvmXzt3-atPOG_Es7XACcimC09wgopyq60ZnYRs3DTN04aWAfPVv_L4NoSgJrkcasDRvYVoz6Q2Fexe1LEG5TzbfkFMqYlBnarQ0Ew0LqV2PtwOMIwgqZ6HPTGKfbQMTX_yf8fOuGh4HO690JN7cETAJPfucl1YHEQ5tZXxKkjV5Fj9kS3XTUZvVMQo_8mP1k35QDraxMOeA0P0w"
  },
  siti: {
    name: "Siti Aisyah",
    id: "02",
    major: "Kelas 11, IPS",
    color: "#085ac0", // secondary
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3WrdTEI2ZGuO6w0VyL_a2d57Md_s2rO9Z1r4JCOgPwxlizkuhh-qHnSdng-oUUIfPZPRCUEiYOFUkYKCYdlIGEZcemj_T4wOh5SPwk517YcPrxyRN165yPz8Ko77jjk5OGUNMKtRqzFNpRMs3tXbBENMqdwSYCnnEKOYe21Q_uyoJ6nSxsfI1HSD9qqkfzk12ZttyXS1b20gO-cnErQ0eNmwfTQ_bVCJJOUQKc8N44zyVObBO8SZ6A"
  },
  kevin: {
    name: "Kevin Wijaya",
    id: "03",
    major: "Kelas 12, Kejuruan",
    color: "#1b2b3f", // tertiary
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhlH6aLkPRhmJVLxthjxt3hj3ZFUEwiGu6laFx-wemo1KXvTZ2KrQPsQA6a3w9BPvD37Q5OgHs63-9_DNlSQRHB29qf8VSN7Wj9wi1cU5Dy2X4bDU_Ulv8z8FLWrzbLUK596eqDERAB6hbclc6JiEx30oJiSa07JPY6X6Obp7zJfJizLV5V94rSUhJvr50lGJA3h5kzUM2d8zoUfaFXrWOWIZyXjOqAcJwT-sWlBezxV64J6B7zfHy2Q"
  }
};

function ConfirmStep() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const candidateKey = searchParams.get('candidate') || 'budi';
  const candidate = candidates[candidateKey as keyof typeof candidates] || candidates.budi;

  return (
    <>
      {/* Mobile Header (Rendered here to have access to router) */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl shadow-sm">
          <div className="h-16 px-6 flex items-center justify-between pt-safe">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => router.back()} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e6e8ea] text-[#444651]"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              </button>
              <span className="font-semibold text-lg text-[#00236f]">Konfirmasi</span>
            </div>
          </div>
        </header>
      </div>

      <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-[#f7f9fb]">
        
        {/* Desktop Version */}
        <div className="hidden md:flex flex-1 w-full max-w-[800px] mx-auto px-6 pt-12 pb-24 flex-col gap-12 relative z-10">
          
          {/* Header / Progress Area */}
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#f2f4f6] shadow-sm">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#00236f] text-white flex items-center justify-center text-[14px] font-bold">1</div>
                <div className="w-12 h-1 bg-[#00236f]"></div>
                <div className="w-8 h-8 rounded-full bg-[#00236f] text-white flex items-center justify-center text-[14px] font-bold">2</div>
                <div className="w-12 h-1 bg-[#e0e3e5]"></div>
                <div className="w-8 h-8 rounded-full bg-[#e0e3e5] text-[#191c1e] flex items-center justify-center text-[14px] font-bold">3</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-[#191c1e] tracking-tight">Konfirmasi Pilihan Anda</h1>
              <p className="text-[16px] text-[#444651] max-w-lg mx-auto">
                Pastikan pilihan Anda sudah benar sebelum mengirimkan suara secara final. Perubahan tidak dapat dilakukan setelah ini.
              </p>
            </div>
          </div>

          {/* Selected Candidate Display */}
          <div className="w-full max-w-md mx-auto bg-white rounded-[24px] shadow-sm p-6 border border-[#c5c5d3]/30">
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4" style={{ borderColor: candidate.color }}>
                <img src={candidate.img} alt={candidate.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <span className="text-[14px] font-bold tracking-widest uppercase" style={{ color: candidate.color }}>Kandidat {candidate.id}</span>
                <h2 className="text-3xl font-bold text-[#191c1e]">{candidate.name}</h2>
                <p className="text-[16px] text-[#444651]">{candidate.major}</p>
              </div>
            </div>
          </div>

          {/* Security Badge / Footer Action */}
          <div className="mt-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 bg-[#e6e8ea] px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-[#00236f] text-[20px]">verified_user</span>
              <span className="text-[14px] text-[#191c1e]">Koneksi terenkripsi ujung-ke-ujung (end-to-end)</span>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                className="flex-1 md:flex-none px-8 py-3 rounded-full bg-[#e0e3e5] text-[#191c1e] text-[14px] font-bold hover:bg-[#d8dadc] transition-colors"
                type="button"
                onClick={() => router.back()}
              >
                Kembali
              </button>
              <button 
                className="flex-1 md:flex-none px-8 py-3 rounded-full bg-[#00236f] text-white text-[14px] font-bold hover:scale-105 shadow-md transition-all flex items-center justify-center gap-2"
                type="button"
                onClick={() => router.push('/voting-portal/success')}
              >
                Kirim Suara <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Version */}
        <div className="flex flex-col md:hidden w-full relative pt-16 pb-32 bg-[#f7f9fb]">
          
          {/* Progress Header */}
          <div className="px-6 pt-6 pb-4 bg-[#f7f9fb] sticky top-16 z-40 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[14px] text-[#444651] font-medium">
              <span>Langkah 2 dari 3</span>
              <span className="text-[#00236f] font-semibold">Konfirmasi</span>
            </div>
            <div className="w-full h-1 bg-[#e6e8ea] rounded-full overflow-hidden flex relative">
              <div className="absolute top-0 left-0 h-full bg-[#00236f] rounded-full transition-all duration-500 ease-out" style={{ width: '66%' }}></div>
            </div>
          </div>

          <div className="px-6 mt-4 flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-[24px] font-bold text-[#191c1e] mb-1">Konfirmasi Pilihan</h2>
              <p className="text-[14px] text-[#444651]">Pastikan pilihan Anda sudah benar sebelum mengirimkan suara secara final.</p>
            </div>

            {/* Candidate Card */}
            <div className="w-full bg-white rounded-[24px] shadow-sm p-6 border border-[#c5c5d3]/30 flex flex-col items-center gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 opacity-20 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${candidate.color}, transparent)` }}></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 bg-white z-10" style={{ borderColor: candidate.color }}>
                <img src={candidate.img} alt={candidate.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center flex flex-col gap-1 z-10">
                <span className="text-[14px] font-bold tracking-widest uppercase" style={{ color: candidate.color }}>Kandidat {candidate.id}</span>
                <h2 className="text-[24px] font-bold text-[#191c1e]">{candidate.name}</h2>
                <p className="text-[14px] text-[#444651]">{candidate.major}</p>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 px-6 flex items-center justify-center gap-2 text-[#757682] mb-8">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            <span className="text-[12px] font-medium uppercase tracking-wider">Koneksi Terenkripsi</span>
          </div>

          {/* Sticky Action Area */}
          <div className="fixed bottom-[64px] left-0 w-full px-4 z-50 pb-4 pt-4 bg-white border-t border-[#c5c5d3]/30 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
            <div className="flex gap-3">
              <button 
                className="w-14 h-14 rounded-[20px] bg-[#f2f4f6] text-[#444651] flex items-center justify-center shrink-0 active:scale-95 transition-transform"
                onClick={() => router.back()}
              >
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
              </button>
              <button 
                className="flex-1 font-bold text-[14px] h-14 rounded-[20px] flex items-center justify-center gap-2 transition-all text-white active:scale-95 shadow-md"
                style={{ backgroundColor: candidate.color }}
                onClick={() => router.push('/voting-portal/success')}
              >
                <span>Kirim Suara</span>
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>

        </div>

        {/* Ambient background elements (Desktop) */}
        <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-[#b5c4ff]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#b7c8e1]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      </div>
    </>
  );
}

export default function ConfirmPage() {
  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block"><Header /></div>
      
      <main className="md:pt-20 w-full min-h-screen bg-[#f7f9fb]">
        <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
          <ConfirmStep />
        </Suspense>
      </main>
      
      {/* Desktop Footer */}
      <div className="hidden md:block"><Footer /></div>

      {/* Mobile Bottom Navigation */}
      <nav className="flex md:hidden fixed bottom-0 w-full z-50 pb-safe bg-[#f7f9fb]/90 backdrop-blur-xl shadow-[0_-1px_10px_rgba(0,0,0,0.05)] border-t border-[#c5c5d3]/30">
        <div className="flex justify-around items-center h-16 w-full px-4">
          <Link href="/" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#444651] hover:text-[#085ac0]">
            <span className="material-symbols-outlined text-[20px]">home</span>
            <span className="text-[10px] font-medium">Beranda</span>
          </Link>
          <Link href="/candidates" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#444651] hover:text-[#085ac0]">
            <span className="material-symbols-outlined text-[20px]">groups</span>
            <span className="text-[10px] font-medium">Kandidat</span>
          </Link>
          <Link href="/voting-portal" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#085ac0] bg-[#5b94fd]/20 rounded-xl">
            <span className="material-symbols-outlined text-[20px]">how_to_vote</span>
            <span className="text-[10px] font-medium">Voting</span>
          </Link>
          <Link href="/results" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#444651] hover:text-[#085ac0]">
            <span className="material-symbols-outlined text-[20px]">leaderboard</span>
            <span className="text-[10px] font-medium">Hasil</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
