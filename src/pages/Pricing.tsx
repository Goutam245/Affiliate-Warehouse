import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GradientMeshBg from "@/components/GradientMeshBg";

const Pricing = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <GradientMeshBg />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Pricing</p>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Simple, Transparent, Performance-Based Fees
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              You only pay when you genuinely save. No hidden fees, no setup costs, no surprises.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Fee breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">How Fees Work</h2>
              
              {/* Example calc */}
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h3 className="font-heading font-bold text-foreground text-lg mb-6">Savings Example</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-text-secondary">Monthly spend through AW</span>
                    <span className="font-mono font-bold text-foreground">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-text-secondary">Discount achieved</span>
                    <span className="font-mono font-bold text-success">8% = $4,000 saved</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-text-secondary">AW fee (1.1% of savings)</span>
                    <span className="font-mono font-bold text-primary">$44</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-heading font-bold text-foreground">You keep</span>
                    <span className="font-mono font-bold text-2xl text-success">$3,956</span>
                  </div>
                </div>
              </div>

              {/* Scenarios */}
              <h3 className="font-heading font-bold text-foreground text-lg mb-4">What-If Scenarios</h3>
              <div className="glass-card rounded-2xl overflow-hidden mb-12">
                <div className="grid grid-cols-4 text-sm font-heading font-bold border-b border-border">
                  <div className="px-4 py-3 text-text-secondary">Monthly Spend</div>
                  <div className="px-4 py-3 text-text-secondary text-center">Discount</div>
                  <div className="px-4 py-3 text-text-secondary text-center">AW Fee</div>
                  <div className="px-4 py-3 text-text-secondary text-center">You Keep</div>
                </div>
                {[
                  ["$10,000", "6% = $600", "$6.60", "$593.40"],
                  ["$25,000", "7% = $1,750", "$19.25", "$1,730.75"],
                  ["$50,000", "8% = $4,000", "$44.00", "$3,956.00"],
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 text-sm border-b border-border/50">
                    <div className="px-4 py-3 font-mono text-foreground">{row[0]}</div>
                    <div className="px-4 py-3 font-mono text-success text-center">{row[1]}</div>
                    <div className="px-4 py-3 font-mono text-primary text-center">{row[2]}</div>
                    <div className="px-4 py-3 font-mono text-foreground font-bold text-center">{row[3]}</div>
                  </div>
                ))}
              </div>

              {/* What you never pay */}
              <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">What You Never Pay</h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "No Setup Fee", body: "Join at zero cost. No onboarding charges." },
                  { title: "No Minimum Spend", body: "Order as little or as much as needed." },
                  { title: "No Exit Fee", body: "Leave whenever you want. No penalties." },
                ].map((c) => (
                  <div key={c.title} className="glass-card rounded-2xl p-6 text-center">
                    <h3 className="font-heading font-bold text-foreground mb-2">{c.title}</h3>
                    <p className="text-text-secondary text-sm">{c.body}</p>
                  </div>
                ))}
              </div>

              {/* Billing */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-heading font-bold text-foreground mb-3">Billing Cycle</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Fees are calculated and invoiced monthly based on verified, confirmed savings from the previous billing period. Only purchases where a discount was achieved through Affiliate Warehouse accounts are included. You receive a detailed breakdown with every invoice.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Start Saving Today</h2>
            <p className="text-text-secondary mb-8">No risk. No obligations. Just better pricing.</p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
