import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-muted border-t border-border py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-3 mb-6">
            <img
              alt="Logo"
              className="h-6 w-auto opacity-80"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtqn7KiZ6U8D-sPj8n-b_9F9pdjd_d-jtQSyDpLiWRKT2txw_WWePTMN1jKpVocGnbNr5I8gxsCp3LbIgZenY7run6qGeEc6UT4NZnga1S35MuxVetz2PWobp686SiyP2D-hUPyftwdCp-WeIup0bpM5_zzir0FeezyudqstlslrciKuAsVgj4nMOB-8Qxb1K-ChTjaR67p26iD8IVASh4z9-mU4h-wwunVpHQcLgEXZS1FUbdQ7MKW7i3a"
            />
            <span className="text-lg font-bold text-primary tracking-tight">Civic Horizon</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Platform demokrasi resmi untuk pemilihan perwakilan siswa. Memberdayakan generasi pemimpin masa depan.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Sumber Daya</h4>
            <Link href="/handbook" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Buku Panduan
            </Link>
            <Link href="/bylaws" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Tata Tertib Pemilu
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Dukungan</h4>
            <Link href="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pusat Bantuan
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Hubungi Panitia
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <span>© 2024 Komisi Pemilihan OSIS. Integritas & Kepercayaan.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary transition-colors">Kebijakan Privasi</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link>
        </div>
      </div>
    </footer>
  );
}
