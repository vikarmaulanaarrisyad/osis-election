"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import Link from "next/link";

export default function VotingPortalPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const router = useRouter();

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block"><Header /></div>
      
      {/* Mobile Header */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl shadow-sm">
          <div className="h-16 px-6 flex items-center justify-between pt-safe">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00236f] text-[24px]">how_to_vote</span>
              <span className="font-semibold text-lg text-[#00236f]">Voting</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#00236f] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </header>
      </div>

      <main className="w-full min-h-screen bg-[#f7f9fb]">
        
        {/* Desktop Version */}
        <div className="hidden md:flex flex-col w-full min-h-screen relative overflow-hidden pt-20">
          
          {/* Distraction-free, centered wrapper */}
          <div className="flex-1 w-full max-w-[1000px] mx-auto px-6 pt-12 pb-24 flex flex-col gap-12 relative z-10">
            
            {/* Header / Progress Area */}
            <div className="flex flex-col gap-8 items-center text-center">
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#f2f4f6] shadow-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#00236f] text-white flex items-center justify-center text-[14px] font-bold">1</div>
                  <div className="w-12 h-1 bg-[#00236f]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#e0e3e5] text-[#191c1e] flex items-center justify-center text-[14px] font-bold">2</div>
                  <div className="w-12 h-1 bg-[#e0e3e5]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#e0e3e5] text-[#191c1e] flex items-center justify-center text-[14px] font-bold">3</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold text-[#191c1e] tracking-tight">Pilih Kandidat</h1>
                <p className="text-[16px] text-[#444651] max-w-lg mx-auto">
                  Tinjau kandidat di bawah ini dan pilih calon Ketua OSIS pilihan Anda. Pilihan Anda aman dan rahasia.
                </p>
              </div>
            </div>

            {/* Candidate Grid - Clean & Clear */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Candidate 1 */}
              <div 
                className={`group relative flex flex-col h-full bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden outline-none ${selectedCandidate === 'budi' ? 'ring-2 ring-[#00236f] ring-offset-2' : ''}`}
                onClick={() => setSelectedCandidate('budi')}
              >
                <div className={`absolute inset-0 transition-colors z-0 pointer-events-none ${selectedCandidate === 'budi' ? 'bg-[#00236f]/5' : 'bg-transparent'}`}></div>
                <div className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center bg-white ${selectedCandidate === 'budi' ? 'border-[#00236f] bg-[#00236f]' : 'border-[#c5c5d3]'}`}>
                  <span className={`material-symbols-outlined text-white text-[20px] transition-opacity ${selectedCandidate === 'budi' ? 'opacity-100' : 'opacity-0'}`} style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div className="relative w-full aspect-[4/3] bg-[#f2f4f6] z-10">
                  <img 
                    className={`w-full h-full object-cover mix-blend-multiply transition-all duration-300 ${selectedCandidate === 'budi' ? 'grayscale-0 opacity-100' : 'grayscale opacity-80 group-hover:grayscale-0'}`} 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM5eTnSIHP-JJbN5qcQYahFvAaGc9f7Va29xKnXOKvmXzt3-atPOG_Es7XACcimC09wgopyq60ZnYRs3DTN04aWAfPVv_L4NoSgJrkcasDRvYVoz6Q2Fexe1LEG5TzbfkFMqYlBnarQ0Ew0LqV2PtwOMIwgqZ6HPTGKfbQMTX_yf8fOuGh4HO690JN7cETAJPfucl1YHEQ5tZXxKkjV5Fj9kS3XTUZvVMQo_8mP1k35QDraxMOeA0P0w"
                    alt="Budi Santoso"
                  />
                </div>
                <div className="flex flex-col p-6 gap-3 relative z-10 flex-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-bold text-[#085ac0] tracking-widest uppercase">Kandidat 01</span>
                    <h2 className="text-2xl font-bold text-[#191c1e]">Budi Santoso</h2>
                  </div>
                  <p className="text-[14px] text-[#444651] line-clamp-3">Berfokus pada keunggulan akademik dan peningkatan fasilitas sekolah. Visi termasuk perpustakaan 24/7 dan lab teknologi modern.</p>
                  <button 
                    className="mt-auto pt-4 flex items-center gap-1.5 text-[14px] font-bold text-[#00236f] hover:text-[#29428c] transition-colors justify-start" 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/candidates");
                    }}
                  >
                    Lihat Detail <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Candidate 2 */}
              <div 
                className={`group relative flex flex-col h-full bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden outline-none ${selectedCandidate === 'siti' ? 'ring-2 ring-[#00236f] ring-offset-2' : ''}`}
                onClick={() => setSelectedCandidate('siti')}
              >
                <div className={`absolute inset-0 transition-colors z-0 pointer-events-none ${selectedCandidate === 'siti' ? 'bg-[#00236f]/5' : 'bg-transparent'}`}></div>
                <div className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center bg-white ${selectedCandidate === 'siti' ? 'border-[#00236f] bg-[#00236f]' : 'border-[#c5c5d3]'}`}>
                  <span className={`material-symbols-outlined text-white text-[20px] transition-opacity ${selectedCandidate === 'siti' ? 'opacity-100' : 'opacity-0'}`} style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div className="relative w-full aspect-[4/3] bg-[#f2f4f6] z-10">
                  <img 
                    className={`w-full h-full object-cover mix-blend-multiply transition-all duration-300 ${selectedCandidate === 'siti' ? 'grayscale-0 opacity-100' : 'grayscale opacity-80 group-hover:grayscale-0'}`} 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL3WrdTEI2ZGuO6w0VyL_a2d57Md_s2rO9Z1r4JCOgPwxlizkuhh-qHnSdng-oUUIfPZPRCUEiYOFUkYKCYdlIGEZcemj_T4wOh5SPwk517YcPrxyRN165yPz8Ko77jjk5OGUNMKtRqzFNpRMs3tXbBENMqdwSYCnnEKOYe21Q_uyoJ6nSxsfI1HSD9qqkfzk12ZttyXS1b20gO-cnErQ0eNmwfTQ_bVCJJOUQKc8N44zyVObBO8SZ6A"
                    alt="Siti Aisyah"
                  />
                </div>
                <div className="flex flex-col p-6 gap-3 relative z-10 flex-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-bold text-[#085ac0] tracking-widest uppercase">Kandidat 02</span>
                    <h2 className="text-2xl font-bold text-[#191c1e]">Siti Aisyah</h2>
                  </div>
                  <p className="text-[14px] text-[#444651] line-clamp-3">Mengadvokasi kesejahteraan siswa dan dukungan kesehatan mental. Mengusulkan program kebugaran mingguan dan jaringan sebaya yang lebih kuat.</p>
                  <button 
                    className="mt-auto pt-4 flex items-center gap-1.5 text-[14px] font-bold text-[#00236f] hover:text-[#29428c] transition-colors justify-start" 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/candidates");
                    }}
                  >
                    Lihat Detail <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Candidate 3 */}
              <div 
                className={`group relative flex flex-col h-full bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden outline-none ${selectedCandidate === 'kevin' ? 'ring-2 ring-[#00236f] ring-offset-2' : ''}`}
                onClick={() => setSelectedCandidate('kevin')}
              >
                <div className={`absolute inset-0 transition-colors z-0 pointer-events-none ${selectedCandidate === 'kevin' ? 'bg-[#00236f]/5' : 'bg-transparent'}`}></div>
                <div className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center bg-white ${selectedCandidate === 'kevin' ? 'border-[#00236f] bg-[#00236f]' : 'border-[#c5c5d3]'}`}>
                  <span className={`material-symbols-outlined text-white text-[20px] transition-opacity ${selectedCandidate === 'kevin' ? 'opacity-100' : 'opacity-0'}`} style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div className="relative w-full aspect-[4/3] bg-[#f2f4f6] z-10">
                  <img 
                    className={`w-full h-full object-cover mix-blend-multiply transition-all duration-300 ${selectedCandidate === 'kevin' ? 'grayscale-0 opacity-100' : 'grayscale opacity-80 group-hover:grayscale-0'}`} 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhlH6aLkPRhmJVLxthjxt3hj3ZFUEwiGu6laFx-wemo1KXvTZ2KrQPsQA6a3w9BPvD37Q5OgHs63-9_DNlSQRHB29qf8VSN7Wj9wi1cU5Dy2X4bDU_Ulv8z8FLWrzbLUK596eqDERAB6hbclc6JiEx30oJiSa07JPY6X6Obp7zJfJizLV5V94rSUhJvr50lGJA3h5kzUM2d8zoUfaFXrWOWIZyXjOqAcJwT-sWlBezxV64J6B7zfHy2Q"
                    alt="Kevin Wijaya"
                  />
                </div>
                <div className="flex flex-col p-6 gap-3 relative z-10 flex-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-bold text-[#085ac0] tracking-widest uppercase">Kandidat 03</span>
                    <h2 className="text-2xl font-bold text-[#191c1e]">Kevin Wijaya</h2>
                  </div>
                  <p className="text-[14px] text-[#444651] line-clamp-3">Memperjuangkan keberlanjutan lingkungan dan inisiatif sekolah ramah lingkungan. Bertujuan mewujudkan kantin bebas sampah.</p>
                  <button 
                    className="mt-auto pt-4 flex items-center gap-1.5 text-[14px] font-bold text-[#00236f] hover:text-[#29428c] transition-colors justify-start" 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/candidates");
                    }}
                  >
                    Lihat Detail <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Security Badge / Footer Action */}
            <div className="mt-auto pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 bg-[#e6e8ea] px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-[#00236f] text-[20px]">verified_user</span>
                <span className="text-[14px] text-[#191c1e]">Koneksi terenkripsi ujung-ke-ujung (end-to-end)</span>
              </div>
              
              <div className="flex gap-4 w-full md:w-auto">
                <button 
                  className="flex-1 md:flex-none px-8 py-3 rounded-full bg-[#e0e3e5] text-[#191c1e] text-[14px] font-bold hover:bg-[#d8dadc] transition-colors"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/');
                  }}
                >
                  Batal
                </button>
                <button 
                  className={`flex-1 md:flex-none px-8 py-3 rounded-full text-[14px] font-bold transition-all flex items-center justify-center gap-2 ${
                    selectedCandidate 
                      ? 'bg-[#00236f] text-white hover:scale-105 shadow-md' 
                      : 'bg-[#c5c5d3] text-[#191c1e]/50 cursor-not-allowed'
                  }`}
                  type="button"
                  disabled={!selectedCandidate}
                  onClick={(e) => {
                    e.preventDefault();
                    if (selectedCandidate) {
                      router.push(`/voting-portal/confirm?candidate=${selectedCandidate}`);
                    }
                  }}
                >
                  Lanjutkan <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>

          {/* Ambient background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b5c4ff]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#b7c8e1]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        </div>

        {/* Mobile Version */}
        <div className="flex flex-col md:hidden w-full relative pt-16 pb-24 bg-[#f7f9fb]">
          
          {/* Progress Header */}
          <div className="px-6 pt-6 pb-4 bg-[#f7f9fb] sticky top-16 z-40 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[14px] text-[#444651] font-medium">
              <span>Langkah 1 dari 3</span>
              <span className="text-[#00236f] font-semibold">Pemilihan Ketua OSIS</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-[#e6e8ea] rounded-full overflow-hidden flex relative">
              <div className="absolute top-0 left-0 h-full bg-[#00236f] rounded-full transition-all duration-500 ease-out" style={{ width: '33%' }}></div>
            </div>
          </div>

          {/* Instruction Text */}
          <div className="px-6 mb-6 mt-4">
            <h2 className="text-[24px] font-bold text-[#191c1e] mb-1">Pilih Kandidat</h2>
            <p className="text-[16px] text-[#444651]">Ketuk kartu kandidat untuk memilih calon Ketua OSIS pilihan Anda.</p>
          </div>

          {/* Candidate List */}
          <div className="px-6 flex flex-col gap-4">
            
            {/* Candidate 1 */}
            <button 
              className={`w-full text-left rounded-[24px] p-4 flex items-center gap-4 relative overflow-hidden group transition-all active:scale-[0.98] ${
                selectedCandidate === 'budi' ? 'bg-[#00236f]/10 shadow-md ring-2 ring-[#00236f] ring-inset' : 'bg-white shadow-sm'
              }`}
              onClick={() => setSelectedCandidate('budi')}
            >
              <div className="w-16 h-16 rounded-full bg-[#e6e8ea] overflow-hidden shrink-0 relative">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM5eTnSIHP-JJbN5qcQYahFvAaGc9f7Va29xKnXOKvmXzt3-atPOG_Es7XACcimC09wgopyq60ZnYRs3DTN04aWAfPVv_L4NoSgJrkcasDRvYVoz6Q2Fexe1LEG5TzbfkFMqYlBnarQ0Ew0LqV2PtwOMIwgqZ6HPTGKfbQMTX_yf8fOuGh4HO690JN7cETAJPfucl1YHEQ5tZXxKkjV5Fj9kS3XTUZvVMQo_8mP1k35QDraxMOeA0P0w"
                  alt="Budi Santoso"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-bold text-[#00236f] mb-1">01</div>
                <h3 className="text-[18px] font-bold text-[#191c1e] truncate">Budi Santoso</h3>
                <p className="text-[14px] text-[#444651] truncate">Kelas 12 MIPA</p>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                selectedCandidate === 'budi' ? 'bg-[#00236f]' : 'bg-[#eceef0]'
              }`}>
                <span className={`material-symbols-outlined text-[16px] transition-opacity duration-300 ${
                  selectedCandidate === 'budi' ? 'opacity-100 text-white' : 'opacity-0'
                }`}>check</span>
              </div>
            </button>

            {/* Candidate 2 */}
            <button 
              className={`w-full text-left rounded-[24px] p-4 flex items-center gap-4 relative overflow-hidden group transition-all active:scale-[0.98] ${
                selectedCandidate === 'siti' ? 'bg-[#00236f]/10 shadow-md ring-2 ring-[#00236f] ring-inset' : 'bg-white shadow-sm'
              }`}
              onClick={() => setSelectedCandidate('siti')}
            >
              <div className="w-16 h-16 rounded-full bg-[#e6e8ea] overflow-hidden shrink-0 relative">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL3WrdTEI2ZGuO6w0VyL_a2d57Md_s2rO9Z1r4JCOgPwxlizkuhh-qHnSdng-oUUIfPZPRCUEiYOFUkYKCYdlIGEZcemj_T4wOh5SPwk517YcPrxyRN165yPz8Ko77jjk5OGUNMKtRqzFNpRMs3tXbBENMqdwSYCnnEKOYe21Q_uyoJ6nSxsfI1HSD9qqkfzk12ZttyXS1b20gO-cnErQ0eNmwfTQ_bVCJJOUQKc8N44zyVObBO8SZ6A"
                  alt="Siti Aisyah"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-bold text-[#085ac0] mb-1">02</div>
                <h3 className="text-[18px] font-bold text-[#191c1e] truncate">Siti Aisyah</h3>
                <p className="text-[14px] text-[#444651] truncate">Kelas 11 IPS</p>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                selectedCandidate === 'siti' ? 'bg-[#00236f]' : 'bg-[#eceef0]'
              }`}>
                <span className={`material-symbols-outlined text-[16px] transition-opacity duration-300 ${
                  selectedCandidate === 'siti' ? 'opacity-100 text-white' : 'opacity-0'
                }`}>check</span>
              </div>
            </button>

            {/* Candidate 3 */}
            <button 
              className={`w-full text-left rounded-[24px] p-4 flex items-center gap-4 relative overflow-hidden group transition-all active:scale-[0.98] ${
                selectedCandidate === 'kevin' ? 'bg-[#00236f]/10 shadow-md ring-2 ring-[#00236f] ring-inset' : 'bg-white shadow-sm'
              }`}
              onClick={() => setSelectedCandidate('kevin')}
            >
              <div className="w-16 h-16 rounded-full bg-[#e6e8ea] overflow-hidden shrink-0 relative">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhlH6aLkPRhmJVLxthjxt3hj3ZFUEwiGu6laFx-wemo1KXvTZ2KrQPsQA6a3w9BPvD37Q5OgHs63-9_DNlSQRHB29qf8VSN7Wj9wi1cU5Dy2X4bDU_Ulv8z8FLWrzbLUK596eqDERAB6hbclc6JiEx30oJiSa07JPY6X6Obp7zJfJizLV5V94rSUhJvr50lGJA3h5kzUM2d8zoUfaFXrWOWIZyXjOqAcJwT-sWlBezxV64J6B7zfHy2Q"
                  alt="Kevin Wijaya"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-bold text-[#1b2b3f] mb-1">03</div>
                <h3 className="text-[18px] font-bold text-[#191c1e] truncate">Kevin Wijaya</h3>
                <p className="text-[14px] text-[#444651] truncate">Kelas 12 Kejuruan</p>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                selectedCandidate === 'kevin' ? 'bg-[#00236f]' : 'bg-[#eceef0]'
              }`}>
                <span className={`material-symbols-outlined text-[16px] transition-opacity duration-300 ${
                  selectedCandidate === 'kevin' ? 'opacity-100 text-white' : 'opacity-0'
                }`}>check</span>
              </div>
            </button>

          </div>

          {/* Security Badge */}
          <div className="mt-8 px-6 flex items-center justify-center gap-2 text-[#757682] mb-32">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span className="text-[12px] font-medium uppercase tracking-wider">Koneksi Terenkripsi</span>
          </div>

          {/* Sticky Action Area */}
          <div className="fixed bottom-[64px] left-0 w-full px-4 z-40 pb-4 pt-8 bg-gradient-to-t from-[#f7f9fb] via-[#f7f9fb]/90 to-transparent pointer-events-none">
            <div className="pointer-events-auto max-w-[500px] mx-auto">
              <button 
                className={`w-full font-bold text-[14px] h-14 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm ${
                  selectedCandidate 
                    ? 'bg-[#00236f] text-white opacity-100 scale-105 shadow-md' 
                    : 'bg-[#e6e8ea] text-[#757682] opacity-80 cursor-not-allowed'
                }`}
                disabled={!selectedCandidate}
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedCandidate) {
                    router.push(`/voting-portal/confirm?candidate=${selectedCandidate}`);
                  }
                }}
              >
                <span>Lanjutkan</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>

      </main>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <Footer />
      </div>

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
