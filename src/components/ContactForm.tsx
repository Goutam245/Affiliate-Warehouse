import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const schema = z.object({
  businessName: z.string().trim().min(1, "Business name is required").max(100),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  variant: "contractor" | "call" | "wholesaler";
}

const config = {
  contractor: {
    icon: "⚡",
    title: "Preferred Contractor Application",
    subtitle: "Apply for access to Affiliate Warehouse accounts",
    buttonText: "Submit My Application",
    buttonVariant: "hero" as const,
    borderColor: "border-t-primary",
    successMessage: "Thanks — your details have been received. We'll review your application and call you at your scheduled time to walk through the onboarding process and answer any questions.",
    microcopy: "No discount, no charge. Compare pricing anytime.",
    showMessage: false,
  },
  call: {
    icon: "📞",
    title: "Book an Information Call",
    subtitle: "Not ready to apply yet? Book a no-obligation call.",
    buttonText: "Book My Call",
    buttonVariant: "cyan" as const,
    borderColor: "border-t-secondary",
    successMessage: "Thanks for booking in. We'll call you at your selected time to walk you through how Affiliate Warehouse works and answer any questions.",
    microcopy: "No discount, no charge. Compare pricing freely.",
    showMessage: false,
  },
  wholesaler: {
    icon: "🏭",
    title: "Wholesaler Expression of Interest",
    subtitle: "Suppliers — explore alignment with Affiliate Warehouse.",
    buttonText: "Register Interest",
    buttonVariant: "amber" as const,
    borderColor: "border-t-accent",
    successMessage: "Thanks — we've received your details. We'll call you at your scheduled time to discuss the Affiliate Warehouse model and next steps.",
    microcopy: "",
    showMessage: true,
  },
};

const ContactForm = ({ variant }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const cfg = config[variant];

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`glass-card rounded-2xl p-8 border-t-4 ${cfg.borderColor}`}>
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <p className="text-success font-medium mb-2">Application Received</p>
          <p className="text-text-secondary text-sm leading-relaxed">{cfg.successMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-card rounded-2xl p-8 border-t-4 ${cfg.borderColor}`}>
      <div className="mb-6">
        <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
          {cfg.icon} {cfg.title}
        </h3>
        <p className="text-text-secondary text-sm mt-1">{cfg.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("businessName")}
            placeholder={variant === "wholesaler" ? "Company Name" : "Business Name"}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.businessName && <p className="text-destructive text-xs mt-1">{errors.businessName.message}</p>}
        </div>
        <div>
          <input
            {...register("contactName")}
            placeholder="Contact Name"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.contactName && <p className="text-destructive text-xs mt-1">{errors.contactName.message}</p>}
        </div>
        <div>
          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Email Address"
            type="email"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
        </div>
        {cfg.showMessage && (
          <div>
            <textarea
              {...register("message")}
              placeholder="Message (optional)"
              rows={3}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
        )}

        <Button type="submit" variant={cfg.buttonVariant} size="lg" className="w-full" disabled={loading}>
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          {cfg.buttonText}
        </Button>

        {cfg.microcopy && (
          <p className="text-xs text-muted-foreground text-center">{cfg.microcopy}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
