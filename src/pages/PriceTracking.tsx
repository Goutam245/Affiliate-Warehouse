import { Link } from "react-router-dom";
import { ArrowRight, Check, Bell, TrendingDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GradientMeshBg from "@/components/GradientMeshBg";
import PricingDashboard from "@/components/PricingDashboard";

const PriceTracking = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <GradientMeshBg />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Price Intelligence</p>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Your Pricing Intelligence Dashboard
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Monitor, compare, and get notified about price changes across all your regular purchases — in real time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dashboard + features */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">How Price Monitoring Works</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Every purchase made through Affiliate Warehouse accounts is tracked automatically. Our system compares pricing over time and against your existing trade accounts, giving you clear, actionable visibility into whether you're getting better deals.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: TrendingDown, title: "Automated Monitoring", body: "Prices are tracked across all repeat purchases automatically. No manual input required." },
                  { icon: Bell, title: "Custom Alerts", body: "Set price change thresholds and receive email notifications when significant movements occur." },
                  { icon: FileText, title: "Historical Data", body: "Full purchase history is visible and exportable at any time for your records and quoting." },
                  { icon: Mail, title: "Email Notifications", body: "Optional email alerts keep you informed without needing to log in and check." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
                      <p className="text-text-secondary text-sm">{f.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <PricingDashboard />
              <div className="mt-6 glass-card rounded-xl p-6">
                <h4 className="font-heading font-bold text-foreground text-sm mb-3">Notification Settings</h4>
                <div className="space-y-2">
                  {["Price drops > 5%", "Price increases > 3%", "New product pricing available", "Monthly summary report"].map((n) => (
                    <div key={n} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-text-secondary text-sm">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote accuracy */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">Better Quoting Accuracy</h2>
            <p className="text-text-secondary leading-relaxed mb-6 text-center">
              When you know exactly what materials cost — and how those costs have moved over time — you can quote jobs with confidence. No more guessing on cable prices or getting caught by unexpected cost increases mid-project.
            </p>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-text-secondary text-sm leading-relaxed italic">
                "One of our contractors told us they saved an hour on every quote just by having real-time price data available. That's not just a cost saving — it's a competitive advantage when you're responding to tenders and time-sensitive projects."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Start Tracking Your Prices</h2>
            <p className="text-text-secondary mb-8">Apply as a Preferred Contractor to access the price tracking dashboard.</p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PriceTracking;
