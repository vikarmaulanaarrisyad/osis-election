import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1200px] mx-auto px-margin flex items-center justify-between">
        <div className="flex items-center gap-md">
          <img
            alt="Professional OSIS Election Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtqn7KiZ6U8D-sPj8n-b_9F9pdjd_d-jtQSyDpLiWRKT2txw_WWePTMN1jKpVocGnbNr5I8gxsCp3LbIgZenY7run6qGeEc6UT4NZnga1S35MuxVetz2PWobp686SiyP2D-hUPyftwdCp-WeIup0bpM5_zzir0FeezyudqstlslrciKuAsVgj4nMOB-8Qxb1K-ChTjaR67p26iD8IVASh4z9-mU4h-wwunVpHQcLgEXZS1FUbdQ7MKW7i3a"
          />
          <span className="font-h2 text-h2 text-primary tracking-tight">Civic Horizon</span>
        </div>
        <nav className="hidden md:flex items-center gap-xl">
          <Link href="/" aria-current="page" className="transition-colors text-primary font-semibold">
            Home
          </Link>
          <Link href="/candidates" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            Candidates
          </Link>
          <Link href="/process" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            Process
          </Link>
          <Link href="/results" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
            Results
          </Link>
        </nav>
        <div className="flex items-center gap-md">
          <Link href="/voting-portal" className="bg-primary text-on-primary px-lg py-sm rounded-full font-button text-button hover:scale-105 transition-transform flex items-center gap-xs">
            <span className="material-symbols-outlined text-[18px]">how_to_vote</span>Vote Now
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
