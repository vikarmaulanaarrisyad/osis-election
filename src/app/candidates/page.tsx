import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import Link from "next/link";

export default function CandidatesPage() {
  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block"><Header /></div>
      
      {/* Mobile Header */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl shadow-sm">
          <div className="h-16 px-6 flex items-center justify-between pt-safe">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00236f] text-[24px]">groups</span>
              <span className="font-semibold text-lg text-[#00236f]">Kandidat</span>
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
          <div className="max-w-[1200px] mx-auto w-full px-6 pt-6 pb-6 relative z-10 flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-[#191c1e]">Kenali Para Kandidat</h1>
            <p className="text-lg text-[#444651] max-w-2xl">
              Temukan para visioner yang maju untuk memimpin. Pelajari platform mereka dan pilih kandidat yang paling mewakili suaramu untuk periode mendatang.
            </p>
          </div>
          
          <div className="max-w-[1200px] mx-auto w-full px-6 pb-12 flex flex-col gap-8">
            
            {/* Candidate 1: Budi Santoso */}
            <section className="bg-[#f2f4f6] rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row group transition-all duration-300 hover:shadow-md border border-transparent">
              <div className="md:w-2/5 relative h-64 md:h-auto shrink-0 overflow-hidden">
                <div 
                  className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmWiT1mfAn1I017VH1YzUclG_bCPhR_-00pPtjgKZn4fCao3BLGqY-hbLjZcEQUhjyZULy5IYHa1FaElopqXgk_cGGWvxeZKcAoXSncgnBNc8_IWPA5Zw1SYiRybHyzvXduvTvIeyGN9Gr8-cPjGlr1-Onc96Zx9rmF-dcQ_zfp9RKHBJxOAMyjimY0HIODVPOxQBjbDIs8FlH-hQaw0gSBUTO1gH3ErFG9VXMFYo04Fg_jR0pIbKGeA')" }}
                ></div>
                <div className="absolute top-4 left-4 bg-[#00236f] text-white text-4xl font-bold w-16 h-16 rounded-lg flex items-center justify-center shadow-md">01</div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#191c1e] mb-2">Budi Santoso</h2>
                    <div className="inline-flex items-center gap-1.5 bg-[#00236f] text-white px-3 py-1 rounded-full text-[14px] font-semibold uppercase tracking-wide">
                      <span className="material-symbols-outlined text-[16px]">school</span> Kelas 12, MIPA
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[14px] font-semibold text-[#444651] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#00236f] text-[18px]">visibility</span> Visi
                      </h3>
                      <p className="text-[16px] text-[#191c1e] leading-relaxed">
                        Menciptakan komunitas siswa yang inklusif dan berdaya digital di mana inovasi bertemu tradisi, memastikan setiap suara berkontribusi pada kesuksesan bersama.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[14px] font-semibold text-[#444651] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#00236f] text-[18px]">flag</span> Fokus Misi
                      </h3>
                      <ul className="flex flex-col gap-1.5 text-[16px] text-[#191c1e] list-none p-0 m-0">
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[#00236f] text-[20px] shrink-0 mt-0.5">check_circle</span> 
                          <span>Mengimplementasikan pusat digital terpadu untuk sumber daya siswa.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[#00236f] text-[20px] shrink-0 mt-0.5">check_circle</span> 
                          <span>Meningkatkan transparansi pendanaan untuk klub ekstrakurikuler.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-[#c5c5d3]/30 flex justify-end">
                  <Link href="/candidates/01" className="bg-[#e0e3e5] text-[#444651] px-6 py-2 rounded-full text-[14px] font-medium hover:bg-[#00236f] hover:text-white transition-colors flex items-center gap-1.5 group/btn">
                    Lihat Manifesto Lengkap <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Candidate 2: Siti Aisyah */}
            <section className="bg-[#f2f4f6] rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row-reverse group transition-all duration-300 hover:shadow-md border border-transparent">
              <div className="md:w-2/5 relative h-64 md:h-auto shrink-0 overflow-hidden">
                <div 
                  className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArFNvFrjpp1XatJWUSe6oz07UVpqLsDxdUIpUAdP-NACkxudtDFE5F3EAGtuYUZJS9n7iTn4s7t2oBJXmLx7E4PKGUeHRcUT3xNAeuVmwln2fRJKq27aHTm438n5QAy3kEkzDxtMXjkIpF6WCQ9Ka6LRJVjvfFb29wIhu1gUzETKpgH3l9UWWWp9hM9KLKrk6qwt0qfdzGh1gLO3UX7iJu33UhoxRtEd63EgsWy6a_TT1Yb_x2iNYE3g')" }}
                ></div>
                <div className="absolute top-4 right-4 bg-[#085ac0] text-white text-4xl font-bold w-16 h-16 rounded-lg flex items-center justify-center shadow-md">02</div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-4">
                  <div className="md:text-right">
                    <h2 className="text-2xl font-bold text-[#191c1e] mb-2">Siti Aisyah</h2>
                    <div className="inline-flex items-center gap-1.5 bg-[#5b94fd] text-[#002c66] px-3 py-1 rounded-full text-[14px] font-semibold uppercase tracking-wide">
                      <span className="material-symbols-outlined text-[16px]">palette</span> Kelas 11, IPS
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="flex flex-col gap-2 md:text-right md:order-2">
                      <h3 className="text-[14px] font-semibold text-[#444651] uppercase tracking-wider flex items-center md:justify-end gap-1.5">
                        <span className="material-symbols-outlined text-[#085ac0] text-[18px]">visibility</span> Visi
                      </h3>
                      <p className="text-[16px] text-[#191c1e] leading-relaxed">
                        Membangun budaya sekolah yang berkelanjutan dan sadar sosial, memprioritaskan kesejahteraan siswa, ekspresi kreatif, dan tanggung jawab lingkungan.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 md:text-right md:order-1">
                      <h3 className="text-[14px] font-semibold text-[#444651] uppercase tracking-wider flex items-center md:justify-end gap-1.5">
                        <span className="material-symbols-outlined text-[#085ac0] text-[18px]">flag</span> Fokus Misi
                      </h3>
                      <ul className="flex flex-col gap-1.5 text-[16px] text-[#191c1e] list-none p-0 m-0">
                        <li className="flex items-start md:flex-row-reverse gap-1.5">
                          <span className="material-symbols-outlined text-[#085ac0] text-[20px] shrink-0 mt-0.5">check_circle</span> 
                          <span>Membangun jaringan dukungan sebaya untuk kesehatan mental di sekolah.</span>
                        </li>
                        <li className="flex items-start md:flex-row-reverse gap-1.5">
                          <span className="material-symbols-outlined text-[#085ac0] text-[20px] shrink-0 mt-0.5">check_circle</span> 
                          <span>Mendorong inisiatif bebas sampah di semua area kantin.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-[#c5c5d3]/30 flex justify-start">
                  <Link href="/candidates/02" className="bg-[#e0e3e5] text-[#444651] px-6 py-2 rounded-full text-[14px] font-medium hover:bg-[#085ac0] hover:text-white transition-colors flex items-center gap-1.5 group/btn">
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:-translate-x-1 transition-transform">arrow_forward</span> Lihat Manifesto Lengkap 
                  </Link>
                </div>
              </div>
            </section>

            {/* Candidate 3: Kevin Wijaya */}
            <section className="bg-[#f2f4f6] rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row group transition-all duration-300 hover:shadow-md border border-transparent">
              <div className="md:w-2/5 relative h-64 md:h-auto shrink-0 overflow-hidden">
                <div 
                  className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpvKx34AKj1Plic-jPJCQ84D0dZmR6mIlhShKpZ5Bd4788lvZNIo6JARHn6E_Y_Zwzsp7yZz35VEOqr63UPhLdBFdNXchg9HsbVe9oEb4p4q79F0mAuIBd-4xHZBHOnbYIszxCoN61UdcFkf0ucsIJZyvujz960NamfjcVyTetv8Ox_DvmVCgjKqAwINZ_H5X7AoRvG44OgpbcP4Z-cftmBxFzpFIWliSC8FmhQeaQ4dz4WahZu5UsLA')" }}
                ></div>
                <div className="absolute top-4 left-4 bg-[#1b2b3f] text-white text-4xl font-bold w-16 h-16 rounded-lg flex items-center justify-center shadow-md">03</div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#191c1e] mb-2">Kevin Wijaya</h2>
                    <div className="inline-flex items-center gap-1.5 bg-[#314156] text-white px-3 py-1 rounded-full text-[14px] font-semibold uppercase tracking-wide">
                      <span className="material-symbols-outlined text-[16px]">engineering</span> Kelas 12, Kejuruan
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[14px] font-semibold text-[#444651] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#1b2b3f] text-[18px]">visibility</span> Visi
                      </h3>
                      <p className="text-[16px] text-[#191c1e] leading-relaxed">
                        Menjembatani kesenjangan antara teori akademik dan pengalaman praktis dunia kerja, menciptakan siswa yang proaktif dan siap menghadapi tantangan global.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[14px] font-semibold text-[#444651] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#1b2b3f] text-[18px]">flag</span> Fokus Misi
                      </h3>
                      <ul className="flex flex-col gap-1.5 text-[16px] text-[#191c1e] list-none p-0 m-0">
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[#1b2b3f] text-[20px] shrink-0 mt-0.5">check_circle</span> 
                          <span>Membuat program bimbingan industri wajib bagi siswa tingkat akhir.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[#1b2b3f] text-[20px] shrink-0 mt-0.5">check_circle</span> 
                          <span>Meningkatkan fasilitas atletik dan perlengkapan ekstrakurikuler sekolah.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-[#c5c5d3]/30 flex justify-end">
                  <Link href="/candidates/03" className="bg-[#e0e3e5] text-[#444651] px-6 py-2 rounded-full text-[14px] font-medium hover:bg-[#1b2b3f] hover:text-white transition-colors flex items-center gap-1.5 group/btn">
                    Lihat Manifesto Lengkap <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Mobile Version */}
        <div className="flex flex-col md:hidden w-full pt-24 pb-24 p-4 gap-8 bg-[#f7f9fb]">
          
          {/* Mobile Candidate 1 */}
          <div className="relative bg-[#f2f4f6] rounded-[24px] p-5 shadow-sm">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#00236f] text-white font-bold text-[18px] rounded-xl px-4 py-2 shadow-md">01</div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 relative w-24 h-24 rounded-full overflow-hidden shadow-sm border-2 border-white">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM5eTnSIHP-JJbN5qcQYahFvAaGc9f7Va29xKnXOKvmXzt3-atPOG_Es7XACcimC09wgopyq60ZnYRs3DTN04aWAfPVv_L4NoSgJrkcasDRvYVoz6Q2Fexe1LEG5TzbfkFMqYlBnarQ0Ew0LqV2PtwOMIwgqZ6HPTGKfbQMTX_yf8fOuGh4HO690JN7cETAJPfucl1YHEQ5tZXxKkjV5Fj9kS3XTUZvVMQo_8mP1k35QDraxMOeA0P0w"
                  alt="Budi Santoso"
                />
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-[24px] font-bold text-[#191c1e]">Budi Santoso</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-[#00236f]">school</span>
                  <span className="text-[14px] text-[#444651]">Kelas 12</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-[#00236f]">apartment</span>
                  <span className="text-[14px] text-[#444651]">Jurusan MIPA</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-[#c5c5d3]/20">
              <p className="text-[14px] text-[#444651] italic leading-relaxed">
                "Menciptakan komunitas siswa yang inklusif dan berdaya digital di mana inovasi bertemu tradisi."
              </p>
            </div>
            <Link href="/candidates/01" className="mt-5 w-full flex items-center justify-center gap-2 bg-[#dce1ff] text-[#29428c] font-bold text-[14px] py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
              Lihat Detail
            </Link>
          </div>

          {/* Mobile Candidate 2 */}
          <div className="relative bg-[#f2f4f6] rounded-[24px] p-5 shadow-sm mt-4">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#085ac0] text-white font-bold text-[18px] rounded-xl px-4 py-2 shadow-md">02</div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 relative w-24 h-24 rounded-full overflow-hidden shadow-sm border-2 border-white">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL3WrdTEI2ZGuO6w0VyL_a2d57Md_s2rO9Z1r4JCOgPwxlizkuhh-qHnSdng-oUUIfPZPRCUEiYOFUkYKCYdlIGEZcemj_T4wOh5SPwk517YcPrxyRN165yPz8Ko77jjk5OGUNMKtRqzFNpRMs3tXbBENMqdwSYCnnEKOYe21Q_uyoJ6nSxsfI1HSD9qqkfzk12ZttyXS1b20gO-cnErQ0eNmwfTQ_bVCJJOUQKc8N44zyVObBO8SZ6A"
                  alt="Siti Aisyah"
                />
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-[24px] font-bold text-[#191c1e]">Siti Aisyah</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-[#085ac0]">school</span>
                  <span className="text-[14px] text-[#444651]">Kelas 11</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-[#085ac0]">palette</span>
                  <span className="text-[14px] text-[#444651]">Jurusan IPS</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-[#c5c5d3]/20">
              <p className="text-[14px] text-[#444651] italic leading-relaxed">
                "Membangun budaya sekolah yang berkelanjutan, memprioritaskan kesejahteraan siswa dan lingkungan."
              </p>
            </div>
            <Link href="/candidates/02" className="mt-5 w-full flex items-center justify-center gap-2 bg-[#5b94fd]/20 text-[#004395] font-bold text-[14px] py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
              Lihat Detail
            </Link>
          </div>

          {/* Mobile Candidate 3 */}
          <div className="relative bg-[#f2f4f6] rounded-[24px] p-5 shadow-sm mt-4">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#1b2b3f] text-white font-bold text-[18px] rounded-xl px-4 py-2 shadow-md">03</div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 relative w-24 h-24 rounded-full overflow-hidden shadow-sm border-2 border-white">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhlH6aLkPRhmJVLxthjxt3hj3ZFUEwiGu6laFx-wemo1KXvTZ2KrQPsQA6a3w9BPvD37Q5OgHs63-9_DNlSQRHB29qf8VSN7Wj9wi1cU5Dy2X4bDU_Ulv8z8FLWrzbLUK596eqDERAB6hbclc6JiEx30oJiSa07JPY6X6Obp7zJfJizLV5V94rSUhJvr50lGJA3h5kzUM2d8zoUfaFXrWOWIZyXjOqAcJwT-sWlBezxV64J6B7zfHy2Q"
                  alt="Kevin Wijaya"
                />
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-[24px] font-bold text-[#191c1e]">Kevin Wijaya</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-[#1b2b3f]">school</span>
                  <span className="text-[14px] text-[#444651]">Kelas 12</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-[#1b2b3f]">engineering</span>
                  <span className="text-[14px] text-[#444651]">Kejuruan</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-[#c5c5d3]/20">
              <p className="text-[14px] text-[#444651] italic leading-relaxed">
                "Menjembatani kesenjangan teori akademik dan pengalaman praktis dunia kerja."
              </p>
            </div>
            <Link href="/candidates/03" className="mt-5 w-full flex items-center justify-center gap-2 bg-[#1b2b3f]/10 text-[#0b1c30] font-bold text-[14px] py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
              Lihat Detail
            </Link>
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
          <Link href="/candidates" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#085ac0] bg-[#5b94fd]/20 rounded-xl">
            <span className="material-symbols-outlined text-[20px]">groups</span>
            <span className="text-[10px] font-medium">Kandidat</span>
          </Link>
          <Link href="/voting-portal" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#444651] hover:text-[#085ac0]">
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
