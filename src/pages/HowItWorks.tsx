import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, Building2, ShoppingCart, BarChart3, DollarSign, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GradientMeshBg from "@/components/GradientMeshBg";

const steps = [
  {
    num: "01", icon: ClipboardList, title: "Apply as a Preferred Contractor",
    body: "Submit your trade business details to join the Affiliate Warehouse network. As an approved Preferred Contractor, you gain access to our national corporate wholesaler accounts — supplementing your existing trade relationships. Approval is straightforward for registered Australian trade businesses.",
    details: ["Free to apply — no setup costs", "Registered Australian trade businesses welcome", "Approval typically within 2-3 business days", "No changes to your existing supplier relationships"],
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85&fit=crop",
    callout: "Your existing accounts stay active. This is an additional option — not a replacement."
  },
  {
    num: "02", icon: Building2, title: "Access National Corporate Accounts",
    body: "Rather than purchasing separately through individual trade accounts, you may choose to purchase through Affiliate Warehouse's national corporate accounts with TradeZone, Ideal Electrical, and Voltex. Aggregated purchasing volume across our independent contractor network may enable access to pricing structures typically available only to large-scale operators.",
    details: ["Corporate volume pricing tiers", "TradeZone, Ideal Electrical, Voltex", "National coverage across Australia", "Same products, better potential pricing"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&fit=crop",
    callout: "Volume creates leverage. Group leverage creates better tiers."
  },
  {
    num: "03", icon: ShoppingCart, title: "Order Exactly as You Normally Would",
    body: "There's no change to how you order or what you order. You continue purchasing the same products from the same suppliers through the same processes you already use — just with the potential for improved pricing through our corporate accounts. Every order remains job-coded and fully traceable through normal wholesaler channels.",
    details: ["Same ordering process", "Same suppliers and products", "Job-coded and fully traceable", "Standard wholesaler invoicing"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&fit=crop",
    callout: "Zero workflow disruption. Your team won't notice any difference in process."
  },
  {
    num: "04", icon: BarChart3, title: "Track and Compare Pricing in Real Time",
    body: "Our system monitors your pricing across purchases over time, giving you full visibility on whether costs are rising or falling. Compare Affiliate Warehouse pricing against your own existing trade accounts at any time — no obligation to use our pricing if it isn't better. Optional email notifications alert you when significant price changes occur.",
    details: ["Automated price monitoring", "Compare against your own accounts", "Optional email alerts", "Historical pricing data available"],
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&fit=crop",
    callout: "If our pricing isn't better, you simply continue using your own accounts."
  },
  {
    num: "05", icon: DollarSign, title: "Pay Only When You Genuinely Save",
    body: "Our fee structure is completely performance-based. When a verified discount is achieved through Affiliate Warehouse, we retain 1.1% of that saving. You keep the remainder. If no discount is achieved on a purchase, there is zero charge. Fees are calculated and billed monthly based only on confirmed, verifiable savings.",
    details: ["1.1% of verified savings only", "No discount = zero charge", "Monthly billing cycle", "Transparent, verifiable calculations"],
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=85&fit=crop",
    callout: "Our success is tied to yours. We only earn when you genuinely save."
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <GradientMeshBg />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">The Process</p>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
              How Affiliate Warehouse Works
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              A transparent, five-step system designed around how Australian trade businesses already operate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center mb-24 ${i % 2 === 1 ? "" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-8xl font-display font-bold text-primary/10 mb-2">{step.num}</div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">{step.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-6">{step.body}</p>
                  <div className="space-y-2 mb-6">
                    {step.details.map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-text-secondary text-sm">{d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <p className="text-sm text-text-secondary italic">💡 {step.callout}</p>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img src={step.img} alt={step.title} className="rounded-2xl w-full h-[400px] object-cover border border-border" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-text-secondary mb-8">Join the network and start accessing better pricing today.</p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
