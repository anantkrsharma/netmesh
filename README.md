# NetMesh

A decentralized VPN powered by Solana and WireGuard. Connect to community-run nodes with one tap. No accounts, no trackers, just private, censorship-resistant bandwidth.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://github.com/anantkrsharma/netmesh/blob/main/LICENSE)

## The Problem

Conventional VPNs are centralized and opaque. Users are forced to trust a single company with their data, which undermines the core purpose of a privacy tool. When you don't know how traffic is routed or if logs are being stored, you can't be sure you're truly private.

## The Solution

NetMesh is a decentralized VPN (dVPN) protocol built to solve this. It provides private, fast, and censorship-resistant internet access through an open, community-powered network.

We use the Solana blockchain for a transparent registry of nodes and the high-performance WireGuard® protocol for state-of-the-art encryption. The result is a more honest and trustworthy alternative to traditional VPNs.

## Core Concepts

*   **Truly Decentralized:** The network is run by a global community of node operators. There is no central point of control or failure.
*   **Modern & Secure:** Built with WireGuard® for high-performance, state-of-the-art encryption.
*   **Transparent & Verifiable:** We use the Solana blockchain for a public, low-cost registry of nodes. Smart contracts manage operator rewards, ensuring fairness.
*   **Anonymous by Design:** No accounts, no emails, and no personal information required. Just connect and browse.
*   **Community Governed:** Anyone can support the network by running a node and earn rewards for the bandwidth they provide.

## How It Works

1.  **Node Registration:** Operators register their servers on the Solana blockchain, detailing their location and bandwidth price.
2.  **Discovery:** The NetMesh client fetches the list of available nodes directly from the on-chain registry.
3.  **Connection:** The user establishes a secure WireGuard® tunnel to a community node with a single tap.
4.  **Incentives:** Node operators are automatically compensated via Solana smart contracts based on the bandwidth they provide.

## Tech Stack

*   **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS
*   **Blockchain**: Solana (Smart Contracts in Rust)
*   **VPN Protocol**: WireGuard®

## Getting Started

This repository contains the source code for the official NetMesh website. To run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anantkrsharma/netmesh.git
    cd netmesh
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Community & Contribution

NetMesh is an open-source project. We welcome contributions of all kinds, from code and documentation to design and feedback. The most impactful way to support the network is by running a node.
