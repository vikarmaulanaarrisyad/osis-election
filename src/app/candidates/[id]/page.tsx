"use client";

import { useParams, useRouter } from "next/navigation";
import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import Link from "next/link";
import { use } from "react";

type Program = {
  icon: string;
  title: string;
  desc: string;
  img?: string;
  isSvgBg?: boolean;
  isFullWidth?: boolean;
  badge?: string;
  badgeIcon?: string;
  tags?: string[];
};

type Mission = {
  title: string;
  desc: string;
};

type Experience = {
  year: string;
  role: string;
  place: string;
};

type Candidate = {
  id: string;
  name: string;
  major: string;
  faculty: string;
  color: string;
  colorBg: string;
  colorText: string;
  img: string;
  heroImg: string;
  visionQuote: string;
  visionP1: string;
  visionP2: string;
  missions: Mission[];
  programs: Program[];
  experiences: Experience[];
  signature: string;
  candidateKey: string;
};

const candidatesData: Record<string, Candidate> = {
  "01": {
    id: "01",
    name: "Budi Santoso",
    major: "Jurusan MIPA",
    faculty: "Kelas 12",
    color: "#00236f", // primary
    colorBg: "#dce1ff", // primary-fixed
    colorText: "#29428c",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM5eTnSIHP-JJbN5qcQYahFvAaGc9f7Va29xKnXOKvmXzt3-atPOG_Es7XACcimC09wgopyq60ZnYRs3DTN04aWAfPVv_L4NoSgJrkcasDRvYVoz6Q2Fexe1LEG5TzbfkFMqYlBnarQ0Ew0LqV2PtwOMIwgqZ6HPTGKfbQMTX_yf8fOuGh4HO690JN7cETAJPfucl1YHEQ5tZXxKkjV5Fj9kS3XTUZvVMQo_8mP1k35QDraxMOeA0P0w",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT78VqzBTlBuuF3nu7K6eMQBM-4gyAZBQZ7QO2qNkkKAVq-iZr89EACfU1lDAMIxRGrFO8xWnPDmn5GvEq4Vzh1mGWTCLD63PMeIPWZtlP-yhFGQgHFw4nmObO3dpb1hSXnX6tmZpsvwncZe2ReHbjq-g_InofVM3nb1yhKmZVDKjlyty3wifoQI9m5cKRgmfkb2B5pwEmpRNClPtQSgLzXg2qB4T79zbcqXqe2UOcXLS3B5uNc9TP-w",
    visionQuote: "A connected campus is an empowered campus. My vision is to bridge the gap between student ambition and institutional support, creating an environment where every voice shapes our collective future.",
    visionP1: "Our school stands at a critical juncture. As we move further into a digitally connected era, our student governance must evolve from a reactive body to a proactive, transparent, and innovative force. My vision is to establish an OSIS that not only organizes events but acts as a dynamic platform for student empowerment, academic excellence, and holistic well-being.",
    visionP2: "I envision a campus where every student has real-time access to resources, where mental health is prioritized alongside academic achievement, and where our environmental impact is actively managed through student-led initiatives. This is a vision of collective ownership, where 'we' replaces 'I'.",
    missions: [
      { title: "Foster Digital Transparency", desc: "Implement an open-data protocol for all OSIS activities and budgets. Every student will have access to a dashboard detailing fund allocation, event progress, and meeting minutes, ensuring total accountability." },
      { title: "Enhance Mental Health Support", desc: "Establish a peer-support network and partner with the counseling department to provide accessible mental health resources, destigmatizing asking for help and creating safe spaces on campus." },
      { title: "Champion Eco-Sustainability", desc: "Transition campus events to zero-waste standards and introduce a comprehensive recycling and composting program managed by the student body, reducing our ecological footprint significantly." }
    ],
    programs: [
      { icon: "apps", title: "Digital Student Hub", desc: "A centralized mobile-friendly portal replacing all physical bulletin boards. Features include club sign-ups, event calendars, and a feedback submission portal.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC21jUyL0bLRBDOcBit33NKXTEQXyvPYoSk95ZOZLNyMpAO5riaouiHCyYfqOH98mlTG_tu8F6WBd87gtJYQDASBu2mFyc74mkC70_ffNe3PC0jccNWr3f7kQUgsMU3LlHeq059V7a_HJDOvXuGR9k_QN_5UbFlowFQt3_8amKtIPYW7x4YssmXTQZQTBht6hSMkMSEFNSXJ4a9KM2btERGQQFd5OAD7TTR0xRmDwcVFBhTdfV3qAjIw", badge: "Q1 Launch", badgeIcon: "schedule", tags: ["Tech", "Comms"] },
      { icon: "forest", title: "Eco-Campus Initiative", desc: "Phasing out single-use plastics in the cafeteria and establishing a student-maintained community garden to supply fresh produce for culinary classes.", isSvgBg: true, badge: "Ongoing", badgeIcon: "schedule", tags: ["Environment"] },
      { icon: "groups", title: "The 'Town Hall' Protocol", desc: "Monthly open forums where any student can directly question the OSIS executive board. No pre-screening of questions. True democratic accountability implemented within the first 30 days of office.", isFullWidth: true, badge: "Policy Change", badgeIcon: "gavel", tags: [] }
    ],
    experiences: [
      { year: "2023 - Sekarang", role: "Ketua Divisi Kominfo", place: "OSIS SMA Negeri" },
      { year: "2022 - 2023", role: "Ketua Panitia Pensi", place: "Sukses menyelenggarakan Pensi 2022" }
    ],
    signature: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp0TaCIOfxCkali4h2TnZX3Hm6GxO5R0A6o1RjbKt91MFm-v9ceGQNTPyMAAOoylDYK9oxivM-UTRESGopgocmtwWJADLd-PWrTo_bErdKL_KaS6U8B72rIoQsyg4wbtQ14hQ5CkJjT-5QE8M9NchzIKpQFbpA48JcT_oHo4x9iRY8W_MFW2G6796WQS9dsWIuwNqDOWXhjdIU0zTb1W0iQjjv5QArT81xT-1Of2CLVbTORSnaxWfatw",
    candidateKey: "budi"
  },
  "02": {
    id: "02",
    name: "Siti Aisyah",
    major: "Jurusan IPS",
    faculty: "Kelas 11",
    color: "#085ac0", // secondary
    colorBg: "#d8e2ff", // secondary-fixed
    colorText: "#004395",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3WrdTEI2ZGuO6w0VyL_a2d57Md_s2rO9Z1r4JCOgPwxlizkuhh-qHnSdng-oUUIfPZPRCUEiYOFUkYKCYdlIGEZcemj_T4wOh5SPwk517YcPrxyRN165yPz8Ko77jjk5OGUNMKtRqzFNpRMs3tXbBENMqdwSYCnnEKOYe21Q_uyoJ6nSxsfI1HSD9qqkfzk12ZttyXS1b20gO-cnErQ0eNmwfTQ_bVCJJOUQKc8N44zyVObBO8SZ6A",
    heroImg: "",
    visionQuote: "Membangun budaya sekolah yang berkelanjutan dan sadar sosial, memprioritaskan kesejahteraan siswa, ekspresi kreatif, dan tanggung jawab lingkungan.",
    visionP1: "Visi saya berpusat pada kesejahteraan siswa secara menyeluruh. Saya percaya bahwa sekolah bukan hanya tempat belajar, tetapi ruang untuk tumbuh secara mental dan sosial.",
    visionP2: "Dengan program-program yang inklusif, kita akan menciptakan lingkungan yang aman bagi setiap ekspresi kreatif dan kepedulian lingkungan yang nyata.",
    missions: [
      { title: "Dukungan Kesehatan Mental", desc: "Membangun jaringan dukungan sebaya untuk kesehatan mental di sekolah." },
      { title: "Kampanye Zero Waste", desc: "Mendorong inisiatif bebas sampah di semua area kantin dan kelas." },
      { title: "Lokakarya Kreatif", desc: "Mengadakan lokakarya kreativitas dan seni secara rutin bulanan." }
    ],
    programs: [
      { icon: "psychology", title: "Sobat Sebaya", desc: "Dukungan kesehatan mental antar siswa.", badge: "Unggulan", badgeIcon: "star", tags: ["Sosial"] },
      { icon: "recycling", title: "Kantin Zero Waste", desc: "Kampanye pengurangan plastik sekali pakai.", badge: "Baru", badgeIcon: "eco", tags: ["Lingkungan"] }
    ],
    experiences: [
      { year: "2023 - Sekarang", role: "Sekretaris Umum", place: "OSIS SMA Negeri" },
      { year: "2022 - 2023", role: "Koordinator Relawan", place: "Komunitas Lingkungan Hijau" }
    ],
    signature: "",
    candidateKey: "siti"
  },
  "03": {
    id: "03",
    name: "Kevin Wijaya",
    major: "Kejuruan",
    faculty: "Kelas 12",
    color: "#1b2b3f", // tertiary
    colorBg: "#d3e4fe", // tertiary-fixed
    colorText: "#0b1c30",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhlH6aLkPRhmJVLxthjxt3hj3ZFUEwiGu6laFx-wemo1KXvTZ2KrQPsQA6a3w9BPvD37Q5OgHs63-9_DNlSQRHB29qf8VSN7Wj9wi1cU5Dy2X4bDU_Ulv8z8FLWrzbLUK596eqDERAB6hbclc6JiEx30oJiSa07JPY6X6Obp7zJfJizLV5V94rSUhJvr50lGJA3h5kzUM2d8zoUfaFXrWOWIZyXjOqAcJwT-sWlBezxV64J6B7zfHy2Q",
    heroImg: "",
    visionQuote: "Menjembatani kesenjangan antara teori akademik dan pengalaman praktis dunia kerja, menciptakan siswa yang proaktif dan siap menghadapi tantangan global.",
    visionP1: "Menghadapi masa depan membutuhkan keterampilan lebih dari sekadar nilai rapor. Kita butuh pengalaman nyata yang relevan dengan industri saat ini.",
    visionP2: "Saya berdedikasi untuk membawa lebih banyak praktisi ke sekolah dan memberikan siswa kesempatan praktik langsung yang akan mempersiapkan mereka sepenuhnya setelah lulus.",
    missions: [
      { title: "Bimbingan Industri Wajib", desc: "Membuat program bimbingan industri wajib bagi siswa tingkat akhir." },
      { title: "Revitalisasi Atletik", desc: "Meningkatkan fasilitas atletik dan perlengkapan ekstrakurikuler sekolah." },
      { title: "Kompetisi Wirausaha", desc: "Mengadakan kompetisi kewirausahaan untuk mengasah keterampilan siswa." }
    ],
    programs: [
      { icon: "business_center", title: "Mentorship Industri", desc: "Bimbingan karir dari alumni dan profesional.", badge: "Karir", badgeIcon: "work", tags: ["Pendidikan"] },
      { icon: "sports_basketball", title: "Revitalisasi Fasilitas", desc: "Peningkatan alat olahraga dan seni.", badge: "Fasilitas", badgeIcon: "build", tags: ["Infrastruktur"] }
    ],
    experiences: [
      { year: "2023 - Sekarang", role: "Ketua Ekskul Olahraga", place: "SMA Negeri" },
      { year: "2022 - 2023", role: "Ketua Tim", place: "Juara 1 Lomba Kewirausahaan Provinsi" }
    ],
    signature: "",
    candidateKey: "kevin"
  }
};

