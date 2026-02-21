import { Check, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GradientMeshBg from "@/components/GradientMeshBg";
import ContactForm from "@/components/ContactForm";

const applyImg = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop";

const Apply = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <GradientMeshBg />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left - Benefits */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Get Started</p>
                <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                  Apply as a Preferred Contractor
                </h1>
                <p className="text-text-secondary mb-8">
                  Join the Affiliate Warehouse network and start accessing corporate-level pricing from Australia's leading wholesalers.
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {[
                    "Access TradeZone, Ideal Electrical & Voltex accounts",
                    "1.1% fee only on verified savings",
                    "No lock-ins, no minimum spend, no exit fees",
                    "Automated price tracking & alerts",
                    "Compare freely against your own accounts",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-text-secondary text-sm">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="glass-card rounded-xl p-4 mb-6">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-text-secondary text-xs italic">
                    "Straightforward, transparent, and exactly what it claims to be." — James C., Brisbane
                  </p>
                </div>

                {/* What happens after */}
                <h3 className="font-heading font-bold text-foreground mb-3">What happens after you apply</h3>
                <div className="space-y-2">
                  {[
                    "We review your application (2-3 business days)",
                    "We call to walk you through onboarding",
                    "Your accounts are set up with wholesalers",
                    "You start ordering and tracking prices",
                  ].map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-mono text-primary font-bold">
                        {i + 1}
                      </div>
                      <span className="text-text-secondary text-sm">{s}</span>
                    </div>
                  ))}
                </div>

                {/* Image */}
                <img src={applyImg} alt="Solar installer" className="rounded-2xl w-full h-48 object-cover border border-border mt-8 hidden lg:block" loading="lazy" />
              </ScrollReveal>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <ContactForm variant="contractor" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
