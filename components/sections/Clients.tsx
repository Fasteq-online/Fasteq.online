import { CLIENT_LOGOS } from "@/constants";

const Clients = () => {
  return (
    <section className="py-12 border-b border-black/5 overflow-hidden bg-white">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-20 px-10">
            {CLIENT_LOGOS.map((logo) => (
              <span key={logo} className="text-2xl font-sans font-black text-brand-teal/20 hover:text-brand-copper transition-colors cursor-default uppercase italic tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;