export default function CandidateDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const candidateId = resolvedParams.id;
  
  // Fallback to "01" if invalid ID
  const candidate = candidatesData[candidateId as keyof typeof candidatesData] || candidatesData["01"];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="h-16 px-6 flex items-center justify-between pt-safe">
            <div className="flex items-center gap-3">
              <button onClick={() => router.back()} className="material-symbols-outlined text-[#00236f] text-[24px]">arrow_back</button>
              <img alt="Civic Horizon Logo" className="h-6 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLtqn7KiZ6U8D-sPj8n-b_9F9pdjd_d-jtQSyDpLiWRKT2txw_WWePTMN1jKpVocGnbNr5I8gxsCp3LbIgZenY7run6qGeEc6UT4NZnga1S35MuxVetz2PWobp686SiyP2D-hUPyftwdCp-WeIup0bpM5_zzir0FeezyudqstlslrciKuAsVgj4nMOB-8Qxb1K-ChTjaR67p26iD8IVASh4z9-mU4h-wwunVpHQcLgEXZS1FUbdQ7MKW7i3a"/>
              <span className="font-semibold text-lg text-[#00236f] tracking-tight">Kandidat</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#00236f] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </header>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header />
      </div>

      <main className="w-full min-h-screen bg-[#f7f9fb] flex flex-col md:block">
        
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden w-full pt-16 pb-32 relative">
          
          {/* Candidate Hero Profile */}
          <div className="relative w-full h-80 rounded-b-3xl overflow-hidden shadow-md">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url('${candidate.img}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00236f]/90 via-[#00236f]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h1 className="text-[28px] font-bold leading-[34px] tracking-[-0.01em] mb-2">{candidate.name}</h1>
                  <p className="text-[16px] text-[#b5c4ff]">{candidate.major} • {candidate.faculty}</p>
                </div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 flex-shrink-0 ml-4 bg-[#5b94fd] text-[#002c66]">
                  <span className="text-[32px] font-bold tracking-tighter">{candidate.id}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 mt-6 flex flex-col gap-6">
            
            {/* Vision Section */}
            <section className="bg-[#f2f4f6] rounded-2xl p-4 shadow-sm relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#dce1ff]/50 rounded-full blur-xl"></div>
              <h2 className="text-[24px] font-semibold text-[#00236f] flex items-center gap-2 mb-2 relative z-10 tracking-[-0.01em]">
                <span className="material-symbols-outlined text-[#085ac0]">visibility</span>
                Visi
              </h2>
              <blockquote className="text-[18px] italic text-[#444651] relative z-10 leading-[28px]">
                "{candidate.visionQuote}"
              </blockquote>
            </section>

            {/* Mission Section */}
            <section>
              <h2 className="text-[24px] font-semibold text-[#191c1e] flex items-center gap-2 mb-4 px-1 tracking-[-0.01em]">
                <span className="material-symbols-outlined text-[#00236f]">flag</span>
                Misi
              </h2>
              <div className="flex flex-col gap-2">
                {candidate.missions.map((mission, idx) => (
                  <div key={idx} className="bg-[#eceef0] rounded-xl p-4 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#d8e2ff] flex items-center justify-center flex-shrink-0 mt-1 text-[#004395]">
                      <span className="text-[14px] font-bold tracking-widest">{idx + 1}</span>
                    </div>
                    <p className="text-[16px] text-[#191c1e] leading-[24px] pt-1">{mission.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Programs */}
            <section>
              <h2 className="text-[24px] font-semibold text-[#191c1e] flex items-center gap-2 mb-4 px-1 tracking-[-0.01em]">
                <span className="material-symbols-outlined text-[#00236f]">lightbulb</span>
                Program Utama
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {candidate.programs.map((prog, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-2xl p-4 flex flex-col items-start gap-2" 
                    style={idx === 0 ? { backgroundColor: '#213b85', color: '#92a9fa' } : { backgroundColor: '#314156', color: '#9dadc6' }}
                  >
                    <span className="material-symbols-outlined text-[28px] opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>{prog.icon}</span>
                    <span className="text-[14px] font-bold tracking-widest">{prog.title}</span>
                    <span className="text-[14px] opacity-80 line-clamp-2 leading-[20px]">{prog.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Timeline */}
            <section>
              <h2 className="text-[24px] font-semibold text-[#191c1e] flex items-center gap-2 mb-4 px-1 tracking-[-0.01em]">
                <span className="material-symbols-outlined text-[#00236f]">history_edu</span>
                Pengalaman
              </h2>
              <div className="relative pl-2">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-[#c5c5d3]/30"></div>
                
                <div className="flex flex-col gap-4">
                  {candidate.experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-10 flex flex-col">
                      {idx === 0 ? (
                        <div className="absolute left-2 top-1 w-6 h-6 rounded-full bg-[#f7f9fb] border-2 border-[#00236f] flex items-center justify-center z-10">
                          <div className="w-2 h-2 rounded-full bg-[#00236f]"></div>
                        </div>
                      ) : (
                        <div className="absolute left-2 top-1 w-6 h-6 rounded-full bg-[#f7f9fb] border-2 border-[#757682] flex items-center justify-center z-10">
                        </div>
                      )}
                      
                      <span className="text-[14px] font-bold tracking-widest" style={idx === 0 ? { color: '#085ac0' } : { color: '#444651' }}>{exp.year}</span>
                      <span className="text-[16px] text-[#191c1e] font-medium mt-1">{exp.role}</span>
                      <span className="text-[14px] text-[#444651]">{exp.place}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Action Area */}
            <section className="mt-2 mb-8">
              <button 
                className="w-full bg-[#00236f] text-white font-medium text-[14px] py-4 px-6 rounded-full shadow-md transition-transform duration-200 hover:bg-[#00236f]/90 active:scale-[0.98] flex items-center justify-center gap-2"
                onClick={() => router.push(`/voting-portal?candidate=${candidate.candidateKey}`)}
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>how_to_vote</span>
                Dukung {candidate.name.split(' ')[0]} ({candidate.id})
              </button>
            </section>

          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col w-full relative">
          {/* Hero Header */}
          <div className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-12" style={{ backgroundImage: `url('${candidate.heroImg || candidate.img}')`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-[#f7f9fb]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[#00236f] mix-blend-color opacity-20"></div>
            
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12">
              <div className="flex flex-col md:flex-row md:items-end gap-6 lg:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-4 border-white bg-[#eceef0]">
                    <img className="w-full h-full object-cover" src={candidate.img} alt={candidate.name} />
                  </div>
                </div>
                <div className="flex-col pb-4">
                  <div className="inline-flex items-center gap-2 bg-[#0058be] text-white px-3 py-1 rounded-full text-[14px] font-semibold mb-4 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    Candidate {candidate.id}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-[#00236f] mb-3 tracking-tight drop-shadow-sm">{candidate.name}</h1>
                  <p className="text-[18px] text-[#444651] max-w-2xl leading-relaxed italic border-l-4 border-[#0058be] pl-4">
                    "{candidate.visionQuote}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
              
              {/* Main Content Area */}
              <div className="col-span-1 lg:col-span-12 space-y-16">
                
                {/* The Vision */}
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-[#90a8ff] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">visibility</span>
                    </div>
                    <h2 className="text-[24px] font-bold text-[#00236f]">The Vision</h2>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden border border-[#c5c5d3]/20">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#0058be]/5 rounded-full blur-3xl"></div>
                    <p className="text-[16px] text-[#191c1e] leading-relaxed relative z-10">
                      {candidate.visionP1}
                    </p>
                    {candidate.visionP2 && (
                      <p className="text-[16px] text-[#191c1e] leading-relaxed mt-4 relative z-10">
                        {candidate.visionP2}
                      </p>
                    )}
                  </div>
                </section>

                {/* Detailed Mission Statements */}
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#2170e4] text-[#fefcff] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">flag</span>
                    </div>
                    <h2 className="text-[24px] font-bold text-[#00236f]">Mission Statements</h2>
                  </div>
                  <div className="space-y-4">
                    {candidate.missions.map((mission, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row gap-6 items-start group hover:-translate-y-1 transition-transform duration-300 border border-[#c5c5d3]/20">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#eceef0] text-[#00236f] flex items-center justify-center group-hover:bg-[#00236f] group-hover:text-white transition-colors duration-300">
                          <span className="text-[24px] font-bold">0{idx + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-[20px] font-bold text-[#00236f] mb-2">{mission.title}</h3>
                          <p className="text-[16px] text-[#444651] leading-relaxed">
                            {mission.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Strategic Programs */}
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#314156] text-[#9dadc6] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">architecture</span>
                    </div>
                    <h2 className="text-[24px] font-bold text-[#00236f]">Strategic Programs</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {candidate.programs.map((prog, idx) => (
                      <div key={idx} className={`${prog.isFullWidth ? 'md:col-span-2 bg-[#00236f] text-white' : 'bg-white text-[#191c1e]'} rounded-xl shadow-md overflow-hidden flex flex-col border border-[#c5c5d3]/20 ${prog.isFullWidth ? 'md:flex-row relative items-center gap-6' : ''}`}>
                        
                        {prog.isFullWidth ? (
                          <>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="p-8 relative z-10 flex flex-col md:flex-row items-center gap-6 w-full">
                              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                                <span className="material-symbols-outlined text-[48px] text-white">{prog.icon}</span>
                              </div>
                              <div className="flex-grow text-center md:text-left">
                                <h3 className="text-[20px] font-bold mb-2">{prog.title}</h3>
                                <p className="text-[14px] text-white/80 mb-3 max-w-2xl">{prog.desc}</p>
                                {prog.badge && (
                                  <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg text-xs font-bold">
                                    <span className="material-symbols-outlined text-[14px]">{prog.badgeIcon}</span> {prog.badge}
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {prog.img ? (
                              <div className="h-40 relative bg-cover bg-center" style={{ backgroundImage: `url('${prog.img}')` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                                {prog.badge && (
                                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-[#00236f] flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-[14px]">{prog.badgeIcon}</span> {prog.badge}
                                  </div>
                                )}
                              </div>
                            ) : prog.isSvgBg ? (
                              <div className="h-40 relative bg-[#eceef0] flex items-center justify-center">
                                <svg className="w-full h-full text-[#0058be] opacity-20 absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                                  <path d="M0,100 C30,80 70,80 100,50 L100,100 Z" fill="currentColor"></path>
                                  <path d="M0,100 C30,60 70,60 100,20 L100,100 Z" fill="currentColor" opacity="0.5"></path>
                                </svg>
                                <span className="material-symbols-outlined text-[64px] text-[#0058be] relative z-10">{prog.icon}</span>
                                {prog.badge && (
                                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-[#00236f] flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-[14px]">{prog.badgeIcon}</span> {prog.badge}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="h-40 relative bg-[#eceef0] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[64px] opacity-20 text-[#00236f]">{prog.icon}</span>
                                {prog.badge && (
                                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-[#00236f] flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-[14px]">{prog.badgeIcon}</span> {prog.badge}
                                  </div>
                                )}
                              </div>
                            )}
                            
                            <div className="p-6 flex-grow flex flex-col">
                              <h3 className="text-[18px] font-bold text-[#00236f] mb-2">{prog.title}</h3>
                              <p className="text-[14px] text-[#444651] mb-4 flex-grow">{prog.desc}</p>
                              {prog.tags && prog.tags.length > 0 && (
                                <div className="flex items-center justify-between mt-auto">
                                  <div className="flex gap-2">
                                    {prog.tags.map(tag => (
                                      <span key={tag} className="bg-[#eceef0] px-2 py-1 rounded-md text-xs text-[#444651]">{tag}</span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Personal Statement */}
                <section>
                  <div className="bg-[#f2f4f6] rounded-xl p-8 relative">
                    <span className="material-symbols-outlined text-[120px] text-[#e0e3e5] absolute top-6 right-6 z-0">format_quote</span>
                    <div className="relative z-10 max-w-3xl">
                      <h2 className="text-[24px] font-bold text-[#00236f] mb-6">A Message from {candidate.name.split(' ')[0]}</h2>
                      <div className="space-y-4 text-[18px] text-[#444651] leading-relaxed">
                        <p>
                          "When I first arrived at this school, I was overwhelmed. I saw incredible potential in my peers, but also a disconnect between what we wanted and what was being done. I've spent the last two years listening—in the hallways, during club meetings, and in the cafeteria."
                        </p>
                        <p>
                          "This manifesto isn't just a list of promises; it's a reflection of the conversations I've had with hundreds of you. It's a blueprint for a school that works for everyone, not just a select few. I am committed to executing these plans with transparency, dedication, and an open door."
                        </p>
                        <p className="font-bold text-[#00236f]">
                          Your vote is your voice. Let's make it heard, together.
                        </p>
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-[#c5c5d3]/30 flex items-center gap-4">
                        {candidate.signature ? (
                          <img className="h-12 w-auto opacity-80" src={candidate.signature} style={{ mixBlendMode: 'multiply' }} alt={`Signature of ${candidate.name}`} />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-[#eceef0] flex items-center justify-center text-[#444651] font-bold text-xl">{candidate.name.charAt(0)}</div>
                        )}
                        <div>
                          <p className="text-[14px] font-bold text-[#191c1e]">{candidate.name}</p>
                          <p className="text-[14px] text-[#444651]">Candidate for OSIS President</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Action Footer */}
                <div className="pt-8 border-t border-[#c5c5d3]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <Link href="/candidates" className="flex items-center gap-2 text-[14px] font-medium text-[#444651] hover:text-[#00236f] transition-colors px-6 py-3 rounded-full hover:bg-[#eceef0]">
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                    View All Candidates
                  </Link>
                  <button 
                    className="bg-[#00236f] text-white font-medium text-[14px] px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    onClick={() => router.push(`/voting-portal?candidate=${candidate.candidateKey}`)}
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>how_to_vote</span>
                    Cast Vote for Candidate {candidate.id}
                  </button>
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
