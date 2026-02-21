import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      {/* Orange gradient divider */}
      <div className="gradient-separator" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-orange flex items-center justify-center font-display font-bold text-lg text-foreground">
                AW
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Affiliate Warehouse
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transparent Procurement for Australian Trade
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Platform</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "How It Works", path: "/how-it-works" },
                { label: "Pricing & Fees", path: "/pricing" },
                { label: "Price Tracking", path: "/price-tracking" },
                { label: "For Wholesalers", path: "/wholesalers" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-sm text-text-secondary hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Apply as Contractor", path: "/apply" },
                { label: "Book an Info Call", path: "/contact" },
                { label: "Wholesaler Enquiry", path: "/wholesalers" },
                { label: "FAQ", path: "/faq" },
              ].map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-text-secondary hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trade Industries */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Trade Industries</h4>
            <div className="flex flex-col gap-2 text-sm text-text-secondary">
              <span>Electrical Contractors</span>
              <span>HVAC & Air Conditioning</span>
              <span>Solar Installers</span>
              <span>Trade Businesses</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Affiliate Warehouse. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
