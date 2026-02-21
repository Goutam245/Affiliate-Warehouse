import { ArrowRight, Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GradientMeshBg from "@/components/GradientMeshBg";
import ContactForm from "@/components/ContactForm";

const Wholesalers = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <GradientMeshBg />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">For Suppliers</p>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
              For Wholesalers & Suppliers
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Affiliate Warehouse is built to complement your existing systems — not compete with them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What it is / is not */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="glass-card rounded-2xl p-8 border-t-4 border-t-success h-full">
                <h2 className="font-heading font-bold text-foreground text-xl mb-6">What Affiliate Warehouse Is</h2>
                <div className="space-y-3">
                  {[
                    "A procurement access service for independent trade contractors",
                    "Operates within existing wholesaler systems and terms",
                    "Aggregates purchasing volume to access corporate pricing tiers",
                    "Fully traceable, job-coded ordering through standard channels",
                    "Voluntary and non-exclusive for all participants",
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success mt-1 shrink-0" />
                      <span className="text-text-secondary text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card rounded-2xl p-8 border-t-4 border-t-destructive h-full">
                <h2 className="font-heading font-bold text-foreground text-xl mb-6">What Affiliate Warehouse Is Not</h2>
                <div className="space-y-3">
                  {[
                    "Not a reseller or parallel supply chain",
                    "Not a price negotiation service outside standard frameworks",
                    "Not a competitor to existing wholesaler relationships",
                    "Not an exclusive or binding arrangement",
                    "Not a modification to supplier terms of trade",
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-destructive mt-1 shrink-0" />
                      <span className="text-text-secondary text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key assurances */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Key Assurances</h2>
            <div className="space-y-4">
              {[
                "All purchases are processed through standard wholesaler channels and invoicing systems.",
                "Pricing structures and availability are determined solely by the wholesaler.",
                "No goods are resold. No supplier terms are altered.",
                "Every order is job-coded and fully traceable.",
                "Contractor participation is voluntary — businesses continue trading independently.",
                "Aggregated volume benefits wholesalers through increased throughput and repeat purchasing.",
              ].map((s, i) => (
                <div key={i} className="pl-4 border-l-2 border-primary">
                  <p className="text-text-secondary text-sm leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Personal address */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-heading font-bold text-foreground text-xl mb-4">If you're reading this as a supplier...</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We understand the importance of maintaining strong, transparent relationships with wholesalers and suppliers. Affiliate Warehouse was designed from the ground up to work within your existing frameworks — not around them.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We welcome the opportunity to discuss how this model works and address any questions you may have. Our goal is alignment, not disruption.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-lg">
          <ScrollReveal>
            <ContactForm variant="wholesaler" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Wholesalers;
