"use client";
import { useState } from "react";
import { useTranslation } from "../../context/TranslationContext";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(t(`footer.newsletterAlert, ${email}`));
      setEmail("");
    }
  };

  return (
    <>
      {/* Newsletter Section */}
      <div className="py-12 bg-white w-[80%] mx-auto relative -bottom-10 rounded-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-black mb-2">
                {t("footer.newsletter")}
              </h3>
            </div>
            <div className="flex-1 max-w-lg">
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex bg-gray-800 rounded-full overflow-hidden"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.newsletter.placeholder")}
                  className="flex-1 px-6 w-full py-4 bg-transparent text-white placeholder-gray-400 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors -translate-x-[4px] self-center"
                >
                  {t("footer.newsletter.cta")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className={`bg-gray-800 text-orange-500 ${className}`}>
        {/* Main Footer Content */}
        <div className="bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-6">
                <img
                  src="/images/img_cucgcpw7400x400_1.png"
                  alt="JABA SPACE Logo"
                  className="h-20 w-28 object-contain"
                />
                <p className="text-white text-base leading-6">
                  {t("footer.description")}
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src="/images/img_linkedin.svg"
                      alt="LinkedIn"
                      className="w-9 h-9"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src="/images/img_facebook.svg"
                      alt="Facebook"
                      className="w-9 h-9"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src="/images/img_twitter.svg"
                      alt="Twitter"
                      className="w-9 h-9"
                    />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-orange-500">
                  {t("footer.links.title")}
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {t("footer.links.about")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {t("footer.links.services")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {t("footer.links.team")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {t("footer.links.blog")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {t("footer.links.contact")}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Information */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-orange-500">
                  {t("footer.info.title")}
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {t("footer.info.faq")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {t("footer.info.blog")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {t("footer.info.support")}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-orange-500">
                  {t("footer.contacts.title")}
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-300">{t("footer.contacts.phone1")}</p>
                  <p className="text-gray-300">{t("footer.contacts.phone2")}</p>
                  <p className="text-gray-300">{t("footer.contacts.email")}</p>
                  <p className="text-gray-300 leading-tight">
                    {t("footer.contacts.address")}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-orange-500 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-300 text-base">
                  {t("footer.copyright")}
                </p>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    {t("footer.privacy")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
