"use client";
import dynamic from "next/dynamic";

const DynamicGraph = dynamic(() => import("@/components/Graph"), {
  ssr: false,
});

export default function DeepPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start container">
        <div className="hero-container">
          <div className="hero">
            <DynamicGraph />
          </div>
        </div>
        <div className="hero-content container">
          <h1>Deep Dive</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl mb-6">Guilds: The Machine</h2>
          <p className="mb-6">
            Ethereum guilds are elegant coordination mechanisms built from
            simple components that work together to create powerful collective
            entities. At their core, guilds combine on-chain identity,
            self-governance, and resource distribution to enable specialized
            groups to organize effectively while minimizing bureaucracy.
          </p>

          <h3 className="text-2xl mt-8 mb-4">Base Components</h3>

          <h4 className="text-xl mt-6 mb-2">Self-Curating Registry (SCR)</h4>
          <p className="mb-4">
            A self-curating registry is the foundation of any guild - an
            on-chain record of contributors and their relative weights within
            the organization. The SCR serves as:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              A shared identity (Ethereum address) representing the collective
            </li>
            <li>
              A transparent record of who belongs to the guild and their
              contribution level
            </li>
            <li>
              The input/output interface connecting the guild to the broader
              Ethereum ecosystem
            </li>
          </ul>
          <p className="mb-6">
            Self-curation means the registry is maintained by the same entities
            listed within it. Any address on the registry has the power to
            propose and vote on updates, ensuring the registry remains accurate
            and up-to-date without requiring external oversight.
          </p>

          <h4 className="text-xl mt-6 mb-2">Base Governance</h4>
          <p className="mb-4">
            Governance enables the registry to evolve over time through
            collective decision-making. Key governance functions include:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Adding or removing members as contributors join or leave</li>
            <li>
              Adjusting contribution weights to reflect changing participation
              levels
            </li>
            <li>Implementing rule changes for how the registry operates</li>
            <li>
              Executing collective decisions through the shared Ethereum address
            </li>
          </ul>
          <p className="mb-6">
            Most guilds employ simple majority voting with optional weighting
            systems. The governance layer is intentionally minimal, focusing
            only on maintaining an accurate representation of the collective
            while preserving individual autonomy.
          </p>

          <h4 className="text-xl mt-6 mb-2">Splitter</h4>
          <p className="mb-4">
            The splitter component automatically distributes resources received
            by the guild according to the weights recorded in the registry.
            Features include:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Transparent and predictable distribution of incoming funds</li>
            <li>
              Configurable distribution triggers (manual, time-based, or
              threshold-based)
            </li>
            <li>Support for multiple token types and payment streams</li>
            <li>Optional vesting or lockup mechanisms</li>
          </ul>
          <p className="mb-6">
            Using tools like 0xSplit, guilds can implement sophisticated
            distribution logic while maintaining low operational overhead.
          </p>

          <h4 className="text-xl mt-6 mb-2">Streaming</h4>
          <p className="mb-4">
            Resource streaming creates predictable, continuous flows of value to
            guild members, enabling:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Stable, predictable income for contributors</li>
            <li>Reduced treasury management complexity</li>
            <li>More efficient capital utilization</li>
            <li>Smoother funding relationships with sponsors</li>
          </ul>
          <p className="mb-6">
            Protocols like Superfluid enable guilds to implement sophisticated
            streaming arrangements that align funding with ongoing contribution.
          </p>

          <h3 className="text-2xl mt-8 mb-4">Extra Components</h3>

          <h4 className="text-xl mt-6 mb-2">Roles</h4>
          <p className="mb-4">
            Role management systems extend guild functionality by assigning
            specialized permissions to members:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Treasury management roles for financial operations</li>
            <li>Communication roles for external representation</li>
            <li>Administrative roles for operational tasks</li>
            <li>Working group roles for specific projects</li>
          </ul>
          <p className="mb-6">
            Tools like Hats Protocol allow guilds to implement flexible role
            systems that evolve with their needs while preserving core
            decentralization.
          </p>

          <h4 className="text-xl mt-6 mb-2">Contribution Tracking</h4>
          <p className="mb-4">
            Contribution tracking mechanisms help guilds quantify and recognize
            member contributions:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Peer-based evaluation systems (like Coordinape)</li>
            <li>Quantitative metrics for measurable outputs</li>
            <li>Qualitative assessment frameworks</li>
            <li>Hybrid approaches combining multiple signals</li>
          </ul>
          <p className="mb-6">
            Effective contribution tracking creates the data foundation for fair
            resource distribution while incentivizing valuable participation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl mb-6">The Benefits of Guilding</h2>

          <h3 className="text-2xl mt-6 mb-4">For Contributors</h3>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>Collective Bargaining Power</strong>: Individuals gain
              leverage by organizing with peers
            </li>
            <li>
              <strong>Reduced Volatility</strong>: Pooled funding creates more
              stable income streams
            </li>
            <li>
              <strong>Focus on Craft</strong>: Less time spent on fundraising
              and more on specialized work
            </li>
            <li>
              <strong>Professional Development</strong>: Access to knowledge
              sharing and mentorship
            </li>
            <li>
              <strong>Shared Identity</strong>: Connection to a recognized,
              respected collective
            </li>
          </ul>

          <h3 className="text-2xl mt-6 mb-4">For Funders</h3>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>Simplified Discovery</strong>: Guilds create legible
              interfaces to specialized talent pools
            </li>
            <li>
              <strong>Reduced Diligence Costs</strong>: Leverage collective
              reputation and curation
            </li>
            <li>
              <strong>Aligned Incentives</strong>: Support self-organizing
              groups with proven track records
            </li>
            <li>
              <strong>Increased Impact</strong>: More efficient resource
              allocation to high-value contributors
            </li>
            <li>
              <strong>Long-term Relationships</strong>: Sustained support for
              critical domains
            </li>
          </ul>

          <h3 className="text-2xl mt-6 mb-4">For the Ecosystem</h3>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>Knowledge Preservation</strong>: Guilds maintain
              specialized expertise over time
            </li>
            <li>
              <strong>Coordination Efficiency</strong>: Reduced attention costs
              for matching talent with funding
            </li>
            <li>
              <strong>Domain Specialization</strong>: Development of deep
              expertise in critical areas
            </li>
            <li>
              <strong>Pluralism</strong>: Multiple overlapping guilds prevent
              capture and centralization
            </li>
            <li>
              <strong>Public Goods Support</strong>: Sustainable funding models
              for non-monetizable work
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl mb-6">Implementation Approaches</h2>

          <h3 className="text-2xl mt-6 mb-4">Formation Logic</h3>
          <p className="mb-4">Guilds typically evolve through these stages:</p>
          <ol className="list-decimal pl-8 mb-6">
            <li>
              <strong>Initial Formation</strong>: Small group identifies shared
              purpose and establishes basic registry
            </li>
            <li>
              <strong>Contribution Differentiation</strong>: As collaboration
              emerges, contribution patterns become visible
            </li>
            <li>
              <strong>Weight Calibration</strong>: Registry weights adjust to
              reflect relative contribution levels
            </li>
            <li>
              <strong>Structure Refinement</strong>: Governance and distribution
              mechanisms evolve with group needs
            </li>
          </ol>
          <p className="mb-6">
            Most guilds start with flat structures (equal weights) and gradually
            develop more nuanced systems as their understanding of contribution
            value matures.
          </p>

          <h3 className="text-2xl mt-6 mb-4">Weighting Methods</h3>

          <h4 className="text-xl mt-4 mb-2">Qualitative Approaches</h4>
          <ul className="list-disc pl-8 mb-4">
            <li>
              <strong>Simple Time-Based</strong>: Weights determined by time
              contributed (full-time vs. part-time)
            </li>
            <li>
              <strong>Peer Review</strong>: Collaborative assessment of
              contribution value through tools like Coordinape
            </li>
            <li>
              <strong>Governance-Driven</strong>: Collective decisions on
              appropriate weights through voting
            </li>
          </ul>

          <h4 className="text-xl mt-4 mb-2">Quantitative Approaches</h4>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>Metric-Based</strong>: Objective measurements of output or
              impact
            </li>
            <li>
              <strong>Token-Based</strong>: Representation of contribution
              through tokenized systems
            </li>
            <li>
              <strong>Data-Driven</strong>: External signals from contribution
              tracking systems
            </li>
          </ul>
          <p className="mb-6">
            Each guild must select weighting methods that align with its values
            and the nature of its work. The most successful guilds combine
            multiple signals to create fair, nuanced contribution recognition.
          </p>

          <h3 className="text-2xl mt-6 mb-4">Nested Registries</h3>
          <p className="mb-4">
            As the guild ecosystem matures, we'll see the emergence of "guilds
            of guilds" - nested registries that coordinate across specialized
            domains:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 text-center">
            Public Goods Fund <br /> / | \ <br />
            PG1 PG2 PG3 <br />
            <br />
            (Each a guild with its own registry)
          </pre>
          <p className="mb-4">This structure enables:</p>
          <ul className="list-disc pl-8 mb-6">
            <li>Domain-specific tactical autonomy</li>
            <li>Strategic coordination across specialties</li>
            <li>Efficient attention allocation</li>
            <li>Preservation of local context and expertise</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl mb-6">Glossary</h2>

          <dl className="mb-6">
            <dt className="mt-4">Attractor</dt>
            <dd className="pl-4 mb-2">
              A specialized SCR with a splitter component that receives and
              distributes resources.
            </dd>

            <dt className="mt-4">Curation Logic</dt>
            <dd className="pl-4 mb-2">
              The rules and processes by which a guild determines who belongs in
              its registry and at what weight.
            </dd>

            <dt className="mt-4">Guild</dt>
            <dd className="pl-4 mb-2">
              A self-organizing group of contributors sharing a common purpose,
              represented by a self-curating registry on Ethereum.
            </dd>

            <dt className="mt-4">Guilding</dt>
            <dd className="pl-4 mb-2">
              The practice of creating, stewarding, enabling, or studying
              guild-based organizations.
            </dd>

            <dt className="mt-4">Public Goods</dt>
            <dd className="pl-4 mb-2">
              Non-excludable resources that benefit the ecosystem but are
              difficult to monetize directly.
            </dd>

            <dt className="mt-4">Self-Curating Registry (SCR)</dt>
            <dd className="pl-4 mb-2">
              An on-chain record of data (typically addresses) that is
              maintained by the same entities listed within it.
            </dd>

            <dt className="mt-4">Splitting Logic</dt>
            <dd className="pl-4 mb-2">
              The rules determining how resources are distributed among guild
              members.
            </dd>

            <dt className="mt-4">Weighting</dt>
            <dd className="pl-4 mb-2">
              The relative allocation of voting power and/or resource
              distribution assigned to each member of a guild.
            </dd>
          </dl>
        </section>
      </main>
    </div>
  );
}
