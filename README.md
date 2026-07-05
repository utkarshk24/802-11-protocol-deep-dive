# 802.11 Protocol Deep Dive

A comprehensive **45-day course** on IEEE 802.11 frame structure, amendments, security, and protocol mastery.

## Overview

After you automate WLAN connections, the next level is understanding *why* they work. This course teaches you to read Wireshark captures like a protocol expert, diagnose frame-level issues, and validate WPA3 compliance.

**Target Audience:** Engineers who completed the Zero-To-Hero WLAN Automation course (or equivalent) and want to deepen their protocol knowledge.

**Duration:** 45 days (5 phases, 8-10 days each)

**Format:** Interactive single-page application with code examples, Wireshark dissections, and hands-on exercises.

---

## What You'll Learn

### Phase 1: Radio Fundamentals (Days 1–8)
- Frequency, wavelength, and why 2.4 GHz vs. 5 GHz matter
- Power (dBm, EIRP, path loss)
- Modulation (BPSK, QPSK, QAM) and data rate tradeoffs
- Channels, overlapping, and interference
- MAC frame anatomy and PLCP headers

### Phase 2: Management Frames (Days 9–18)
- Beacon frames and IE (Information Elements)
- Probe, Authentication, Association sequences
- Reassociation and roaming (FT vs. non-FT)
- Deauthentication and attack vectors
- Building a connection state machine analyzer

### Phase 3: 802.11ac (WiFi 5) (Days 19–27)
- VHT PPDU structure
- Capabilities and negotiation
- MCS, NSS, spatial streams
- STBC, LDPC, beamforming
- 80 MHz and 160 MHz channels

### Phase 4: 802.11ax (WiFi 6) (Days 28–36)
- HE PPDU and OFDMA revolution
- Resource units and subcarrier allocation
- Multi-user modes (MU-OFDMA, SU-OFDMA)
- Target Wake Time (TWT)
- OFDMA scheduling and fairness

### Phase 5: 802.11be & Security (Days 37–45)
- 802.11be multi-link operation
- WPA3 SAE handshake (vs. PSK vulnerabilities)
- 192-bit encryption
- Management Frame Protection (MFP)
- Building a WPA3 compliance validator

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/utkarshk24/802-11-protocol-deep-dive.git
   cd 802-11-protocol-deep-dive
   ```

2. **Open in a browser:**
   ```bash
   python -m http.server 8080
   ```
   Then visit: `http://localhost:8080`

3. **Start Day 1:**
   Click "Start Day 1" or navigate to: `http://localhost:8080/?day=1`

---

## Tools You'll Need

- **Wireshark** — for packet capture and frame analysis
- **Scapy** — Python library for packet parsing
- **tshark** — command-line Wireshark
- **Python 3.9+** — for all hands-on labs

---

## Course Features

✅ **Interactive learning** — Read content, then build tools  
✅ **Real-world examples** — Actual Wireshark captures and PCAP files  
✅ **Progressive difficulty** — Ground-up physics → advanced security  
✅ **Hands-on capstones** — Build a protocol validator by Day 45  
✅ **Open-source** — All code and content on GitHub  

---

## Prerequisites

This course assumes you have:
- Basic Python knowledge (functions, imports, data structures)
- Familiarity with WLAN (SSID, WPA2, DHCP, IP)
- Experience with Wireshark or packet analysis tools
- (Optional) Completion of the Zero-To-Hero WLAN Automation course

---

## About the Author

Built by Utkarsh — WLAN automation engineer and protocol specialist.

**Zero-To-Hero WLAN Automation course:** https://utkarshk24.github.io/Zero-To-Hero-WLAN-Automation/

---

## License

This course is open-source. Share, learn, teach.

---

## Get Started

👉 **Launch the course:** https://utkarshk24.github.io/802-11-protocol-deep-dive/

**Day 1 is live.** Ready?
