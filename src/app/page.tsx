"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  const navbarProps = {
    logoSrc: "/images/logo.svg",
    logoAlt: "MemeCoin logo",
    logoWidth: 100,
    logoHeight: 100,
    navItems: [
      { name: "Hero", id: "hero" },
      { name: "About", id: "about" },
      { name: "How to Buy", id: "how-to-buy" },
      { name: "Tokenomics", id: "tokenomics" },
      { name: "FAQ", id: "faq" },
      { name: "Footer", id: "footer" },
    ],
    buttonText: "Buy Meme",
    onButtonClick: () => alert('Button Clicked')
  };

  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarLayoutSplitBottom {...navbarProps} />
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-b from-[rgba(255,106,106,.25)] to-transparent">
        <TokenBillboardHero
          title="Join the MemeCoin Revolution!"
          subtitle="The future of fun transactions"
          contractAddress="0x1234567890"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-white">
        <CtaAbout
          title="What is MemeCoin?"
          descriptions={[
            "MemeCoin is a cryptocurrency that focuses on fun transactions.",
            "Join a friendly community and enjoy easy crypto exchanges!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24 bg-gray-100">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24 bg-white">
        <PatternTokenomics
          title="Tokenomics"
          description="Here’s how our tokens work!"
          kpiItems={[
            { value: "1 Trillion", description: "Total Supply", icon: "DollarSign" },
            { value: "50%", description: "Liquidity", icon: "Lock" },
            { value: "10%", description: "Development", icon: "Cog" }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24 bg-gray-50">
        <CentralFAQ
          items={[
            { title: "How to buy?", content: "You can buy MemeCoin through various crypto exchanges." },
            { title: "What is MemeCoin?", content: "A fun cryptocurrency for various uses." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-black">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin logo"
          logoText="MemeCoin"
          columns={[
            { items: [{ label: "Roadmap", onClick: () => alert('Roadmap Clicked') }, { label: "Contact", onClick: () => alert('Contact Clicked') }] },
            { items: [{ label: "Privacy Policy", onClick: () => alert('Privacy Policy Clicked') }, { label: "Terms of Service", onClick: () => alert('Terms of Service Clicked') }] },
            { items: [{ label: "FAQ", onClick: () => alert('FAQ Clicked') }, { label: "Support", onClick: () => alert('Support Clicked') }] }
          ]}
          copyrightText="© 2023 MemeCoin. All rights reserved"
          onPrivacyClick={() => alert('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}