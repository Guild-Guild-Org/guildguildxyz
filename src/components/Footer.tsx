import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container row-start-3 flex sm:flex-row flex-col gap-6 flex-wrap items-center justify-between py-12">
      <p>
        Built on{" "}
        <a
          href="https://ethereum.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ethereum
        </a>
      </p>
      <div className="flex sm:flex-row flex-col gap-6">
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
          href="https://discord.gg/XbAqvWptsq"
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
          href="https://x.com/guildguild_eth"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Follow on X →
        </a>
      </div>
    </footer>
  );
}
