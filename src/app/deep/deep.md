# Guild Guild Deep Dive

## Guilds: The Machine

Ethereum guilds are elegant coordination mechanisms built from simple components that work together to create powerful collective entities. At their core, guilds combine on-chain identity, self-governance, and resource distribution to enable specialized groups to organize effectively while minimizing bureaucracy.

### Base Components

#### Self-Curating Registry (SCR)

A self-curating registry is the foundation of any guild - an on-chain record of contributors and their relative weights within the organization. The SCR serves as:

- A shared identity (Ethereum address) representing the collective
- A transparent record of who belongs to the guild and their contribution level
- The input/output interface connecting the guild to the broader Ethereum ecosystem

Self-curation means the registry is maintained by the same entities listed within it. Any address on the registry has the power to propose and vote on updates, ensuring the registry remains accurate and up-to-date without requiring external oversight.

#### Base Governance

Governance enables the registry to evolve over time through collective decision-making. Key governance functions include:

- Adding or removing members as contributors join or leave
- Adjusting contribution weights to reflect changing participation levels
- Implementing rule changes for how the registry operates
- Executing collective decisions through the shared Ethereum address

Most guilds employ simple majority voting with optional weighting systems. The governance layer is intentionally minimal, focusing only on maintaining an accurate representation of the collective while preserving individual autonomy.

#### Splitter

The splitter component automatically distributes resources received by the guild according to the weights recorded in the registry. Features include:

- Transparent and predictable distribution of incoming funds
- Configurable distribution triggers (manual, time-based, or threshold-based)
- Support for multiple token types and payment streams
- Optional vesting or lockup mechanisms

Using tools like 0xSplit, guilds can implement sophisticated distribution logic while maintaining low operational overhead.

#### Streaming

Resource streaming creates predictable, continuous flows of value to guild members, enabling:

- Stable, predictable income for contributors
- Reduced treasury management complexity
- More efficient capital utilization
- Smoother funding relationships with sponsors

Protocols like Superfluid enable guilds to implement sophisticated streaming arrangements that align funding with ongoing contribution.

### Extra Components

#### Roles

Role management systems extend guild functionality by assigning specialized permissions to members:

- Treasury management roles for financial operations
- Communication roles for external representation
- Administrative roles for operational tasks
- Working group roles for specific projects

Tools like Hats Protocol allow guilds to implement flexible role systems that evolve with their needs while preserving core decentralization.

#### Contribution Tracking

Contribution tracking mechanisms help guilds quantify and recognize member contributions:

- Peer-based evaluation systems (like Coordinape)
- Quantitative metrics for measurable outputs
- Qualitative assessment frameworks
- Hybrid approaches combining multiple signals

Effective contribution tracking creates the data foundation for fair resource distribution while incentivizing valuable participation.

## The Benefits of Guilding

### For Contributors

- **Collective Bargaining Power**: Individuals gain leverage by organizing with peers
- **Reduced Volatility**: Pooled funding creates more stable income streams
- **Focus on Craft**: Less time spent on fundraising and more on specialized work
- **Professional Development**: Access to knowledge sharing and mentorship
- **Shared Identity**: Connection to a recognized, respected collective

### For Funders

- **Simplified Discovery**: Guilds create legible interfaces to specialized talent pools
- **Reduced Diligence Costs**: Leverage collective reputation and curation
- **Aligned Incentives**: Support self-organizing groups with proven track records
- **Increased Impact**: More efficient resource allocation to high-value contributors
- **Long-term Relationships**: Sustained support for critical domains

### For the Ecosystem

- **Knowledge Preservation**: Guilds maintain specialized expertise over time
- **Coordination Efficiency**: Reduced attention costs for matching talent with funding
- **Domain Specialization**: Development of deep expertise in critical areas
- **Pluralism**: Multiple overlapping guilds prevent capture and centralization
- **Public Goods Support**: Sustainable funding models for non-monetizable work

## Implementation Approaches

### Formation Logic

Guilds typically evolve through these stages:

1. **Initial Formation**: Small group identifies shared purpose and establishes basic registry
2. **Contribution Differentiation**: As collaboration emerges, contribution patterns become visible
3. **Weight Calibration**: Registry weights adjust to reflect relative contribution levels
4. **Structure Refinement**: Governance and distribution mechanisms evolve with group needs

Most guilds start with flat structures (equal weights) and gradually develop more nuanced systems as their understanding of contribution value matures.

### Weighting Methods

#### Qualitative Approaches

- **Simple Time-Based**: Weights determined by time contributed (full-time vs. part-time)
- **Peer Review**: Collaborative assessment of contribution value through tools like Coordinape
- **Governance-Driven**: Collective decisions on appropriate weights through voting

#### Quantitative Approaches

- **Metric-Based**: Objective measurements of output or impact
- **Token-Based**: Representation of contribution through tokenized systems
- **Data-Driven**: External signals from contribution tracking systems

Each guild must select weighting methods that align with its values and the nature of its work. The most successful guilds combine multiple signals to create fair, nuanced contribution recognition.

### Nested Registries

As the guild ecosystem matures, we'll see the emergence of "guilds of guilds" - nested registries that coordinate across specialized domains:

```
Public Goods Fund
   /    |    \
PG1   PG2    PG3  (Each a guild with its own registry)
```

This structure enables:

- Domain-specific tactical autonomy
- Strategic coordination across specialties
- Efficient attention allocation
- Preservation of local context and expertise

## Glossary

**Attractor**: A specialized SCR with a splitter component that receives and distributes resources.

**Curation Logic**: The rules and processes by which a guild determines who belongs in its registry and at what weight.

**Guild**: A self-organizing group of contributors sharing a common purpose, represented by a self-curating registry on Ethereum.

**Guilding**: The practice of creating, stewarding, enabling, or studying guild-based organizations.

**Public Goods**: Non-excludable resources that benefit the ecosystem but are difficult to monetize directly.

**Self-Curating Registry (SCR)**: An on-chain record of data (typically addresses) that is maintained by the same entities listed within it.

**Splitting Logic**: The rules determining how resources are distributed among guild members.

**Weighting**: The relative allocation of voting power and/or resource distribution assigned to each member of a guild.
