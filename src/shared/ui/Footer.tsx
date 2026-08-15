import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 py-xl mt-xl">
      <div className="max-w-[1200px] mx-auto px-margin flex flex-col md:flex-row justify-between items-start gap-lg">
        <div className="max-w-xs">
          <div className="flex items-center gap-sm mb-md">
            <img
              alt="Logo"
              className="h-6 w-auto opacity-80"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtqn7KiZ6U8D-sPj8n-b_9F9pdjd_d-jtQSyDpLiWRKT2txw_WWePTMN1jKpVocGnbNr5I8gxsCp3LbIgZenY7run6qGeEc6UT4NZnga1S35MuxVetz2PWobp686SiyP2D-hUPyftwdCp-WeIup0bpM5_zzir0FeezyudqstlslrciKuAsVgj4nMOB-8Qxb1K-ChTjaR67p26iD8IVASh4z9-mU4h-wwunVpHQcLgEXZS1FUbdQ7MKW7i3a"
            />
            <span className="font-h2 text-body-lg font-bold text-primary">Civic Horizon</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            The official democratic platform for student representative elections. Empowering the next generation of leaders.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-xl">
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Resources</h4>
            <Link href="/handbook" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary">
              Student Handbook
            </Link>
            <Link href="/bylaws" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary">
              Election Bylaws
            </Link>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Support</h4>
            <Link href="/help" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary">
              Help Center
            </Link>
            <Link href="/contact" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary">
              Contact Commission
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-margin mt-xl pt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-md text-on-surface-variant font-body-sm text-body-sm">
        <span>© 2024 Election Commission. Institutional Trust & Integrity.</span>
        <div className="flex gap-lg">
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
