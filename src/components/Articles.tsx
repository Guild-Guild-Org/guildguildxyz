export default function Articles() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col sm:flex-row gap-8">
        Articles about Guilding in Ethereum
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-8 flex-wrap">
        <a
          className="card hover:text-accent"
          href="https://trent.mirror.xyz/GDDRqetgglGR5IYK1uTXxLalwIH6pBF9nulmY9zarUw"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="py-8">
            <p className="text-xl">
              Capital and enclosure in software commons: Linux & Ethereum
            </p>
            <p>
              by <i>Trent van Epps</i>
            </p>
          </div>
        </a>
        <a
          className="card hover:text-accent"
          href="https://trent.mirror.xyz/MsXtV_TGZHp05FN_qmzeT8bBc1lRghR3Y0TPvAd-WrA"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="py-8">
            <p className="text-xl">
              Ethereum Guilds: opportunities + challenges
            </p>
            <p>
              by <i>Trent van Epps</i>
            </p>
          </div>
        </a>
        <a
          className="card hover:text-accent"
          href="https://tim.mirror.xyz/srVdVopOFhD_ZoRDR50x8n5wmW3aRJIrNEAkpyQ4_ng"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="py-8">
            <p className="text-xl">Protocol Guild Pledge</p>
            <p>
              by <i>Tim Beiko</i>
            </p>
          </div>
        </a>
        <a
          className="card hover:text-accent"
          href="https://trent.mirror.xyz/DLYnuoCN-Hwuu0s4G_XZVdI-c2OD2KP3UAg_UFB9MpY"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="py-8">
            <p className="text-xl">So - you want to start a Guild?</p>
            <p>
              by <i>Trent van Epps</i>
            </p>
          </div>
        </a>

        <a
          className="card hover:text-accent"
          href="https://trent.mirror.xyz/Lehny46ZMdxMEow0XE_RgowV2ntkp30chJRWPCEYbGQ"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="py-8">
            <p className="text-xl">
              ​Protocol Guild: a funding framework for the Ethereum commons
            </p>
            <p>
              by <i>Trent van Epps</i>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
