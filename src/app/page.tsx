"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

import Articles from "@/components/Articles";
const DynamicGraph = dynamic(() => import("@/components/Graph"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start container">
        <div className="hero-container">
          <div className="hero">
            <DynamicGraph />
          </div>
        </div>
        <div className="hero-content container">
          <h1 className="">Guild Guild</h1>
          <h3>
            A locus of coordination for gathering and distributing the means of
            Guilding on Ethereum.
          </h3>
          <ol className="list-inside list-decimal text-sm text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mt-8 mb-2">
              Organize knowledge commons and distribute best practices
            </li>
            <li className="mb-2">
              Support builders of tools and organizers of guilds
            </li>
            <li>Network Guilds for further disambiguation of autonomy</li>
          </ol>
          <div className="flex gap-4 mt-8 items-start flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:text-accent hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://paragraph.xyz/@guildguild/guild-guild"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Announcement
            </a>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[rgb(var(--foreground-rgb))] gap-2 text-[rgb(var(--background-rgb))] hover:transition-colors hover:bg-accent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://discord.gg/JRvgcnha"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-start flex-col sm:flex-row py-20">
          <div>
            <h2 className="min-w-xs sm:pr-4 sm:border-r-2 sm:border-white-900">
              The Modern Guild
            </h2>
            <Link className="mt-8 hover:text-accent" href="/deep">
              View Deep Dive
            </Link>
          </div>
          <p>
            A guild is a community of contributors who collaborate around a
            shared purpose. Modern guilds on Ethereum create collective
            bargaining power for their members while maintaining individual
            autonomy. They enable more efficient matching between specialized
            talent and funding sources by creating a legible group identity
            while reducing coordination costs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full">
          <h3 className="mb-6">The Benefits of Guilding</h3>
        </div>
        <section className="mb-12 text-sm flex flex-col sm:flex-row gap-2 w-full">
          <div className="max-w-xs">
            <h4 className="mt-6 mb-4">For Contributors</h4>
            <p>
              <strong>Collective Bargaining Power</strong>: Individuals gain
              leverage by organizing with peers
            </p>
            <p>
              <strong>Reduced Volatility</strong>: Pooled funding creates more
              stable income streams
            </p>
            <p>
              <strong>Focus on Craft</strong>: Less time spent on fundraising
              and more on specialized work
            </p>
            <p>
              <strong>Professional Development</strong>: Access to knowledge
              sharing and mentorship
            </p>
            <p>
              <strong>Shared Identity</strong>: Connection to a recognized,
              respected collective
            </p>
          </div>
          <div className="max-w-xs">
            <h4 className="mt-6 mb-4">For Funders</h4>
            <p>
              <strong>Simplified Discovery</strong>: Guilds create legible
              interfaces to specialized talent pools
            </p>
            <p>
              <strong>Reduced Diligence Costs</strong>: Leverage collective
              reputation and curation
            </p>
            <p>
              <strong>Aligned Incentives</strong>: Support self-organizing
              groups with proven track records
            </p>
            <p>
              <strong>Increased Impact</strong>: More efficient resource
              allocation to high-value contributors
            </p>
            <p>
              <strong>Long-term Relationships</strong>: Sustained support for
              critical domains
            </p>
          </div>
          <div className="max-w-xs">
            <h4 className="text-2xl mt-6 mb-4">For the Ecosystem</h4>

            <p>
              <strong>Knowledge Preservation</strong>: Guilds maintain
              specialized expertise over time
            </p>
            <p>
              <strong>Coordination Efficiency</strong>: Reduced attention costs
              for matching talent with funding
            </p>
            <p>
              <strong>Domain Specialization</strong>: Development of deep
              expertise in critical areas
            </p>
            <p>
              <strong>Pluralism</strong>: Multiple overlapping guilds prevent
              capture and centralization
            </p>
            <p>
              <strong>Public Goods Support</strong>: Sustainable funding models
              for non-monetizable work
            </p>
          </div>
        </section>

        <div className="flex gap-4 items-start flex-col sm:flex-row py-20">
          <div className="min-w-xs sm:pr-4 sm:border-r-2 sm:border-white-900">
            <h3>The Primitive: Self-curating Registry</h3>
            <Link className="mt-8 hover:text-accent" href="/deep">
              View Deep Dive
            </Link>
          </div>
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

        <Articles />

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
        <div className="flex gap-4 items-start flex-col sm:flex-row py-20">
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
              collective organizing on Ethereum.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
