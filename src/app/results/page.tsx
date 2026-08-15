import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import Link from "next/link";

export default function ResultsPage() {
  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block"><Header /></div>
      
      {/* Mobile Header */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl shadow-sm">
          <div className="h-16 px-6 flex items-center justify-between pt-safe">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00236f] text-[24px]">leaderboard</span>
              <span className="font-semibold text-lg text-[#00236f]">Hasil Sementara</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#00236f] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </header>
      </div>

      <main className="w-full min-h-screen bg-[#f7f9fb]">
        
        {/* Desktop Version */}
        <div className="hidden md:flex flex-col w-full relative pt-20">
          <div className="max-w-[1200px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 py-10">
            
            {/* Summary Section */}
            <div className="lg:col-span-12 flex flex-col mb-2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <h2 className="text-4xl font-bold text-[#191c1e] mb-2">Hasil Pemilihan Langsung</h2>
                  <p className="text-lg text-[#444651] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                    Update Real-time aktif
                  </p>
                </div>
                <div className="bg-[#e6e8ea] rounded-xl px-8 py-5 flex items-center gap-8 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-[#444651] uppercase tracking-wider mb-1">Total Partisipasi</span>
                    <span className="text-5xl font-bold text-[#00236f]">78%</span>
                  </div>
                  <div className="w-px h-16 bg-[#c5c5d3]/50"></div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-[#444651] uppercase tracking-wider mb-1">Suara Masuk</span>
                    <span className="text-3xl font-bold text-[#191c1e] leading-[48px]">1,245</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Results Column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Overall Standings */}
              <section className="bg-[#f2f4f6] rounded-[24px] p-8">
                <h3 className="text-xl font-bold text-[#191c1e] mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00236f] text-[24px]">leaderboard</span>
                  Klasemen Sementara: Calon Ketua OSIS
                </h3>
                <div className="flex flex-col gap-8">
                  
                  {/* Candidate 1 */}
                  <div className="group">
                    <div className="flex justify-between items-end mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#213b85] flex items-center justify-center text-white text-xl font-medium">BS</div>
                        <div>
                          <h4 className="text-lg text-[#191c1e] font-semibold">Budi Santoso</h4>
                          <span className="text-[14px] text-[#444651]">Kandidat 01</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-[#00236f]">45%</span>
                        <p className="text-[14px] text-[#444651]">560 suara</p>
                      </div>
                    </div>
                    <div className="h-3 w-full bg-[#e0e3e5] rounded-full overflow-hidden">
                      <div className="h-full bg-[#00236f] rounded-full transition-all duration-1000 ease-out" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  {/* Candidate 2 */}
                  <div className="group">
                    <div className="flex justify-between items-end mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#5b94fd] flex items-center justify-center text-[#001a42] text-xl font-medium">SA</div>
                        <div>
                          <h4 className="text-lg text-[#191c1e] font-semibold">Siti Aisyah</h4>
                          <span className="text-[14px] text-[#444651]">Kandidat 02</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-[#085ac0]">38%</span>
                        <p className="text-[14px] text-[#444651]">473 suara</p>
                      </div>
                    </div>
                    <div className="h-3 w-full bg-[#e0e3e5] rounded-full overflow-hidden">
                      <div className="h-full bg-[#085ac0] rounded-full transition-all duration-1000 ease-out" style={{ width: '38%' }}></div>
                    </div>
                  </div>

                  {/* Candidate 3 */}
                  <div className="group">
                    <div className="flex justify-between items-end mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#314156] flex items-center justify-center text-white text-xl font-medium">KW</div>
                        <div>
                          <h4 className="text-lg text-[#191c1e] font-semibold">Kevin Wijaya</h4>
                          <span className="text-[14px] text-[#444651]">Kandidat 03</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-[#1b2b3f]">17%</span>
                        <p className="text-[14px] text-[#444651]">212 suara</p>
                      </div>
                    </div>
                    <div className="h-3 w-full bg-[#e0e3e5] rounded-full overflow-hidden">
                      <div className="h-full bg-[#1b2b3f] rounded-full transition-all duration-1000 ease-out" style={{ width: '17%' }}></div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Grade Breakdown Chart area */}
              <section className="bg-[#f2f4f6] rounded-[24px] p-8">
                <h3 className="text-xl font-bold text-[#191c1e] mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00236f] text-[24px]">pie_chart</span>
                  Tingkat Partisipasi per Angkatan
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  
                  {/* Grade 9 */}
                  <div className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="relative w-[72px] h-[72px] mb-3">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-[#e0e3e5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        <path className="text-[#00236f]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="65, 100" strokeWidth="3.5"></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-[#191c1e]">65%</div>
                    </div>
                    <span className="text-[14px] text-[#444651]">Kelas 9</span>
                  </div>
                  
                  {/* Grade 10 */}
                  <div className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="relative w-[72px] h-[72px] mb-3">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-[#e0e3e5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        <path className="text-[#085ac0]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="72, 100" strokeWidth="3.5"></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-[#191c1e]">72%</div>
                    </div>
                    <span className="text-[14px] text-[#444651]">Kelas 10</span>
                  </div>
                  
                  {/* Grade 11 */}
                  <div className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="relative w-[72px] h-[72px] mb-3">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-[#e0e3e5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        <path className="text-[#1b2b3f]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="88, 100" strokeWidth="3.5"></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-[#191c1e]">88%</div>
                    </div>
                    <span className="text-[14px] text-[#444651]">Kelas 11</span>
                  </div>
                  
                  {/* Grade 12 */}
                  <div className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="relative w-[72px] h-[72px] mb-3">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-[#e0e3e5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        <path className="text-[#191c1e]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92, 100" strokeWidth="3.5"></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-[#191c1e]">92%</div>
                    </div>
                    <span className="text-[14px] text-[#444651]">Kelas 12</span>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Rail: Activity & Polling */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Live Activity Feed */}
              <section className="bg-[#f2f4f6] rounded-[24px] p-8 flex flex-col h-[400px]">
                <h3 className="text-xl font-bold text-[#191c1e] mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#444651] text-[24px]">history</span>
                  Aktivitas Terbaru
                </h3>
                <div className="flex-1 overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f2f4f6] to-transparent z-10 pointer-events-none"></div>
                  <div className="flex flex-col gap-5 relative z-0 h-full overflow-y-auto pr-2" style={{ scrollbarWidth: 'none' }}>
                    
                    {/* Activity Item 1 */}
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00236f] mt-2 shrink-0"></div>
                      <div className="flex flex-col">
                        <p className="text-[13px] text-[#191c1e]">Suara masuk dari <span className="font-semibold">Kelas 11 MIPA</span></p>
                        <span className="text-[13px] font-semibold text-[#444651] mt-0.5">Baru saja</span>
                      </div>
                    </div>
                    
                    {/* Activity Item 2 */}
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#085ac0] mt-2 shrink-0"></div>
                      <div className="flex flex-col">
                        <p className="text-[13px] text-[#191c1e]">Suara masuk dari <span className="font-semibold">Kelas 12 IPS</span></p>
                        <span className="text-[13px] font-semibold text-[#444651] mt-0.5">2 menit lalu</span>
                      </div>
                    </div>
                    
                    {/* Activity Item 3 */}
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e0e3e5] mt-2 shrink-0"></div>
                      <div className="flex flex-col">
                        <p className="text-[13px] text-[#191c1e]">Sistem pencatatan suara terkunci sementara</p>
                        <span className="text-[13px] font-semibold text-[#444651] mt-0.5">15 menit lalu</span>
                      </div>
                    </div>
                    
                    {/* Activity Item 4 */}
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00236f] mt-2 shrink-0"></div>
                      <div className="flex flex-col">
                        <p className="text-[13px] text-[#191c1e]">Suara masuk dari <span className="font-semibold">Kelas 10 Kejuruan</span></p>
                        <span className="text-[13px] font-semibold text-[#444651] mt-0.5">18 menit lalu</span>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Context Image/Graphic */}
              <section className="bg-[#00164e] rounded-[24px] overflow-hidden relative shadow-md text-white min-h-[220px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWy7eWjYfFBqCTQOvFlsnkWo1EpFrpEBSCv1hOv76oKCem6Ftwt-tl0ivpgkgO8Q7LK0_U5NOV--oQsrhFa2rFzPD7CJFDpT47UorQnEDWd7WXi3KcrQniDr4GNM39M1BFesgibcRfp2L75noWHE2c8pQBi_NksVpVWJB90avT3XM11YenwkWcYEjqssICH_oJbcaSD88s0r4prKERmj9tMP9_reqKaUZPhOOWKXUyQhzHgALj0kf8sA')" }}
                ></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[220px] bg-gradient-to-t from-[#00164e] to-[#00164e]/40">
                  <h4 className="text-xl font-bold mb-2 text-white">Pastikan Suaramu Terdengar</h4>
                  <p className="text-[14px] text-white/90 leading-relaxed">Pemilihan ditutup dalam 2 jam. Setiap suara membentuk masa depan siswa.</p>
                </div>
              </section>

            </div>

          </div>
        </div>

        {/* Mobile Version */}
        <div className="flex flex-col md:hidden w-full pt-20 pb-24 px-4 gap-6 bg-[#f7f9fb]">
          
          {/* Hero: Live Indicator & Turnout */}
          <div className="bg-white rounded-[24px] shadow-sm p-6 flex flex-col gap-4 relative overflow-hidden">
            {/* Subtle decorative background gradient */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#00236f]/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-[#085ac0]/5 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-2 bg-[#ffdad6] text-[#93000a] px-3 py-1.5 rounded-full w-max shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                <span className="text-[14px] font-bold tracking-wider">LIVE RESULTS</span>
              </div>
              <span className="text-[14px] text-[#757682] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">sync</span> Baru saja
              </span>
            </div>
            
            <div className="z-10 mt-2 flex flex-col gap-1">
              <span className="block text-[18px] text-[#444651]">Total Partisipasi Siswa</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[48px] font-bold text-[#00236f] tracking-tight">78%</span>
                <div className="flex items-center text-[#00236f] bg-[#00236f]/10 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span className="text-[12px] font-bold ml-1">+4% jam ini</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Standings */}
          <div className="flex flex-col gap-4 mt-2">
            <h2 className="text-[20px] font-bold text-[#191c1e]">Klasemen Sementara</h2>
            <div className="bg-[#f2f4f6] rounded-[24px] p-6 flex flex-col gap-6 shadow-sm">
              
              {/* Candidate 1: Budi */}
              <div className="flex flex-col gap-2 relative">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#00236f] flex items-center justify-center text-white text-[10px] font-bold">1</div>
                    <span className="text-[14px] font-bold text-[#191c1e]">Budi Santoso</span>
                  </div>
                  <span className="text-[14px] font-bold text-[#00236f]">45%</span>
                </div>
                <div className="w-full h-4 bg-[#e0e3e5] rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-[#00236f] rounded-full relative overflow-hidden transition-all duration-1000" style={{ width: '45%' }}>
                    {/* Simulated shimmer effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
                <span className="text-[11px] text-[#444651] text-right w-full block mt-0.5">560 suara</span>
              </div>

              {/* Candidate 2: Siti */}
              <div className="flex flex-col gap-2 relative">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#5b94fd] flex items-center justify-center text-[#002c66] text-[10px] font-bold">2</div>
                    <span className="text-[14px] font-bold text-[#191c1e]">Siti Aisyah</span>
                  </div>
                  <span className="text-[14px] font-bold text-[#085ac0]">38%</span>
                </div>
                <div className="w-full h-4 bg-[#e0e3e5] rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-[#085ac0] rounded-full relative overflow-hidden transition-all duration-1000" style={{ width: '38%' }}></div>
                </div>
                <span className="text-[11px] text-[#444651] text-right w-full block mt-0.5">473 suara</span>
              </div>

              {/* Candidate 3: Kevin */}
              <div className="flex flex-col gap-2 relative">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#314156] flex items-center justify-center text-white text-[10px] font-bold">3</div>
                    <span className="text-[14px] font-bold text-[#191c1e]">Kevin Wijaya</span>
                  </div>
                  <span className="text-[14px] font-bold text-[#1b2b3f]">17%</span>
                </div>
                <div className="w-full h-4 bg-[#e0e3e5] rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-[#1b2b3f] rounded-full relative overflow-hidden transition-all duration-1000" style={{ width: '17%' }}></div>
                </div>
                <span className="text-[11px] text-[#444651] text-right w-full block mt-0.5">212 suara</span>
              </div>

            </div>
          </div>

          {/* Grade Level Turnout */}
          <div className="flex flex-col gap-4 mt-2">
            <h2 className="text-[20px] font-bold text-[#191c1e]">Partisipasi per Kelas</h2>
            <div className="grid grid-cols-2 gap-4">
              
              {/* Kelas 12 */}
              <div className="bg-[#f2f4f6] rounded-xl p-4 flex flex-col items-center justify-center shadow-sm gap-2">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-[#e0e3e5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5"></path>
                    <path className="text-[#00236f]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="88, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[14px] font-bold text-[#00236f]">88%</div>
                </div>
                <div className="text-center mt-1">
                  <div className="text-[14px] font-bold text-[#191c1e]">Kelas 12</div>
                  <div className="text-[11px] text-[#444651]">Memimpin</div>
                </div>
              </div>

              {/* Kelas 11 */}
              <div className="bg-[#f2f4f6] rounded-xl p-4 flex flex-col items-center justify-center shadow-sm gap-2">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-[#e0e3e5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5"></path>
                    <path className="text-[#085ac0]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="76, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[14px] font-bold text-[#085ac0]">76%</div>
                </div>
                <div className="text-center mt-1">
                  <div className="text-[14px] font-bold text-[#191c1e]">Kelas 11</div>
                </div>
              </div>

              {/* Kelas 10 */}
              <div className="bg-[#f2f4f6] rounded-xl p-4 flex flex-col items-center justify-center shadow-sm gap-2">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-[#e0e3e5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5"></path>
                    <path className="text-[#1b2b3f]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="71, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[14px] font-bold text-[#1b2b3f]">71%</div>
                </div>
                <div className="text-center mt-1">
                  <div className="text-[14px] font-bold text-[#191c1e]">Kelas 10</div>
                </div>
              </div>

              {/* Kelas 9 */}
              <div className="bg-[#f2f4f6] rounded-xl p-4 flex flex-col items-center justify-center shadow-sm gap-2">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-[#e0e3e5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5"></path>
                    <path className="text-[#444651]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="62, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[14px] font-bold text-[#444651]">62%</div>
                </div>
                <div className="text-center mt-1">
                  <div className="text-[14px] font-bold text-[#191c1e]">Kelas 9</div>
                </div>
              </div>

            </div>
          </div>

          {/* Recent Activity */}
          <div className="flex flex-col gap-4 mt-2">
            <h2 className="text-[20px] font-bold text-[#191c1e]">Aktivitas Terbaru</h2>
            <div className="bg-white rounded-[24px] p-6 flex flex-col shadow-sm relative gap-0 overflow-hidden">
              
              {/* Timeline Item 1 */}
              <div className="flex gap-4 relative pb-6">
                <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-[#c5c5d3]/50 z-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#00236f]/20 flex flex-shrink-0 items-center justify-center mt-1.5 z-10">
                  <div className="w-2 h-2 bg-[#00236f] rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-[14px] text-[#191c1e]">Suara masuk baru dari Kelas 11 MIPA.</span>
                  <span className="text-[11px] text-[#444651]">2 menit lalu</span>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-4 relative pb-6">
                <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-[#c5c5d3]/50 z-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#e0e3e5] flex flex-shrink-0 items-center justify-center mt-1.5 z-10">
                  <div className="w-1.5 h-1.5 bg-[#757682] rounded-full"></div>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-[14px] text-[#191c1e]">Partisipasi Kelas 12 melewati batas 85%.</span>
                  <span className="text-[11px] text-[#444651]">14 menit lalu</span>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-4 relative">
                <div className="w-4 h-4 rounded-full bg-[#e0e3e5] flex flex-shrink-0 items-center justify-center mt-1.5 z-10">
                  <div className="w-1.5 h-1.5 bg-[#757682] rounded-full"></div>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-[14px] text-[#191c1e]">Pemilihan resmi dibuka untuk semua angkatan.</span>
                  <span className="text-[11px] text-[#444651]">3 jam lalu</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="flex md:hidden fixed bottom-0 w-full z-50 bg-[#f7f9fb]/90 backdrop-blur-xl shadow-[0_-1px_10px_rgba(0,0,0,0.05)] pb-safe border-t border-[#c5c5d3]/30">
        <div className="flex justify-around items-center h-16 w-full px-4">
          <Link href="/" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#444651] hover:text-[#085ac0]">
            <span className="material-symbols-outlined text-[20px]">home</span>
            <span className="text-[10px] font-medium">Beranda</span>
          </Link>
          <Link href="/candidates" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#444651] hover:text-[#085ac0]">
            <span className="material-symbols-outlined text-[20px]">groups</span>
            <span className="text-[10px] font-medium">Kandidat</span>
          </Link>
          <Link href="/voting-portal" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#444651] hover:text-[#085ac0]">
            <span className="material-symbols-outlined text-[20px]">how_to_vote</span>
            <span className="text-[10px] font-medium">Voting</span>
          </Link>
          <Link href="/results" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#085ac0] bg-[#5b94fd]/20 rounded-xl">
            <span className="material-symbols-outlined text-[20px]">leaderboard</span>
            <span className="text-[10px] font-medium">Hasil</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
