import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            alt="Professional OSIS Election Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtqn7KiZ6U8D-sPj8n-b_9F9pdjd_d-jtQSyDpLiWRKT2txw_WWePTMN1jKpVocGnbNr5I8gxsCp3LbIgZenY7run6qGeEc6UT4NZnga1S35MuxVetz2PWobp686SiyP2D-hUPyftwdCp-WeIup0bpM5_zzir0FeezyudqstlslrciKuAsVgj4nMOB-8Qxb1K-ChTjaR67p26iD8IVASh4z9-mU4h-wwunVpHQcLgEXZS1FUbdQ7MKW7i3a"
          />
          <span className="font-bold text-xl tracking-tight text-primary">Civic Horizon</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" aria-current="page" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Beranda
          </Link>
          <Link href="/candidates" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Kandidat
          </Link>
          <Link href="/process" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Panduan
          </Link>
          <Link href="/results" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Hasil
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/voting-portal" className={buttonVariants({ size: "sm", className: "rounded-full shadow-md hover:scale-105 transition-transform" })}>
            <span className="material-symbols-outlined text-[18px] mr-1">how_to_vote</span>Pilih Sekarang
          </Link>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary-foreground text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
