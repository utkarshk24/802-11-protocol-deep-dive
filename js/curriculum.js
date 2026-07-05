// ============================================================
//  curriculum.js — Full 45-day 802.11 Protocol Deep Dive course data
// ============================================================

const CURRICULUM = [
  {
    phase: 1,
    title: "Radio Fundamentals",
    subtitle: "Days 1–8",
    color: "#58a6ff",
    cssVar: "var(--phase1)",
    days: [
      { day: 1,  title: "Radio Fundamentals & Why Protocol Matters",   file: "pages/day1.html",  status: "available" },
      { day: 2,  title: "Frequency, Modulation & Data Rates",          file: "pages/day2.html",  status: "available" },
      { day: 3,  title: "PLCP Headers & Physical Layer Frames",        file: "pages/day3.html",  status: "available" },
      { day: 4,  title: "MAC Frame Anatomy: Frame Control & Addresses", file: "pages/day4.html",  status: "coming-soon" },
      { day: 5,  title: "Decoding Frames in Wireshark",                file: "pages/day5.html",  status: "coming-soon" },
      { day: 6,  title: "Building Frame Parsers in Scapy",             file: "pages/day6.html",  status: "coming-soon" },
      { day: 7,  title: "CRC Validation & Frame Integrity",            file: "pages/day7.html",  status: "coming-soon" },
      { day: 8,  title: "Phase 1 Capstone: Raw PCAP Analysis",         file: "pages/day8.html",  status: "coming-soon", capstone: true },
    ]
  },
  {
    phase: 2,
    title: "Management Frames",
    subtitle: "Days 9–18",
    color: "#3fb950",
    cssVar: "var(--phase2)",
    days: [
      { day: 9,  title: "Beacon Frames Deep Dive",                     file: "pages/day9.html",  status: "coming-soon" },
      { day: 10, title: "Probe Request & Response Frames",             file: "pages/day10.html", status: "coming-soon" },
      { day: 11, title: "Authentication Frames (Open & SAE)",          file: "pages/day11.html", status: "coming-soon" },
      { day: 12, title: "Association Request & Response",              file: "pages/day12.html", status: "coming-soon" },
      { day: 13, title: "Reassociation for Roaming (FT vs Non-FT)",    file: "pages/day13.html", status: "coming-soon" },
      { day: 14, title: "Disassociation & Deauthentication Frames",    file: "pages/day14.html", status: "coming-soon" },
      { day: 15, title: "Action Frames & Channel Switching",           file: "pages/day15.html", status: "coming-soon" },
      { day: 16, title: "Building a Connection State Machine Analyzer", file: "pages/day16.html", status: "coming-soon" },
      { day: 17, title: "Detecting Attacks via Frame Analysis",        file: "pages/day17.html", status: "coming-soon" },
      { day: 18, title: "Phase 2 Capstone: Full Association Flow",     file: "pages/day18.html", status: "coming-soon", capstone: true },
    ]
  },
  {
    phase: 3,
    title: "802.11ac (WiFi 5)",
    subtitle: "Days 19–27",
    color: "#d29922",
    cssVar: "var(--phase3)",
    days: [
      { day: 19, title: "Why 802.11ac Was Revolutionary",               file: "pages/day19.html", status: "coming-soon" },
      { day: 20, title: "VHT PPDU Structure & PLCP Headers",            file: "pages/day20.html", status: "coming-soon" },
      { day: 21, title: "VHT Capabilities & Negotiation",               file: "pages/day21.html", status: "coming-soon" },
      { day: 22, title: "MCS, NSS & Data Rate Calculations",            file: "pages/day22.html", status: "coming-soon" },
      { day: 23, title: "STBC, LDPC & Spatial Streams",                 file: "pages/day23.html", status: "coming-soon" },
      { day: 24, title: "80 MHz & 160 MHz Channels",                    file: "pages/day24.html", status: "coming-soon" },
      { day: 25, title: "Beamforming: Explicit, Implicit & Sounding",   file: "pages/day25.html", status: "coming-soon" },
      { day: 26, title: "VHT Operation in Multi-AP Networks",           file: "pages/day26.html", status: "coming-soon" },
      { day: 27, title: "Phase 3 Capstone: VHT Throughput Analysis",    file: "pages/day27.html", status: "coming-soon", capstone: true },
    ]
  },
  {
    phase: 4,
    title: "802.11ax (WiFi 6)",
    subtitle: "Days 28–36",
    color: "#a371f7",
    cssVar: "var(--phase4)",
    days: [
      { day: 28, title: "Why 802.11ax Was Revolutionary",               file: "pages/day28.html", status: "coming-soon" },
      { day: 29, title: "HE PPDU & OFDMA Revolution",                   file: "pages/day29.html", status: "coming-soon" },
      { day: 30, title: "Resource Units & Subcarrier Allocation",       file: "pages/day30.html", status: "coming-soon" },
      { day: 31, title: "MU-OFDMA & SU-OFDMA Modes",                    file: "pages/day31.html", status: "coming-soon" },
      { day: 32, title: "Target Wake Time (TWT) for Power Saving",      file: "pages/day32.html", status: "coming-soon" },
      { day: 33, title: "Multi-User Uplink & MU-EDCA",                  file: "pages/day33.html", status: "coming-soon" },
      { day: 34, title: "HE Operation & BSS Color",                     file: "pages/day34.html", status: "coming-soon" },
      { day: 35, title: "OFDMA Scheduling & Fairness",                  file: "pages/day35.html", status: "coming-soon" },
      { day: 36, title: "Phase 4 Capstone: OFDMA Efficiency Analysis",  file: "pages/day36.html", status: "coming-soon", capstone: true },
    ]
  },
  {
    phase: 5,
    title: "802.11be & Security",
    subtitle: "Days 37–45",
    color: "#f85149",
    cssVar: "var(--phase5)",
    days: [
      { day: 37, title: "802.11be Overview & Multi-Link Operation",     file: "pages/day37.html", status: "coming-soon" },
      { day: 38, title: "WPA3 SAE Handshake Deep Dive",                 file: "pages/day38.html", status: "coming-soon" },
      { day: 39, title: "192-bit Encryption & WPA3-Enterprise",         file: "pages/day39.html", status: "coming-soon" },
      { day: 40, title: "OWE, TKIP, CCMP & GCMP Ciphers",               file: "pages/day40.html", status: "coming-soon" },
      { day: 41, title: "Key Rotation & Rekeying Protocols",            file: "pages/day41.html", status: "coming-soon" },
      { day: 42, title: "Management Frame Protection (MFP)",            file: "pages/day42.html", status: "coming-soon" },
      { day: 43, title: "Detecting Protocol-Level Attacks",             file: "pages/day43.html", status: "coming-soon" },
      { day: 44, title: "Building a Protocol Attack Detector",          file: "pages/day44.html", status: "coming-soon" },
      { day: 45, title: "Final Capstone: WPA3 Compliance Validator",    file: "pages/day45.html", status: "coming-soon", capstone: true },
    ]
  }
];
