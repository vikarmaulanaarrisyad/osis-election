'use client';

import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [castVotes, setCastVotes] = useState(0);

  useEffect(() => {
    // Simple animated counter for stats
    let startTimestamp: number | null = null;
    const duration = 2000;
    const end = 892;
    const start = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setCastVotes(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, []);

  return (
    <>
      <div className="hidden md:block"><Header /></div>
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl shadow-sm">
          <div className="h-16 px-6 flex items-center justify-between pt-safe">
            <div className="flex items-center gap-2">
              <img alt="Civic Horizon Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLtqn7KiZ6U8D-sPj8n-b_9F9pdjd_d-jtQSyDpLiWRKT2txw_WWePTMN1jKpVocGnbNr5I8gxsCp3LbIgZenY7run6qGeEc6UT4NZnga1S35MuxVetz2PWobp686SiyP2D-hUPyftwdCp-WeIup0bpM5_zzir0FeezyudqstlslrciKuAsVgj4nMOB-8Qxb1K-ChTjaR67p26iD8IVASh4z9-mU4h-wwunVpHQcLgEXZS1FUbdQ7MKW7i3a"/>
              <span className="font-semibold text-lg text-[#00236f]">Beranda</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#00236f] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </header>
      </div>

      <main className="w-full min-h-screen bg-background">
        
        {/* Desktop Version */}
        <div className="hidden md:flex flex-col w-full pt-16">
          <div className="relative w-full min-h-[600px] md:min-h-[716px] flex items-center bg-muted rounded-b-[40px] overflow-hidden shadow-lg -mt-16 pt-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByew_mShWMU5HW7xqQSuW8MHc1c4xwyz8JzK47PTpaPSML21F4mj-oP0i6JEUz0AoBrINdNtJZu5TfamJnPzA2Tn_gKnt9357NSEb2iauVj0bBOyDaQx6wFGQRLImtyO6SwwCeBbpu46XQ8COEYmnSWyy0WpVmQZ-_HjpER9x20kqdZu4MjFt_CdvCuKj8faqfQThsaS4WdaBXeb1dwhmTmUBW_wMsG-gTnc1cbDRr0_471F9bt39JMw')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/80 to-transparent"></div>
            <div className="relative z-10 max-w-7xl w-full mx-auto px-6 flex flex-col gap-12">
              <div className="max-w-2xl flex flex-col gap-8">
                <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
                  Pemilihan OSIS 2024
                </span>
                <h1 className="text-foreground leading-tight text-4xl sm:text-5xl md:text-[64px] lg:text-[80px] font-bold tracking-tight">
                  Suaramu, <br className="hidden sm:block" />
                  <span className="text-primary relative inline-block">
                    Masa Depan
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 text-primary/40 opacity-60"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 10"
                    >
                      <path
                        d="M0,5 Q50,10 100,5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>{" "}
                  <br />
                  Sekolah Kita
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                  Berpartisipasilah dalam proses demokrasi. Suaramu menentukan kepemimpinan dan program kerja yang akan mewarnai tahun ajaran kita. Pemilihan yang aman, rahasia, dan transparan.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                  <Link href="/voting-portal" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto rounded-full shadow-md text-base hover:scale-105 transition-transform h-12 px-8" })}>
                    <span className="material-symbols-outlined text-[20px] mr-2">how_to_vote</span>
                    Pilih Sekarang
                  </Link>
                  <Link href="/candidates" className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto rounded-full text-base hover:bg-secondary/80 transition-colors h-12 px-8" })}>
                    Lihat Kandidat
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl w-full mx-auto px-6 py-20 flex flex-col gap-16">
            {/* Stats Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:-mt-[120px] relative z-20">
              <Card className="rounded-[24px] shadow-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border-none bg-card">
                <CardContent className="p-8 flex flex-col justify-between min-h-[200px] relative">
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <span className="material-symbols-outlined">group</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">Total Pemilih</span>
                  </div>
                  <div>
                    <div className="text-[56px] text-foreground font-bold tracking-tighter leading-none">1,248</div>
                    <p className="text-sm text-muted-foreground mt-2">Siswa berhak pilih terdaftar</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-[24px] shadow-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border-none bg-primary text-primary-foreground">
                <CardContent className="p-8 flex flex-col justify-between min-h-[200px] relative">
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                  <div className="flex items-center gap-2 text-primary-foreground/80 mb-6">
                    <span className="material-symbols-outlined">how_to_vote</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">Suara Masuk</span>
                  </div>
                  <div>
                    <div className="flex items-end gap-2">
                      <div className="text-[56px] font-bold tracking-tighter leading-none">
                        {castVotes.toLocaleString()}
                      </div>
                      <div className="text-2xl text-primary-foreground/80 mb-2">/ 1,248</div>
                    </div>
                    <div className="w-full bg-primary-foreground/20 h-2 rounded-full mt-6 overflow-hidden relative">
                      <div className="absolute top-0 left-0 h-full bg-primary-foreground rounded-full w-[71%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    </div>
                    <p className="text-sm text-primary-foreground/80 mt-3">71% Partisipasi</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-[24px] shadow-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border-none bg-card">
                <CardContent className="p-8 flex flex-col justify-between min-h-[200px] relative">
                  <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <span className="material-symbols-outlined">timer</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">Sisa Waktu</span>
                  </div>
                  <div>
                    <div className="text-[48px] text-foreground font-bold tracking-tighter leading-none">14j 22m</div>
                    <p className="text-sm text-muted-foreground mt-2">Hingga pemilihan ditutup</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Timeline & Info Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Timeline */}
              <div className="lg:col-span-5 bg-card rounded-[32px] p-8 shadow-md border">
                <h2 className="text-2xl font-bold text-foreground mb-8">Jadwal Pemilihan</h2>
                <div className="relative flex flex-col gap-8">
                  <div className="absolute left-[11px] top-2 bottom-4 w-[2px] bg-border/50"></div>
                  <div className="relative flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center relative z-10 mt-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-foreground">check</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-primary mb-1">Okt 10 - Okt 15</span>
                      <h3 className="text-lg text-foreground font-semibold">Pendaftaran Kandidat</h3>
                      <p className="text-sm text-muted-foreground mt-2">Pengajuan aplikasi dan proses verifikasi selesai.</p>
                    </div>
                  </div>
                  <div className="relative flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center relative z-10 mt-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-foreground">check</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-primary mb-1">Okt 18 - Okt 22</span>
                      <h3 className="text-lg text-foreground font-semibold">Masa Kampanye</h3>
                      <p className="text-sm text-muted-foreground mt-2">Kandidat memaparkan platform dan berinteraksi dengan siswa.</p>
                    </div>
                  </div>
                  <div className="relative flex gap-6 bg-muted p-4 rounded-xl -ml-4 w-[calc(100%+32px)]">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center relative z-10 mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-primary mb-1">Okt 24 - Okt 25</span>
                      <h3 className="text-lg text-foreground font-bold">Hari Pemilihan</h3>
                      <p className="text-sm text-muted-foreground mt-2">Pemilihan dibuka. Berikan suaramu melalui portal aman.</p>
                    </div>
                  </div>
                  <div className="relative flex gap-6 opacity-50">
                    <div className="w-6 h-6 rounded-full bg-muted border-2 border-muted-foreground flex-shrink-0 relative z-10 mt-1"></div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-muted-foreground mb-1">Okt 26</span>
                      <h3 className="text-lg text-foreground font-semibold">Pengumuman Hasil</h3>
                      <p className="text-sm text-muted-foreground mt-2">Deklarasi resmi kepengurusan OSIS yang baru.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Live Feed / Info */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-card rounded-[32px] overflow-hidden shadow-md border group relative">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAxbnGCJOFYS_gu-pV0W3wZ82y9UuI8SXA8cR5dRsgiKG3qgZx2KmPDQVzwnE5_7ECgp8SwYJnooI3sBVo39Cx4ZT1ASomTNVengGQUsl3KjKy9WZ5cl-1bjE6KrS5y8hXSNcEZkpSMcmsQRAeFbolx8gd6O0CmehUEfc8_iZgaVwqS6WN47_8FLutDu0MV-wkHmSecIg7O4yF16JrDSbypK-E8-kL2akJAgNd7Gnzrnk5fqHBp_LUVA')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="relative p-8 -mt-20">
                    <h3 className="text-3xl font-bold text-foreground mb-3">Mengapa Suaramu Penting</h3>
                    <p className="text-base text-muted-foreground mb-6">
                      Kepemimpinan OSIS berdampak langsung pada kehidupan siswa, kegiatan ekstrakurikuler, dan komunikasi dengan pihak sekolah. Dengan memilih, kamu ikut menentukan suara yang mewakilimu selama satu tahun ajaran.
                    </p>
                    <Link
                      href="/process"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      Pelajari proses pemilihan
                      <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="bg-[#5b94fd] rounded-[24px] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#002c66]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[24px] sm:text-[32px] text-[#002c66]">security</span>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#002c66] font-semibold">Aman & Rahasia</h4>
                      <p className="text-sm text-[#002c66]/80 mt-1">Sistem pemilihan terenkripsi ujung-ke-ujung (end-to-end).</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#002c66]/50 text-[40px] sm:text-[48px] self-end sm:self-auto">verified_user</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="flex flex-col md:hidden w-full pt-16 pb-24 bg-[#f7f9fb]">
          <div className="flex flex-col w-full gap-4 pb-8">
            
            {/* Hero Section */}
            <div className="px-6 pt-4">
              <div className="relative w-full rounded-[16px] overflow-hidden shadow-md h-[340px] bg-[#00236f] flex flex-col justify-end p-6 group" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxYq6N_N25tNKqN7Wz2gkR7_GKFht3A9j1pd3RscXUHRbir1FTr2wKbkr3n0hmRDLdpXvdN65hEBtoRKf4j2BOLboHjk4keqCxerTSdod0HN-0GoGxPAwZmztEyAuG-i7b5Gw9wP3L_XHbykEiYuJC-X1brkkl5T1aDAxRgk8nS0adac9dcadnc7xt9UWgUe1xFjHO8PiESOwMbJmjSQUZWeE-bzH5_2zOdTWOk5_kWqzX37yuL_9WPA')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00236f]/90 via-[#00236f]/40 to-transparent"></div>
                <div className="relative z-10 w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00236f]/20 backdrop-blur-md mb-4 shadow-sm border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#b5c4ff] animate-pulse"></span>
                    <span className="text-[12px] font-semibold text-[#dce1ff] tracking-wide uppercase">Pemilihan Langsung</span>
                  </div>
                  <h1 className="text-[28px] font-bold text-white mb-2 leading-tight tracking-tight">
                    Suaramu,<br/>Masa Depan<br/>Sekolah Kita.
                  </h1>
                  <p className="text-[14px] text-[#b5c4ff] mb-4 max-w-[80%]">
                    Bentuk masa depan OSIS kita. Setiap suara sangat berarti.
                  </p>
                  <Link href="/voting-portal" className="w-full h-12 bg-[#dce1ff] text-[#00164e] rounded-full font-bold text-[14px] flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform active:scale-95 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">how_to_vote</span>
                    Berikan Suaramu Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* Stat Cards Vertical */}
            <div className="px-6 flex flex-col gap-2">
              
              <div className="bg-[#f2f4f6] rounded-[16px] p-4 flex items-center shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#00236f]/5 rounded-full blur-xl"></div>
                <div className="w-12 h-12 rounded-full bg-[#213b85]/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="material-symbols-outlined text-[#00236f] text-[24px]">groups</span>
                </div>
                <div className="flex-grow">
                  <div className="text-[14px] text-[#444651] mb-1">Total Pemilih</div>
                  <div className="text-[24px] font-bold text-[#191c1e]">1,248</div>
                </div>
                <div className="w-16 h-8 flex items-center justify-end">
                  <svg className="w-full h-full text-[#c5c5d3]/50" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 100 30">
                    <path d="M0,25 L20,15 L40,20 L60,5 L80,10 L100,0" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>

              <div className="bg-[#f2f4f6] rounded-[16px] p-4 flex items-center shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#085ac0]/5 rounded-full blur-xl"></div>
                <div className="w-12 h-12 rounded-full bg-[#5b94fd]/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="material-symbols-outlined text-[#085ac0] text-[24px]">how_to_vote</span>
                </div>
                <div className="flex-grow">
                  <div className="text-[14px] text-[#444651] mb-1">Suara Masuk</div>
                  <div className="text-[24px] font-bold text-[#191c1e]">892</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[12px] font-bold text-[#085ac0]">71%</span>
                  <div className="w-16 h-1.5 bg-[#e0e3e5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#085ac0] rounded-full w-[71%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f2f4f6] rounded-[16px] p-4 flex items-center shadow-sm relative overflow-hidden">
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-[#ba1a1a]/5 rounded-full blur-xl"></div>
                <div className="w-12 h-12 rounded-full bg-[#ffdad6]/40 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-[24px]">timer</span>
                </div>
                <div className="flex-grow">
                  <div className="text-[14px] text-[#444651] mb-1">Sisa Waktu</div>
                  <div className="text-[24px] font-bold text-[#191c1e] flex items-baseline gap-1">
                    14<span className="text-[14px] text-[#444651] font-medium">j</span> 
                    22<span className="text-[14px] text-[#444651] font-medium">m</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Timeline Section */}
            <div className="px-6 mt-6">
              <h2 className="text-[20px] leading-[28px] font-semibold text-[#191c1e] mb-6">Jadwal Pemilihan</h2>
              <div className="relative pl-6">
                {/* Vertical Line */}
                <div className="absolute left-2.5 top-2 bottom-6 w-[2px] bg-[#c5c5d3]/50"></div>
                
                {/* Step 1: Completed */}
                <div className="relative mb-8">
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-[#00236f] flex items-center justify-center ring-4 ring-[#f7f9fb] shadow-sm">
                    <span className="material-symbols-outlined text-[12px] text-white font-bold">check</span>
                  </div>
                  <div className="text-[14px] font-bold text-[#00236f] mb-1">Okt 12 - 15</div>
                  <div className="text-[16px] font-medium text-[#191c1e]">Pendaftaran Kandidat</div>
                  <div className="text-[14px] text-[#444651] mt-1">Pengumpulan visi dan misi telah selesai.</div>
                </div>
                
                {/* Step 2: Active */}
                <div className="relative mb-8">
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-[#5b94fd] flex items-center justify-center ring-4 ring-[#f7f9fb] shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#002c66] animate-pulse"></div>
                  </div>
                  <div className="text-[14px] font-bold text-[#085ac0] mb-1">Okt 18 - 20 (Hari Ini)</div>
                  <div className="text-[16px] font-medium text-[#191c1e]">Masa Pemilihan</div>
                  <div className="text-[14px] text-[#444651] mt-1">Berikan suaramu secara aman melalui portal.</div>
                </div>
                
                {/* Step 3: Upcoming */}
                <div className="relative opacity-50">
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-[#e0e3e5] flex items-center justify-center ring-4 ring-[#f7f9fb]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#757682]"></div>
                  </div>
                  <div className="text-[14px] font-bold text-[#444651] mb-1">Okt 21</div>
                  <div className="text-[16px] font-medium text-[#191c1e]">Pengumuman Hasil</div>
                  <div className="text-[14px] text-[#444651] mt-1">Deklarasi resmi OSIS terpilih.</div>
                </div>
              </div>
            </div>

            {/* Why Your Vote Matters Card */}
            <div className="px-6 mt-4 mb-2">
              <div className="bg-[#f2f4f6] rounded-[24px] overflow-hidden shadow-sm flex flex-col relative">
                <div className="h-32 w-full bg-[#e0e3e5]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDFWwCGiXMCrlRJiPCpn0B89cPq3rlJLgIy8rS4fZXVNtRYKXUUFG8SyNBNOlSYv1onXGJ1ntVGIu1T794yW8tpKtoVQe7Va9_qGnEMrcsVlv2jE-gKhG-qpsKOjgWPrkLTAztG1nn-pMwD0_lMTl1pHKmXpLruHl_zrQuigRLPb5Dtd-eFAaovoZJM6QJPp5X_npq36akRtzu0Z2h23Dl4EYu1pjn83PHNZjP-RPjLQ_giotaGmCxRg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-[#f7f9fb]/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-[#00236f]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                  <span className="text-[11px] font-bold text-[#00236f] uppercase tracking-wider">Aman & Rahasia</span>
                </div>
                
                <div className="p-5">
                  <h3 className="text-[18px] font-bold text-[#191c1e] mb-2 flex items-center gap-2">
                    Mengapa Suaramu Penting
                  </h3>
                  <p className="text-[16px] text-[#444651]">
                    Pilihanmu berdampak langsung pada kebijakan sekolah dan acara selama tahun ajaran. Sistem memastikan suaramu dihitung dengan aman dan dijamin kerahasiaannya.
                  </p>
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
          <Link href="/" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#085ac0] bg-[#5b94fd]/20 rounded-xl">
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
          <Link href="/results" className="flex flex-col items-center justify-center w-16 h-12 transition-all text-[#444651] hover:text-[#085ac0]">
            <span className="material-symbols-outlined text-[20px]">leaderboard</span>
            <span className="text-[10px] font-medium">Hasil</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
