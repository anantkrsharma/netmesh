import Image from "next/image";
import { ShieldCheck, Network, Users, Server, ArrowRight, Download, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#181c24] to-[#0e0e1a] min-h-screen w-full text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-6 pt-24 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#1a1a2f] opacity-30 rounded-full blur-3xl" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight z-10 bg-gradient-to-r from-[#00ffe7] via-[#5f5fff] to-[#ff00cc] bg-clip-text text-transparent drop-shadow-lg">
          NetMesh
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-2xl text-gray-300 z-10">
          Decentralized VPN on Solana. <br className="hidden md:inline" />
          Powered by WireGuard. Trustless. Transparent. Account-free.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center z-10">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#00ffe7] to-[#5f5fff] text-black font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" /> Download App
          </a>
          <a
            href="https://github.com/" // TODO: Replace with real repo
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#222] bg-[#181c24] text-white font-semibold text-lg hover:bg-[#23263a] transition-colors"
          >
            <Github className="w-5 h-5" /> View on GitHub
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 md:gap-8">
        <div className="flex flex-col items-center text-center">
          <Network className="w-12 h-12 text-[#00ffe7] mb-4" />
          <h3 className="text-xl font-bold mb-2">Peer-to-Peer Network</h3>
          <p className="text-gray-400">Connect to community-run nodes worldwide. No central servers, no single point of failure.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <ShieldCheck className="w-12 h-12 text-[#5f5fff] mb-4" />
          <h3 className="text-xl font-bold mb-2">Trustless & Transparent</h3>
          <p className="text-gray-400">All payments and rewards are handled by Solana smart contracts. No accounts, no trackers, just privacy.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Server className="w-12 h-12 text-[#ff00cc] mb-4" />
          <h3 className="text-xl font-bold mb-2">WireGuard Powered</h3>
          <p className="text-gray-400">Enjoy blazing fast, modern VPN connections with the security and efficiency of WireGuard.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#00ffe7] via-[#5f5fff] to-[#ff00cc] bg-clip-text text-transparent">
          Why NetMesh?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#181c24] rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#23263a]">
            <ShieldCheck className="w-10 h-10 text-[#00ffe7] mb-3" />
            <h4 className="font-bold text-lg mb-2">Decentralized by Design</h4>
            <p className="text-gray-400 text-center">No central authority. NetMesh is run by the community, for the community.</p>
          </div>
          <div className="bg-[#181c24] rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#23263a]">
            <Users className="w-10 h-10 text-[#5f5fff] mb-3" />
            <h4 className="font-bold text-lg mb-2">Privacy First</h4>
            <p className="text-gray-400 text-center">No accounts, no logs, no trackers. Your activity is your business—always.</p>
          </div>
          <div className="bg-[#181c24] rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#23263a]">
            <Network className="w-10 h-10 text-[#ff00cc] mb-3" />
            <h4 className="font-bold text-lg mb-2">Community Governance</h4>
            <p className="text-gray-400 text-center">Node operators are rewarded transparently via on-chain Solana contracts.</p>
          </div>
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-[#23263a] to-[#181c24] rounded-2xl p-10 shadow-xl border border-[#23263a]">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#00ffe7] via-[#5f5fff] to-[#ff00cc] bg-clip-text text-transparent">
            Run a Node. Power the Network.
          </h2>
          <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
            Help build the future of private, decentralized internet. Set up a node on your Raspberry Pi, home server, or cloud instance and earn rewards for sharing bandwidth.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#ff00cc] to-[#00ffe7] text-black font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            <ArrowRight className="w-5 h-5" /> Learn How to Run a Node
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#23263a] py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0a0a0a]/80">
        <div className="flex items-center gap-2 text-gray-400">
          <Network className="w-6 h-6 text-[#00ffe7]" />
          <span className="font-bold text-white">NetMesh</span>
          <span className="text-xs">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-gray-400 text-sm">
          <Link href="#download" className="hover:text-[#00ffe7] transition-colors">Download</Link>
          <Link href="#" className="hover:text-[#5f5fff] transition-colors">Run a Node</Link>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff00cc] transition-colors">Twitter</a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffe7] transition-colors">Discord</a>
        </div>
      </footer>
    </div>
  );
}
