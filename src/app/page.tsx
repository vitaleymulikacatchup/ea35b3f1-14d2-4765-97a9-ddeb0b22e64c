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
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={160}
        logoHeight={40}
        navItems={[
          { name: 'Home', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'FAQ', id: 'faq' },
          { name: 'Footer', id: 'footer' },
        ]}
        className="bg-opacity-80"
        buttonText="Buy Meme"
        onButtonClick={() => { /* your logic here */ }}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to MemeCoin"
          subtitle="Join the fun and start trading today!"
          contractAddress="0x..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is MemeCoin?"
          descriptions={[
            "MemeCoin is the most playful coin in the crypto universe.",
            "Our mission is to create a community-driven cryptocurrency with a fun twist.",
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant='reveal' />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="MemeCoin Tokenomics"
          description="Understanding the economic model behind MemeCoin"
          kpiItems={[
            { value: "10M", description: "Total Supply", icon: { icon: 'star' } },
            { value: "5M", description: "Circulating Supply", icon: { icon: 'star' } },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ items={[
          { title: 'What is MemeCoin?', content: 'MemeCoin is a fun and community-driven cryptocurrency.' },
          { title: 'How can I buy MemeCoin?', content: 'You can buy MemeCoin on multiple exchanges.' },
        ]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Logo"
          logoText="MemeCoin"
          columns={[
            { items: [
              { label: 'Home', onClick: () => {} },
              { label: 'About', onClick: () => {} },
            ] },
            { items: [
              { label: 'Tokenomics', onClick: () => {} },
              { label: 'FAQ', onClick: () => {} },
            ] },
          ]}
          copyrightText="© 2023 MemeCoin. All rights reserved."
          onPrivacyClick={() => {} }
          className="bg-opacity-50"
        />
      </div>
    </SiteThemeProvider>
  );
}