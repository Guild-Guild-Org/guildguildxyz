"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Articles from "@/components/Articles";
const DynamicGraph = dynamic(() => import("@/components/Graph"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container">
        <div className="hero">
          <DynamicGraph />
        </div>
        <div className="hero-content">
          <h1>Guild Guild</h1>
          <h3>
            A locus of coordination for gathering and distributing the means of
            Guilding on Ethereum.
          </h3>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Organize knowledge commons and distribute best practices
            </li>
            <li className="mb-2">
              Support builders of tools and organizers of guilds
            </li>
            <li>Network Guilds for further disambiguation of autonomy</li>
          </ol>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://paragraph.xyz/@guildguild/guild-guild"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Announcement
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://discord.gg/JRvgcnha"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </a>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row py-20">
          <h2 className="min-w-xs sm:pr-4 sm:border-r-2 sm:border-white-900">
            The Postmodern Guild
          </h2>
          <p>
            A guild is a community of contributors who collaborate around a
            shared purpose. Modern guilds on Ethereum create collective
            bargaining power for their members while maintaining individual
            autonomy. They enable more efficient matching between specialized
            talent and funding sources by creating a legible group identity
            while reducing coordination costs.
          </p>
        </div>
        <Articles />
        <div className="flex gap-4 items-center flex-col sm:flex-row py-20">
          <h3 className="min-w-xs sm:pr-4 sm:border-r-2 sm:border-white-900">
            The Primitive: Self-curating Registry
          </h3>
          <p>
            The technical foundation of a guild is a Self-Curating Registry
            (SCR) - a smart contract primitive where members maintain their own
            registry of contributors and contribution weights. This
            self-governance mechanism ensures the registry remains accurate and
            legitimate while distributing resources according to contribution.
            The SCR provides a shared Ethereum address that serves as both a
            funding destination and a group identity.
          </p>
        </div>
        <div className="max-w-xl flex gap-4 items-start flex-col py-20">
          <h3>Guild Primitives</h3>
          <p>Guild infrastructure is built on proven Ethereum primitives:</p>
          <p>
            <strong>Governance & Curation:</strong> Moloch v3 powers the
            self-curation mechanism, enabling guilds to manage membership and
            weights through democratic processes while maintaining individual
            autonomy.
          </p>
          <p>
            <strong>Distribution:</strong> 0xSplit facilitates transparent and
            efficient fund distribution according to contribution weights, with
            configurable distribution triggers.
          </p>
          <p>
            <strong>Streaming:</strong> Superfluid enables continuous streaming
            of funds, creating predictable resource flows for guild members.
          </p>
          <p>
            <strong>Role Management:</strong> Hats Protocol provides flexible
            role and permission management for specialized functions within
            guilds.
          </p>
          <p>
            <strong>Contribution Tracking:</strong> Coordinape supports
            peer-based contribution evaluation for fair resource allocation.
          </p>
        </div>
        <div className="flex gap-4 items-start flex-col py-20 max-w-xl">
          <h2 className="min-w-xs sm:pr-4 sm:border-r-2 sm:border-white-900">
            The Future of Guilds
          </h2>
          <p>
            Guilds significantly reduce coordination costs by minimizing
            bureaucracy and optimizing resource allocation. They create a
            positive-sum arrangement where contributors focus on value creation
            while funders gain confidence in their support of public goods. The
            key innovation is separating strategic coordination at the
            &quot;guild of guilds&quot; level from tactical execution within
            specialized domains, preserving local autonomy while enabling
            system-wide alignment.
          </p>
          <p>
            With proper support, this emerging ecosystem of guilds could evolve
            into a mycelial network of interconnected guilds - an adaptive
            system for capital allocation across the ecosystem. Like mycelium in
            nature, this network would direct resources to their highest impact
            points, develop specialized nodes for particular domains, and
            optimize decision-making by delegating it to appropriate local
            contexts. This architecture maintains autonomy at local levels while
            establishing unprecedented coordination capabilities at scale,
            allowing for emergent intelligence in resource allocation with
            minimal bureaucratic overhead.
          </p>
        </div>

        <div className="flex gap-4 items-start flex-col py-20 max-w-xl">
          <h2 className="">The Guild Guild Strategy</h2>
          <p>{">"} we are here</p>
          <p>
            <strong>Phase 1: Knowledge Sharing & Community</strong> We&apos;re
            documenting patterns from pioneering examples like Protocol Guild
            and creating a vibrant community of practice. Join our regular
            knowledge-sharing sessions and access our growing library of
            resources on guild formation.
          </p>
          <p>
            <strong>Phase 2: Guild Generator</strong> We&apos;re developing
            modular infrastructure to make guild creation accessible, with
            technical components and social coordination templates based on
            proven patterns from successful guilds.
          </p>
          <p>
            <strong>Phase 3: Nested Coordination</strong> Our long-term vision
            includes organizing &quot;guilds of guilds&quot; that enable
            strategic coordination across specialized domains while preserving
            tactical autonomy within individual guilds.
          </p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row py-20">
          <h2 className="min-w-xs sm:pr-4 sm:border-r-2 sm:border-white-900">
            Grant Program
          </h2>
          <div>
            <p>
              <strong>
                We&apos;re preparing a grant program for builders supporting the
                guild ecosystem.
              </strong>{" "}
            </p>
            <p>
              Your support will help catalyze a novel organizational ecosystem
              on Ethereum where contributors can focus on value creation and
              funders can confidently support public goods.
            </p>
            <p className="mt-4">Priority areas include:</p>
            <ul>
              <li>research and publishing best practices</li>
              <li>primitive improvements</li>
              <li>contribution tracking tools</li>
              <li>cross-guild coordination mechanisms</li>
            </ul>
            <p className="mt-4">
              Join us in building infrastructure for the next generation of
              collective power.
            </p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/oovg/guildguildxyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Go to Repo →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://discord.gg/JRvgcnha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Go to Discord →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://paragraph.xyz/@guildguild/guild-guild"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Read Announcement →
        </a>
      </footer>
    </div>
  );
}
