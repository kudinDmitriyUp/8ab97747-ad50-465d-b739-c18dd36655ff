"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Music, Sparkles, Zap, Heart, Mail, MapPin, Instagram, Twitter, Github } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="plain"
      cardStyle="glass-outline-light"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="1USE"
          navItems={[
            { name: "Artists", id: "artists" },
            { name: "Music", id: "music" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="1USE Hip Hop & Trap"
          description="Experience raw energy, authentic bars, and trap beats that move your soul. Discover emerging artists pushing the boundaries of hip hop."
          tag="Now Streaming"
          tagIcon={Music}
          buttons={[
            { text: "Explore Artists", href: "artists" },
            { text: "Latest Tracks", href: "music" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949126051-iqsihkkf.jpg", imageAlt: "Hip hop performer on stage" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949126890-vqplxq7o.jpg", imageAlt: "Trap producer in studio" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949127725-z3d37tzo.jpg", imageAlt: "Urban artist portrait" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949128233-0nuhr2sv.jpg", imageAlt: "Concert stage energy" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949128967-rm24pn9k.jpg", imageAlt: "Hip hop performance" }
          ]}
        />
      </div>

      <div id="artists" data-section="artists">
        <TeamCardTwo
          title="Featured Artists"
          description="Meet the talented creators delivering next-level hip hop and trap music to the world."
          tag="Spotlight"
          tagIcon={Sparkles}
          members={[
            {
              id: "1",
              name: "DJ Cipher",
              role: "Hip Hop Producer",
              description: "Crafting boom bap beats with modern edge. 5 years in the game, 10M+ streams.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949129623-8zka9ozj.jpg",
              imageAlt: "DJ Cipher portrait",
              socialLinks: [
                { icon: Music, url: "#" },
                { icon: Instagram, url: "#" }
              ]
            },
            {
              id: "2",
              name: "Trap Kid",
              role: "Trap Artist & Engineer",
              description: "Atlanta-based trap innovator. Known for hard-hitting 808s and viral bars.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949130378-t8d8dll4.jpg",
              imageAlt: "Trap Kid portrait",
              socialLinks: [
                { icon: Music, url: "#" },
                { icon: Twitter, url: "#" }
              ]
            },
            {
              id: "3",
              name: "Luna Beats",
              role: "Female Hip Hop Artist",
              description: "Breaking barriers with lyrical depth. Rising star with chart-climbing singles.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949131070-kogtkpxt.jpg",
              imageAlt: "Luna Beats portrait",
              socialLinks: [
                { icon: Music, url: "#" },
                { icon: Instagram, url: "#" }
              ]
            },
            {
              id: "4",
              name: "Beat Drop",
              role: "Trap Producer",
              description: "Creating cinematic trap soundscapes. Production credits on 50+ releases.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949129623-8zka9ozj.jpg",
              imageAlt: "Beat Drop portrait",
              socialLinks: [
                { icon: Music, url: "#" },
                { icon: Github, url: "#" }
              ]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="music" data-section="music">
        <ProductCardFive
          title="Latest Releases"
          description="Check out our hottest tracks and fresh beats. Stream now on all platforms."
          tag="New Drops"
          tagIcon={Zap}
          buttons={[
            { text: "View All Music", href: "#" }
          ]}
          products={[
            {
              id: "track-1",
              button: { text: "Stream Now" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949131839-a39op6lz.jpg",
              imageAlt: "Track artwork studio",
              isFavorited: false
            },
            {
              id: "track-2",
              button: { text: "Stream Now" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949133353-3yb4mx4i.jpg",
              imageAlt: "Track artwork recording",
              isFavorited: false
            },
            {
              id: "track-3",
              button: { text: "Stream Now" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949134139-jznlaewf.jpg",
              imageAlt: "Track artwork mixer",
              isFavorited: false
            },
            {
              id: "track-4",
              button: { text: "Stream Now" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949131839-a39op6lz.jpg",
              imageAlt: "Track artwork production",
              isFavorited: false
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="What is 1USE?"
          description="A collective of passionate hip hop and trap artists united by creativity and authenticity."
          tabs={[
            {
              id: "mission",
              label: "Our Mission",
              description: "We're here to showcase raw talent, authentic stories, and innovative sounds. 1USE is a platform where emerging artists can connect with fans who appreciate real hip hop and trap culture."
            },
            {
              id: "community",
              label: "The Community",
              description: "Join thousands of hip hop heads who follow our artists. Engage with exclusive content, behind-the-scenes studio sessions, and early access to new releases from the 1USE family."
            },
            {
              id: "vision",
              label: "Vision",
              description: "We envision a future where independent artists can thrive. 1USE is breaking barriers in the music industry by giving creatives a direct path to their audience."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949130378-t8d8dll4.jpg"
          imageAlt="1USE collective studio"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Fans Are Saying"
          description="Hear from hip hop enthusiasts who are vibing with 1USE artists."
          tag="Love"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Marcus",
              handle: "@hiphophead_",
              testimonial: "Finally found artists who keep it real. 1USE is bringing the authentic hip hop energy back. Been following since day one!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949134688-26bq1vux.jpg",
              imageAlt: "Marcus profile"
            },
            {
              id: "2",
              name: "Jayden",
              handle: "@trapbeat_lover",
              testimonial: "The production quality on these trap tracks is insane. 1USE collective is next level. My go-to for new music.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949135339-1y5jltzx.jpg",
              imageAlt: "Jayden profile"
            },
            {
              id: "3",
              name: "Tasha",
              handle: "@musiccritique",
              testimonial: "Supporting independent artists who care about their craft. Luna Beats especially brings fresh perspective to hip hop. Impressed!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949136235-1tsv3ak0.jpg",
              imageAlt: "Tasha profile"
            },
            {
              id: "4",
              name: "Derek",
              handle: "@beats_detective",
              testimonial: "The bars are fire, the beats are tight, the energy is unmatched. 1USE is what hip hop needs right now.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949136758-4pwopvn8.jpg",
              imageAlt: "Derek profile"
            },
            {
              id: "5",
              name: "Sophia",
              handle: "@trap_aesthetic",
              testimonial: "Every release hits different. 1USE artists understand the culture and deliver authenticity every single time.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949137523-lxaomrkp.jpg",
              imageAlt: "Sophia profile"
            },
            {
              id: "6",
              name: "Alex",
              handle: "@streetmusic_vibes",
              testimonial: "Found my new favorite artists through 1USE. The community is supportive, the music is real, and the vibe is perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764949138318-pswn32e2.jpg",
              imageAlt: "Alex profile"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Stay in the Loop"
          animationType="reveal-blur"
          inputPlaceholder="Enter your email"
          buttonText="Join Now"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="1USE"
          title="Authentic Hip Hop and Trap Music for the Culture"
          columns={[
            {
              title: "Music",
              items: [
                { label: "New Releases", href: "#" },
                { label: "Artists", href: "#artists" },
                { label: "Playlists", href: "#" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Join 1USE", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Mail, text: "contact@1use.com" },
            { icon: MapPin, text: "Urban Music Hub, Street City" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}