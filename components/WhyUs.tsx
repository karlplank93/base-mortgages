import { Target, MessageCircle, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const team = [
  {
    name: "Karl Plank",
    role: "Founder & Mortgage Adviser",
    image: "/karl.jpg",
    bio: "",
  },
  {
    name: "Vincent Uys",
    role: "Mortgage Adviser",
    image: "/vincent.jpg",
    bio: "With over 5 years of banking experience across BNZ and ASB, Vincent brings deep lender knowledge and a client-first approach to every mortgage.",
  },
];

const features = [
  {
    icon: Target,
    title: "Whole-of-market access",
    description: "We compare all five major banks and non-bank lenders to find the best fit for your situation — not just the easiest option.",
  },
  {
    icon: MessageCircle,
    title: "Plain English advice",
    description: "No jargon, no confusion. We explain everything clearly so you can make confident, informed decisions.",
  },
  {
    icon: Zap,
    title: "Fast & proactive",
    description: "We move quickly when you need to, and we proactively reach out before your rates expire so you're always in the optimal position.",
  },
  {
    icon: DollarSign,
    title: "Free to you",
    description: "Our advice costs you nothing. We're paid by the bank when your mortgage settles — so our interests are aligned with yours.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-offwhite py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">Why Base Mortgages</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate mb-4 leading-tight">
              Your mortgage adviser,<br />for life.
            </h2>
            <p className="text-lg text-gray-600 mb-9 max-w-xl">
              We're not a transactional service. We build long-term relationships and proactively manage your mortgage so you never leave money on the table.
            </p>

            <div className="space-y-7">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-5">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-mint flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="bg-gradient-to-br from-slate to-teal rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-56 h-56 rounded-full bg-teal/30 blur-3xl" />
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-7 mb-7">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="font-display text-5xl font-bold mb-1">5★</div>
                  <div className="text-xs text-white/55 leading-snug">Google Reviews from NZ homeowners</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="font-display text-5xl font-bold mb-1">5</div>
                  <div className="text-xs text-white/55 leading-snug">Major bank accreditations</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="font-display text-5xl font-bold mb-1">24hr</div>
                  <div className="text-xs text-white/55 leading-snug">Average response time</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="font-display text-5xl font-bold mb-1">$0</div>
                  <div className="text-xs text-white/55 leading-snug">Cost to you for our advice</div>
                </div>
              </div>

              <div className="bg-teal rounded-2xl p-5 text-center">
                <p className="text-sm text-white/80 mb-3">Ready to get started? Book a free call today.</p>
                <a
                  href="https://calendly.com/your-calendly-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-slate rounded-lg px-6 py-2.5 font-bold text-sm hover:opacity-90 transition"
                >
                  Book Discovery Call →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3 text-center">The Team</div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-slate mb-10 text-center leading-tight">
            The people behind your mortgage
          </h3>
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-mint mb-4 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-slate text-base">{member.name}</div>
                <div className="text-sm text-gray-500 mt-0.5">{member.role}</div>
                {member.bio && (
                  <p className="text-sm text-gray-500 mt-2 max-w-xs leading-relaxed">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
