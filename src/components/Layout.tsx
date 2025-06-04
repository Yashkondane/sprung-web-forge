
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg relative z-50">
        {/* Top bar */}
        <div className="bg-blue-900 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>info@precisionsprings.com</span>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-900">
                PrecisionSprings
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-900 font-medium transition-colors ${
                    isActive(item.href) ? "text-blue-900 border-b-2 border-blue-900" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/quote">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded ${
                    isActive(item.href) ? "text-blue-900 bg-blue-50" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="block px-3 py-2 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PrecisionSprings</h3>
              <p className="text-gray-300">
                Leading manufacturer of custom precision springs for industrial applications worldwide.
              </p>
              <div className="mt-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  ISO 9001:2015 Certified
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/products" className="hover:text-white">Compression Springs</Link></li>
                <li><Link to="/products" className="hover:text-white">Extension Springs</Link></li>
                <li><Link to="/products" className="hover:text-white">Torsion Springs</Link></li>
                <li><Link to="/products" className="hover:text-white">Wire Forms</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/industries" className="hover:text-white">Automotive</Link></li>
                <li><Link to="/industries" className="hover:text-white">Aerospace</Link></li>
                <li><Link to="/industries" className="hover:text-white">Medical Devices</Link></li>
                <li><Link to="/industries" className="hover:text-white">Industrial Equipment</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>info@precisionsprings.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>123 Industrial Way, Manufacturing City, MC 12345</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 PrecisionSprings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
