import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientMeshBg from "@/components/GradientMeshBg";
import MarqueeTrustBar from "@/components/MarqueeTrustBar";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import PricingDashboard from "@/components/PricingDashboard";
import ContactForm from "@/components/ContactForm";
import { ClipboardList, Building2, ShoppingCart, BarChart3, DollarSign, Shield, FileText, Handshake, Search } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=85&fit=crop";
const step1Img = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85&fit=crop";
const step2Img = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&fit=crop";
const priceImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&fit=crop";
const wholesalerImg = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&fit=crop";
const test1 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85&fit=crop";
const test2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85&fit=crop";
const test3 = "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=85&fit=crop";

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-24">
        <GradientMeshBg />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
                  <span className="text-sm">🇦🇺</span>
                  <span className="text-xs font-medium text-text-secondary">Australia's Premier Trade Procurement Network</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[84px] font-display font-bold leading-[1.1] mb-6">
                  <span className="gradient-text">We Help Our Preferred Contractors Access Better Pricing</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-text-secondary text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
                  Collective buying power, price tracking, and corporate-level trade accounts — without lock-ins, without obligations, without risk.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["No Lock-ins", "No Discount = No Charge", "Optional Price Alerts"].map((t) => (
                    <div key={t} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-text-secondary">
                      <Check className="w-3 h-3 text-primary" /> {t}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/apply">Apply as Preferred Contractor <ArrowRight className="w-5 h-5" /></Link>
                  </Button>
                  <Button variant="hero-ghost" size="xl" asChild>
                    <Link to="/contact">Book a Free Call</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Australian electrician at work"
                  className="rounded-2xl w-full h-[500px] object-cover border-2 border-primary/20"
                  loading="lazy"
                />
                {/* Floating stat cards */}
                <div className="absolute -top-4 -left-4 glass-card rounded-xl px-4 py-3 text-center">
                  <div className="font-mono text-2xl font-bold text-primary">1.1%</div>
                  <div className="text-xs text-text-secondary">Fee on savings only</div>
                </div>
                <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 text-center">
                  <div className="font-mono text-2xl font-bold text-secondary">3</div>
                  <div className="text-xs text-text-secondary">National wholesalers</div>
                </div>
                <div className="absolute bottom-8 -left-4 glass-card rounded-xl px-4 py-3 text-center">
                  <div className="font-mono text-2xl font-bold text-accent">$0</div>
                  <div className="text-xs text-text-secondary">If no discount</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <ArrowDown className="w-5 h-5 text-primary animate-scroll-bounce" />
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <MarqueeTrustBar />

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">Five Steps to Smarter Procurement</h2>
            <p className="text-text-secondary max-w-2xl mb-16">Transparent, compliant, and built around how you already work.</p>
          </ScrollReveal>

          {[
            { num: "01", icon: ClipboardList, title: "Apply as a Preferred Contractor", body: "Submit your trade business details to join the Affiliate Warehouse network. As an approved Preferred Contractor, you gain access to our national corporate wholesaler accounts — supplementing your existing trade relationships.", img: step1Img },
            { num: "02", icon: Building2, title: "Access National Corporate Accounts", body: "Rather than purchasing separately through individual trade accounts, you may choose to purchase through Affiliate Warehouse's national corporate accounts with TradeZone, Ideal Electrical, and Voltex.", img: step2Img },
            { num: "03", icon: ShoppingCart, title: "Order Exactly as You Normally Would", body: "There's no change to how you order or what you order. You continue purchasing the same products from the same suppliers — just with the potential for improved pricing through our corporate accounts.", img: priceImg },
            { num: "04", icon: BarChart3, title: "Track and Compare Pricing in Real Time", body: "Our system monitors your pricing across purchases over time, giving you full visibility on whether costs are rising or falling. Compare Affiliate Warehouse pricing against your own existing accounts at any time.", img: wholesalerImg },
            { num: "05", icon: DollarSign, title: "Pay Only When You Genuinely Save", body: "Our fee structure is completely performance-based. When a verified discount is achieved, we retain 1.1% of that saving. You keep the remainder. If no discount is achieved, there is zero charge.", img: heroImage },
          ].map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-8xl font-display font-bold text-primary/10 mb-4">{step.num}</div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.body}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img src={step.img} alt={step.title} className="rounded-2xl w-full h-[350px] object-cover border border-border" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-gradient-stats py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value="0" prefix="$" label="Cost if no discount achieved" />
            <StatCounter value="1.1" suffix="%" label="Maximum fee on verified savings" />
            <StatCounter value="3" suffix="+" label="National wholesaler partners" />
            <StatCounter value="0" label="Lock-in contracts or obligations" suffix="" prefix="" />
          </div>
        </div>
      </section>

      <div className="gradient-separator" />

      {/* ===== PRICE TRACKING ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Price Intelligence</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Know When Prices Move — Before They Affect Your Quote
              </h2>
              <div className="space-y-3 mb-8">
                {[
                  "Automated price monitoring across all repeat purchases",
                  "Historical price comparison against your own trade accounts",
                  "Optional email notifications for significant price movements",
                  "Supports accurate job quoting and forward cost planning",
                  "Full purchase history visible and exportable at any time",
                  "Set price change thresholds for custom alerts",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-text-secondary text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/price-tracking">See How Tracking Works <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <PricingDashboard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRICING COMPARISON ===== */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground text-center mb-4">
              Same Products. Same Suppliers. Group Leverage.
            </h2>
            <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
              See how Affiliate Warehouse accounts compare to standard trade pricing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-3 text-sm font-heading font-bold">
                <div className="px-6 py-4 bg-surface-light text-text-secondary"></div>
                <div className="px-6 py-4 bg-surface-light text-text-secondary text-center">Your Existing Trade Account</div>
                <div className="px-6 py-4 bg-gradient-orange text-foreground text-center">Affiliate Warehouse</div>
              </div>
              {[
                ["Pricing Tier", "Standard trade tier", "Corporate volume tier"],
                ["Wholesalers", "Your individual accounts", "TradeZone, Ideal, Voltex"],
                ["Price Tracking", "✗ Not included", "✓ Automated monitoring"],
                ["Price Alerts", "✗ Not included", "✓ Optional notifications"],
                ["Fee Model", "Fixed account costs", "1.1% on verified savings only"],
                ["Lock-in", "Account terms apply", "✗ None — exit anytime"],
                ["Minimum Spend", "Varies", "✗ None"],
              ].map(([label, col1, col2], i) => (
                <div key={i} className="grid grid-cols-3 text-sm border-t border-border/50">
                  <div className="px-6 py-3 font-medium text-foreground">{label}</div>
                  <div className="px-6 py-3 text-text-secondary text-center">{col1}</div>
                  <div className={`px-6 py-3 text-center ${col2?.startsWith("✓") ? "text-success font-medium" : col2?.startsWith("✗") ? "text-muted-foreground" : "text-foreground font-medium"}`}>
                    {col2}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6 italic max-w-2xl mx-auto">
              You are never obligated to use Affiliate Warehouse pricing. Compare freely against your existing accounts at any time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FEE STRUCTURE ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-12">
              No Savings? No Fee. It's That Simple.
            </h2>
          </ScrollReveal>

          {/* Flow diagram */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
              <div className="glass-card rounded-xl px-6 py-4 font-heading font-bold text-foreground">You Purchase</div>
              <ArrowRight className="w-5 h-5 text-primary rotate-90 md:rotate-0" />
              <div className="glass-card rounded-xl px-6 py-4 font-heading font-bold text-foreground">Discount Achieved?</div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-success font-bold text-sm">YES →</span>
                  <div className="glass-card rounded-xl px-4 py-3 text-sm"><span className="text-primary font-bold">AW earns 1.1%</span> + You keep the rest ✓</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-bold text-sm">NO →</span>
                  <div className="glass-card rounded-xl px-4 py-3 text-sm text-foreground font-medium">Zero charge ✓</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🚫", title: "No Setup Fee", body: "Join at zero cost" },
              { icon: "🚫", title: "No Minimum Spend", body: "Order what you need" },
              { icon: "🚫", title: "No Exit Fee", body: "Leave whenever you want" },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-text-secondary text-sm">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-gradient-orange rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-foreground font-medium">
                Fees billed monthly only on verified, confirmed savings. If you don't save, you don't pay.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="gradient-separator" />

      {/* ===== NO LOCK-IN ===== */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground text-center mb-12">
              Complete Freedom. Zero Obligations.
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📋", title: "No Contracts", body: "No agreement to sign. No terms to be bound by." },
              { icon: "💸", title: "No Minimum Spend", body: "Order as little or as much as your work requires." },
              { icon: "🔓", title: "No Exclusivity", body: "Continue using your existing trade accounts freely." },
              { icon: "🚪", title: "Stop Anytime", body: "Discontinue use at any time without process or penalty." },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 text-center h-full">
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-text-secondary text-sm">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHOLESALER ALIGNMENT ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                Designed to Complement Wholesaler Systems — Not Compete With Them
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Affiliate Warehouse operates entirely within existing wholesaler systems, processes, and terms of trade.",
                  "Pricing structures and availability are determined solely by the wholesaler.",
                  "No goods are resold. No supplier terms are altered. No parallel supply chain is created.",
                  "Every purchase is job-coded, fully traceable, and processed through standard wholesaler channels.",
                  "Contractor participation is voluntary and non-exclusive.",
                ].map((s, i) => (
                  <div key={i} className="pl-4 border-l-2 border-primary">
                    <p className="text-text-secondary text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-orange rounded-xl p-6 mb-6">
                <p className="text-foreground font-heading font-bold text-lg italic">
                  "This is collaboration and efficiency — not disruption."
                </p>
              </div>
              <Button variant="hero-ghost" size="lg" asChild>
                <Link to="/wholesalers">Wholesaler? Register Your Interest <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <img src={wholesalerImg} alt="Business handshake" className="rounded-2xl w-full h-[450px] object-cover border border-border" loading="lazy" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="gradient-separator" />

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground text-center mb-3">
              What Preferred Contractors Are Saying
            </h2>
            <div className="flex justify-center gap-1 mb-12">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-accent text-2xl">★</span>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: test1,
                quote: "Affiliate Warehouse has genuinely improved how we manage procurement costs. The price tracking feature alone saves us time every time we're quoting a larger job. Straightforward, transparent, and exactly what it claims to be.",
                name: "James Callahan",
                biz: "Callahan Electrical Pty Ltd",
                loc: "Brisbane, QLD",
              },
              {
                img: test2,
                quote: "We were sceptical at first — but the no-saving no-charge model removes any risk. We compared the pricing on our regular cable and conduit orders and the difference was noticeable within the first month.",
                name: "Sarah Nguyen",
                biz: "CoolZone HVAC Services",
                loc: "Melbourne, VIC",
              },
              {
                img: test3,
                quote: "Finally a procurement tool that speaks the language of a working trade business. No lock-ins, no confusing contracts — just better access to pricing with full transparency on what you're paying.",
                name: "Marcus Trevelyan",
                biz: "SunPath Solar Solutions",
                loc: "Sydney, NSW",
              },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-accent">★</span>
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-text-secondary">{t.biz}</p>
                      <p className="text-xs text-muted-foreground">{t.loc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THREE FORMS ===== */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground text-center mb-3">
              Choose How You'd Like to Connect
            </h2>
            <p className="text-text-secondary text-center mb-12">Three clear pathways — find the one that suits you.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {(["contractor", "call", "wholesaler"] as const).map((v, i) => (
              <ScrollReveal key={v} delay={i * 0.1}>
                <ContactForm variant={v} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE ===== */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Procurement Support Only", body: "We facilitate purchasing access, not resale" },
              { icon: FileText, title: "No Goods Resold", body: "All purchases direct through wholesaler channels" },
              { icon: Handshake, title: "Voluntary Participation", body: "Non-exclusive, no obligations" },
              { icon: Search, title: "Transparent Comparison", body: "Always compare against your own accounts" },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.05}>
                <div className="flex items-start gap-3">
                  <c.icon className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEGAL DISCLAIMER ===== */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
            Pricing and discounts are set by wholesalers and subject to change without notice. No guaranteed savings are implied or promised on any product or category. Larger and high-volume repeat purchases typically yield stronger results. Savings outcomes vary by product, supplier, volume, and market conditions. Affiliate Warehouse fees apply only where verifiable savings are confirmed. Participation is non-exclusive and entirely voluntary.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
