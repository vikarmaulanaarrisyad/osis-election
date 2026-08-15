'use client';

import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <Header />
      <main className="pt-20 w-full min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full min-h-[716px] flex items-center bg-surface-container-low rounded-b-[40px] overflow-hidden shadow-lg -mt-20 pt-20">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByew_mShWMU5HW7xqQSuW8MHc1c4xwyz8JzK47PTpaPSML21F4mj-oP0i6JEUz0AoBrINdNtJZu5TfamJnPzA2Tn_gKnt9357NSEb2iauVj0bBOyDaQx6wFGQRLImtyO6SwwCeBbpu46XQ8COEYmnSWyy0WpVmQZ-_HjpER9x20kqdZu4MjFt_CdvCuKj8faqfQThsaS4WdaBXeb1dwhmTmUBW_wMsG-gTnc1cbDRr0_471F9bt39JMw')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent"></div>
            <div className="relative z-10 max-w-[1200px] w-full mx-auto px-margin flex flex-col gap-xl">
              <div className="max-w-2xl flex flex-col gap-lg">
                <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] [writing-mode:horizontal-tb]">
                  OSIS Election 2024
                </span>
                <h1 className="font-display-stat text-display-stat text-on-surface leading-tight text-[64px] lg:text-[80px]">
                  Suaramu, <br />
                  <span className="text-primary relative inline-block">
                    Masa Depan
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 text-secondary opacity-60"
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
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  Participate in the democratic process. Your vote shapes the leadership and initiatives that will define our school year. Safe, secure, and transparent voting.
                </p>
                <div className="flex items-center gap-md pt-sm">
                  <Link
                    href="/voting-portal"
                    className="bg-primary text-on-primary px-xl py-md rounded-full font-button text-[16px] hover:scale-105 transition-transform flex items-center gap-sm shadow-md"
                  >
                    <span className="material-symbols-outlined text-[20px]">how_to_vote</span>
                    Vote Now
                  </Link>
                  <Link
                    href="/candidates"
                    className="bg-surface-container text-on-surface px-xl py-md rounded-full font-button text-[16px] hover:bg-surface-container-high transition-colors flex items-center gap-sm"
                  >
                    View Candidates
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] w-full mx-auto px-margin py-[80px] flex flex-col gap-[64px]">
            {/* Stats Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md -mt-[120px] relative z-20">
              <div className="bg-surface-container-lowest p-xl rounded-[24px] shadow-xl flex flex-col justify-between min-h-[200px] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                <div className="flex items-center gap-sm text-on-surface-variant mb-md">
                  <span className="material-symbols-outlined">group</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Total Voters</span>
                </div>
                <div>
                  <div className="font-display-stat text-[56px] text-on-surface font-bold tracking-tighter">1,248</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Eligible students registered</p>
                </div>
              </div>
              <div className="bg-primary p-xl rounded-[24px] shadow-xl flex flex-col justify-between min-h-[200px] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                <div className="flex items-center gap-sm text-primary-fixed mb-md">
                  <span className="material-symbols-outlined">how_to_vote</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Votes Cast</span>
                </div>
                <div>
                  <div className="flex items-end gap-sm">
                    <div className="font-display-stat text-[56px] text-on-primary font-bold tracking-tighter">
                      {castVotes.toLocaleString()}
                    </div>
                    <div className="font-h2 text-h2 text-primary-fixed mb-2">/ 1,248</div>
                  </div>
                  <div className="w-full bg-primary-fixed-dim/30 h-2 rounded-full mt-md overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-on-primary rounded-full w-[71%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                  </div>
                  <p className="font-body-sm text-body-sm text-primary-fixed mt-sm">71% Turnout</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-xl rounded-[24px] shadow-xl flex flex-col justify-between min-h-[200px] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
                <div className="flex items-center gap-sm text-on-surface-variant mb-md">
                  <span className="material-symbols-outlined">timer</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Time Remaining</span>
                </div>
                <div>
                  <div className="font-display-stat text-[48px] text-on-surface font-bold tracking-tighter">14h 22m</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Until polls close</p>
                </div>
              </div>
            </div>
            {/* Timeline & Info Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
              {/* Timeline */}
              <div className="lg:col-span-5 bg-surface-container-lowest rounded-[32px] p-xl shadow-md">
                <h2 className="font-h2 text-h2 text-on-surface mb-xl">Election Timeline</h2>
                <div className="relative flex flex-col gap-xl">
                  <div className="absolute left-[11px] top-2 bottom-4 w-[2px] bg-outline-variant/30"></div>
                  <div className="relative flex gap-lg">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center relative z-10 mt-1">
                      <span className="material-symbols-outlined text-[14px] text-on-primary">check</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-primary mb-xs">Oct 10 - Oct 15</span>
                      <h3 className="font-body-lg text-body-lg text-on-surface font-semibold">Candidate Registration</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Application submission and verification process completed.</p>
                    </div>
                  </div>
                  <div className="relative flex gap-lg">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center relative z-10 mt-1">
                      <span className="material-symbols-outlined text-[14px] text-on-primary">check</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-primary mb-xs">Oct 18 - Oct 22</span>
                      <h3 className="font-body-lg text-body-lg text-on-surface font-semibold">Campaign Period</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Candidates presented their platforms and engaged with students.</p>
                    </div>
                  </div>
                  <div className="relative flex gap-lg bg-surface-container-low p-md rounded-xl -ml-md w-[calc(100%+24px)]">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center relative z-10 mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-primary mb-xs">Oct 24 - Oct 25</span>
                      <h3 className="font-body-lg text-body-lg text-on-surface font-bold">Voting Days</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Polls are open. Cast your vote through the secure portal.</p>
                    </div>
                  </div>
                  <div className="relative flex gap-lg opacity-50">
                    <div className="w-6 h-6 rounded-full bg-surface-container-high border-2 border-outline-variant flex-shrink-0 relative z-10 mt-1"></div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface-variant mb-xs">Oct 26</span>
                      <h3 className="font-body-lg text-body-lg text-on-surface font-semibold">Results Announcement</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Official declaration of the new OSIS leadership.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Live Feed / Info */}
              <div className="lg:col-span-7 flex flex-col gap-md">
                <div className="bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-md group relative">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAxbnGCJOFYS_gu-pV0W3wZ82y9UuI8SXA8cR5dRsgiKG3qgZx2KmPDQVzwnE5_7ECgp8SwYJnooI3sBVo39Cx4ZT1ASomTNVengGQUsl3KjKy9WZ5cl-1bjE6KrS5y8hXSNcEZkpSMcmsQRAeFbolx8gd6O0CmehUEfc8_iZgaVwqS6WN47_8FLutDu0MV-wkHmSecIg7O4yF16JrDSbypK-E8-kL2akJAgNd7Gnzrnk5fqHBp_LUVA')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent"></div>
                  <div className="relative p-xl -mt-20">
                    <h3 className="font-h1 text-h1 text-on-surface mb-sm">Why Your Vote Matters</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                      The OSIS leadership directly impacts student life, extracurricular activities, and communication with the school administration. By voting, you choose the voice that represents you for the entire academic year.
                    </p>
                    <Link
                      href="/process"
                      className="inline-flex items-center gap-xs font-button text-button text-primary hover:text-primary-fixed-variant transition-colors group/link"
                    >
                      Learn about the voting process
                      <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="bg-secondary-container rounded-[24px] p-xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-lg">
                    <div className="w-16 h-16 bg-on-secondary-container/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[32px] text-on-secondary-container">security</span>
                    </div>
                    <div>
                      <h4 className="font-body-lg text-body-lg text-on-secondary-container font-semibold">Secure & Anonymous</h4>
                      <p className="font-body-sm text-body-sm text-on-secondary-container/80 mt-xs">End-to-end encrypted voting system.</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-secondary-container opacity-50">verified_user</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
