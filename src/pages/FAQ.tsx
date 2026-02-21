import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GradientMeshBg from "@/components/GradientMeshBg";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "General", "Fees & Pricing", "Wholesalers", "Compliance", "Getting Started"];

const faqs = [
  { q: "What wholesaler accounts do I get access to?", a: "As a Preferred Contractor, you gain access to Affiliate Warehouse's national corporate accounts with TradeZone, Ideal Electrical, and Voltex. These are supplementary to your existing trade accounts — you can use both simultaneously.", cat: "General" },
  { q: "How does Affiliate Warehouse make money?", a: "We retain 1.1% of any verified discount achieved through our corporate accounts. If no discount is achieved on a purchase, we charge nothing. Our revenue is entirely performance-based.", cat: "Fees & Pricing" },
  { q: "Am I locked in?", a: "No. There are no contracts, no minimum spend requirements, and no exit fees. You can stop using Affiliate Warehouse at any time without process or penalty.", cat: "General" },
  { q: "How do I know pricing is genuinely improving?", a: "You can compare Affiliate Warehouse pricing against your own existing trade accounts at any time. Our price tracking dashboard provides full visibility into pricing movements over time. You're never obligated to use our pricing if it isn't better.", cat: "Fees & Pricing" },
  { q: "Is this compliant with supplier systems?", a: "Yes. Affiliate Warehouse operates entirely within existing wholesaler systems, processes, and terms of trade. All purchases are processed through standard wholesaler channels and invoicing. No goods are resold and no supplier terms are altered.", cat: "Compliance" },
  { q: "What if it stops being useful?", a: "You can stop using Affiliate Warehouse at any time. There's no process required, no exit fee, and no penalty. Your existing trade accounts remain completely unaffected.", cat: "General" },
  { q: "How are better prices achieved?", a: "By aggregating purchasing volume across our network of independent contractors, we can access corporate pricing tiers that are typically available only to large-scale operators. This collective volume creates leverage within standard wholesaler frameworks.", cat: "General" },
  { q: "Who can apply?", a: "Registered Australian trade businesses in electrical, HVAC, solar, and related industries can apply. Approval is straightforward and typically completed within 2-3 business days.", cat: "Getting Started" },
  { q: "How long does approval take?", a: "Applications are typically reviewed within 2-3 business days. We'll contact you to walk through the onboarding process and answer any questions.", cat: "Getting Started" },
  { q: "Can I use my existing accounts alongside this?", a: "Absolutely. Affiliate Warehouse is non-exclusive. You continue using your existing trade accounts freely and can compare pricing at any time.", cat: "General" },
  { q: "What trades are supported?", a: "We primarily support electrical contractors, HVAC and air conditioning businesses, solar installers, and related trade businesses across Australia.", cat: "Getting Started" },
  { q: "How is the 1.1% fee calculated?", a: "The fee is calculated as 1.1% of the verified discount achieved through Affiliate Warehouse accounts compared to standard pricing. Fees are billed monthly based only on confirmed, verifiable savings.", cat: "Fees & Pricing" },
  { q: "Do wholesalers know I'm using Affiliate Warehouse?", a: "Your purchases are processed through Affiliate Warehouse's corporate accounts. Wholesalers are aware of and aligned with our model, which operates within their standard systems.", cat: "Wholesalers" },
  { q: "Can wholesalers participate?", a: "Yes. Wholesalers and suppliers can express interest in aligning with Affiliate Warehouse. We welcome conversations about how the model works and how it benefits all parties.", cat: "Wholesalers" },
  { q: "Is there a minimum order size?", a: "No. There is no minimum spend or order size requirement. You can order as little or as much as your work requires.", cat: "Fees & Pricing" },
];

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCat = activeCat === "All" || f.cat === activeCat;
      const matchesSearch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [search, activeCat]);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <GradientMeshBg />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Support</p>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Everything you need to know about Affiliate Warehouse.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Search + filters */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCat === c
                    ? "bg-gradient-orange text-foreground"
                    : "glass-card text-text-secondary hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-heading font-bold text-foreground text-sm pr-4">{faq.q}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No questions found matching your search.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-text-secondary mb-8">Book a free call and we'll walk you through everything.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/apply">Apply Now <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="hero-ghost" size="xl" asChild>
                <Link to="/contact">Book a Call</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
