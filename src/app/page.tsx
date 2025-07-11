'use client';

import { ShieldCheck, Network, Users, Server, ArrowRight, Download, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton loader for cards
  const CardSkeleton = () => (
    <div className="animate-pulse bg-[#23272a]/60 border border-[#00ffb3]/20 rounded-2xl p-8 flex flex-col items-center shadow-lg min-h-[180px]">
      <div className="w-12 h-12 rounded-full bg-[#00ffb3]/30 mb-4" />
      <div className="h-5 w-32 bg-[#00ffb3]/20 rounded mb-2" />
      <div className="h-4 w-48 bg-[#00ffb3]/10 rounded" />
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-[#111313] via-[#181a1c] to-[#040505] min-h-screen w-full text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-30 flex justify-center">
        <nav className="mt-4 mx-4 w-[95vw] max-w-5xl rounded-2xl bg-gradient-to-r from-[#101112cc] via-[#23272acc] to-[#181c1bcc] border border-[#00ffb3]/30 shadow-lg flex items-center justify-between px-8 py-3 backdrop-blur-md">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-[#00ffb3] via-[#00ffea] to-[#00ffb3] bg-clip-text text-transparent tracking-tight">NetMesh</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#download" className="hover:text-[#00ffb3] transition-colors">Download</a>
            <a href="#" className="hover:text-[#5f5fff] transition-colors">Run a Node</a>
            <a href="https://github.com/anantkrsharma/netmesh" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffb3] transition-colors">GitHub</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 pt-32 pb-8 text-center relative overflow-hidden">
        {/* Neon greenish glow background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-[#00ffb3] via-[#00ffb3]/60 to-transparent opacity-40 rounded-full blur-3xl" />
          <div className="absolute bottom-[-100px] right-1/2 translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-tr from-[#00ffb3] via-transparent to-transparent opacity-30 rounded-full blur-2xl" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight z-10 bg-gradient-to-r from-[#00ffb3] via-[#00ffea] to-[#00ffb3] bg-clip-text text-transparent drop-shadow-[0_2px_24px_#00ffb3aa]">
          NetMesh
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg md:text-2xl text-gray-200 z-10 drop-shadow-[0_2px_12px_#00ffb366]">
          Decentralized VPN on Solana.<br className="hidden md:inline" />
          Powered by WireGuard. Trustless. Transparent. Account-free.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center z-10">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#00ffb3] to-[#00ffea] text-black font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-150 ease-in-out border border-[#00ffb3]/40"
          >
            <Download className="w-5 h-5" /> Download App
          </a>
          <a
            href="https://github.com/anantkrsharma/netmesh" // TODO: Replace with real repo
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#23272a] bg-[#181c1b] text-white font-semibold text-lg hover:bg-[#23272a] transition-colors"
          >
            <Github className="w-5 h-5" /> View on GitHub
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 md:gap-8">
        {loading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            <div className="bg-[#23272a]/60 border border-[#00ffb3]/30 rounded-2xl p-8 flex flex-col items-center shadow-lg text-center">
              <Network className="w-12 h-12 text-[#00ffb3] mb-4" />
              <h3 className="text-xl font-bold mb-2">Peer-to-Peer Network</h3>
              <p className="text-gray-400">Connect to community-run nodes worldwide. No central servers, no single point of failure.</p>
            </div>
            <div className="bg-[#23272a]/60 border border-[#5f5fff]/30 rounded-2xl p-8 flex flex-col items-center shadow-lg text-center">
              <ShieldCheck className="w-12 h-12 text-[#5f5fff] mb-4" />
              <h3 className="text-xl font-bold mb-2">Trustless & Transparent</h3>
              <p className="text-gray-400">All payments and rewards are handled by Solana smart contracts. No accounts, no trackers, just privacy.</p>
            </div>
            <div className="bg-[#23272a]/60 border border-[#ff00cc]/30 rounded-2xl p-8 flex flex-col items-center shadow-lg text-center">
              <Server className="w-12 h-12 text-[#ff00cc] mb-4" />
              <h3 className="text-xl font-bold mb-2">WireGuard Powered</h3>
              <p className="text-gray-400">Enjoy blazing fast, modern VPN connections with the security and efficiency of WireGuard.</p>
            </div>
          </>
        )}
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#00ffb3] via-[#00ffea] to-[#00ffb3] bg-clip-text text-transparent">
          Why NetMesh?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <>
              <div className="bg-[#23272a]/60 border border-[#00ffb3]/30 rounded-2xl p-8 flex flex-col items-center shadow-lg">
                <ShieldCheck className="w-10 h-10 text-[#00ffb3] mb-3" />
                <h4 className="font-bold text-lg mb-2">Decentralized by Design</h4>
                <p className="text-gray-400 text-center">No central authority. NetMesh is run by the community, for the community.</p>
              </div>
              <div className="bg-[#23272a]/60 border border-[#5f5fff]/30 rounded-2xl p-8 flex flex-col items-center shadow-lg">
                <Users className="w-10 h-10 text-[#5f5fff] mb-3" />
                <h4 className="font-bold text-lg mb-2">Privacy First</h4>
                <p className="text-gray-400 text-center">No accounts, no logs, no trackers. Your activity is your business—always.</p>
              </div>
              <div className="bg-[#23272a]/60 border border-[#ff00cc]/30 rounded-2xl p-8 flex flex-col items-center shadow-lg">
                <Network className="w-10 h-10 text-[#ff00cc] mb-3" />
                <h4 className="font-bold text-lg mb-2">Community Governance</h4>
                <p className="text-gray-400 text-center">Node operators are rewarded transparently via on-chain Solana contracts.</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-[#23272a] to-[#181c1b] border border-[#00ffb3]/30 rounded-2xl p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-gradient-to-br from-[#00ffb3] via-[#00ffea]/60 to-transparent opacity-30 rounded-full blur-2xl z-0" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#00ffb3] via-[#00ffea] to-[#00ffb3] bg-clip-text text-transparent z-10">
            Run a Node. Power the Network.
          </h2>
          <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto z-10">
            Help build the future of private, decentralized internet. Set up a node on your Raspberry Pi, home server, or cloud instance and earn rewards for sharing bandwidth.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#00ffb3] to-[#00ffea] text-black font-semibold text-lg shadow-lg animate-bounce border border-[#00ffb3]/40 z-10"
          >
            <ArrowRight className="w-5 h-5" /> Learn How to Run a Node
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#23272a] py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#181c1b]/80">
        <div className="flex items-center gap-2 text-gray-400">
          <Network className="w-6 h-6 text-[#00ffb3]" />
          <span className="font-bold text-white">NetMesh</span>
          <span className="text-xs">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-gray-400 text-sm">
          <Link href="#download" className="hover:text-[#00ffb3] transition-colors">Download</Link>
          <Link href="#" className="hover:text-[#5f5fff] transition-colors">Run a Node</Link>
          <a href="https://x.com/anantXdev" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff00cc] transition-colors">Twitter (X)</a>
        </div>
      </footer>
    </div>
  );
}
