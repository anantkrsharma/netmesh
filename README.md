# NetMesh — A Decentralized VPN Powered by Solana & WireGuard

> **Private. Trustless. Community-Run.**  
> Connect to the internet through community-run WireGuard nodes, with on-chain node registration and payments secured by Solana.

---

## Why NetMesh?

Most commercial VPNs are closed, centralized, and opaque. Users have zero visibility into how traffic is routed, whether logs are kept, or who controls the infra.

**NetMesh** solves this with a simple promise:  
- **One-tap connection** to community-operated nodes  
- **No accounts, no trackers — just bandwidth**  
- **Node operators rewarded trustlessly** via Solana smart contracts

---

## How It Works

1. **Users** open the NetMesh app → browse on-chain registered WireGuard nodes → connect in one tap.
2. **Node operators** run nodes on Raspberry Pis or EC2 servers, register them on-chain, and earn micro-payments for providing bandwidth.
3. **Solana** smart contracts handle the transparent node registry and payments to operators.

---

## Architecture

**Core components:**
- WireGuard VPN setup on multiple community nodes  
- Solana smart contract for node registry and rewards  
- React Native mobile app for one-tap connection  
- Infrastructure dashboard for monitoring nodes  
- Documentation for community operators to join and earn

---

## Project Roadmap & Milestones

### **Milestone 1 — Infrastructure + Contracts (Month 1)**
- Deploy working WireGuard VPN setup on 5 EC2 nodes
- Write and deploy the Solana smart contract for node registration
- Publish open documentation for running validator nodes (EC2 or Raspberry Pi)

### **Milestone 2 — Mobile App + Test Network (Month 2)**
- Build a React Native mobile app with one-tap VPN connect
- Integrate Solana smart contract to fetch node list + allow users to connect
- Launch a testnet version with 20 live nodes (EC2 + Raspberry Pi)
- Create a landing page and waitlist system for beta users

### **Milestone 3 — Pilot Network + Community Onboarding (Month 3)**
- Onboard 15–20 community validators (distribute Raspberry Pis)
- Pay validators small incentives to keep nodes live for testing
- Run a public test with early users and track connection success rate
- Finalize infrastructure dashboard + submit final report

---

## Primary Key Performance Indicator (KPI)

> **Success** = 100+ successful decentralized VPN session initiations from the mobile app using registered nodes  
> + 15–20 active validator nodes running reliably in the community

---

## 👥 How to Contribute

- Join the [waitlist](#) to be a testnet user  
- Follow the [node operator guide](#) to run your own node
- Help test the smart contract or mobile app — [open issues](#)

---

## 📄 License

MIT — open source, forever.  
This project is community-first — all infra code, smart contracts, and client apps will remain open and auditable.

---

## 🤝 Sponsors & Community

This work is supported by the Solana ecosystem and Superteam Earn.  
If you’d like to help fund Raspberry Pis for community validators, reach out via [issues](#) or [email](#).

---

**NetMesh** — Trust your VPN again.