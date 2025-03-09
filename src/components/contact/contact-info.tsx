import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Address</h3>
            <p className="text-muted-foreground">
              123 Construction Ave, Building City, BC 12345
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Phone Number</h3>
            <p className="text-muted-foreground">
              <a
                href="tel:+15551234567"
                className="hover:text-primary transition-colors">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Email</h3>
            <p className="text-muted-foreground">
              <a
                href="mailto:info@dsquareconstruction.com"
                className="hover:text-primary transition-colors">
                info@dsquareconstruction.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
