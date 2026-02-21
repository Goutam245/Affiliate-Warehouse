import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GradientMeshBg from "@/components/GradientMeshBg";
import ContactForm from "@/components/ContactForm";

const contactImg = "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=85&fit=crop";

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <GradientMeshBg />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <ScrollReveal>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Get in Touch</p>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-text-secondary mb-8">
                Have questions about Affiliate Warehouse? Book a no-obligation information call and we'll walk you through everything.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Phone, label: "Phone", value: "1300 AW TRADE" },
                  { icon: Mail, label: "Email", value: "info@affiliatewarehouse.com.au" },
                  { icon: Clock, label: "Hours", value: "Mon-Fri, 8am - 6pm AEST" },
                  { icon: MapPin, label: "Location", value: "Australia-wide service" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-foreground font-medium text-sm">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <img src={contactImg} alt="Professional on phone" className="rounded-2xl w-full h-64 object-cover border border-border" loading="lazy" />

              {/* Not sure guide */}
              <div className="glass-card rounded-xl p-6 mt-6">
                <h3 className="font-heading font-bold text-foreground mb-3">Not sure which form?</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>• <strong className="text-foreground">Contractor?</strong> <Link to="/apply" className="text-primary hover:underline">Apply here →</Link></p>
                  <p>• <strong className="text-foreground">Wholesaler?</strong> <Link to="/wholesalers" className="text-primary hover:underline">Register interest →</Link></p>
                  <p>• <strong className="text-foreground">Just want to chat?</strong> Use the form on this page.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal delay={0.1}>
              <ContactForm variant="call" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
