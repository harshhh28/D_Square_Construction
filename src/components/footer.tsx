import Link from "next/link";
import {
  HardHat,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <HardHat className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">DSquare Construction</span>
            </div>
            <p className="text-muted-foreground">
              Building excellence with precision and passion. Your vision, our
              expertise.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  D/5 Vasoya Park Society, Ahmedabad, Gujarat, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a
                  href="tel:+91-982-447-4184"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  (982) 447-4184
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a
                  href="mailto:dsquareconstruction@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  dsquareconstruction@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on our latest projects and
              construction tips.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DSquare Construction. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-muted-foreground">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
