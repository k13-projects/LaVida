import { Link } from "react-router-dom";

const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-white/80 transition-colors mb-4"
            aria-label="Go back to home page"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/80 mt-2">Last updated {LAST_UPDATED}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <section aria-labelledby="intro">
            <h2 id="intro" className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-foreground/80 mb-6">
              This Privacy Policy explains how La Vida San Diego (&ldquo;La Vida,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information in connection with our website at{" "}
              <a href="https://www.lavida.fit" className="text-primary hover:underline">www.lavida.fit</a>.
              We have intentionally built this site to collect as little personal information as possible.
              We do not run analytics, we do not set tracking or advertising cookies, and we do not store
              customer data on our own servers.
            </p>
          </section>

          <section aria-labelledby="info-we-collect" className="mt-8">
            <h2 id="info-we-collect" className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p className="text-foreground/80 mb-4">
              The only place this website collects personal information is the <strong>catering enquiry form</strong>.
              When you choose to send a catering enquiry, the form gathers the details you enter, which may include:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-4">
              <li>Your name</li>
              <li>Your phone number</li>
              <li>Your email address</li>
              <li>Any message or event details you choose to include</li>
            </ul>
            <p className="text-foreground/80 mb-6">
              We do not require you to create an account, and we do not knowingly collect information from
              children. Apart from the catering form, browsing this website does not require you to provide
              any personal information.
            </p>
          </section>

          <section aria-labelledby="how-we-use" className="mt-8">
            <h2 id="how-we-use" className="text-2xl font-bold text-foreground mb-4">How the Catering Form Works</h2>
            <p className="text-foreground/80 mb-6">
              The catering form does not submit your information to a server we control. Instead, it opens a
              pre-filled message in your own email application addressed to{" "}
              <a href="mailto:sd.lavidafit@gmail.com" className="text-primary hover:underline">sd.lavidafit@gmail.com</a>.
              Your information is only sent if you send that email yourself. We use the details you provide solely
              to respond to your catering enquiry. Because the message is delivered through email, it is also
              subject to the privacy practices of your email provider and of Google (Gmail), which hosts our inbox.
            </p>
          </section>

          <section aria-labelledby="cookies" className="mt-8">
            <h2 id="cookies" className="text-2xl font-bold text-foreground mb-4">Cookies &amp; Tracking</h2>
            <p className="text-foreground/80 mb-6">
              We do not use Google Analytics, advertising pixels, or tracking cookies on this website. We do not
              build profiles of visitors or sell any personal information.
            </p>
          </section>

          <section aria-labelledby="third-parties" className="mt-8">
            <h2 id="third-parties" className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-foreground/80 mb-4">
              Our website links to or embeds a small number of third-party services. When you use these, your
              information is handled under that provider&rsquo;s own privacy policy:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-6">
              <li><strong>Toast</strong> &mdash; online ordering and pickup. Orders and any payment are processed entirely by Toast; this website never handles payment details.</li>
              <li><strong>Grubhub</strong> and <strong>DoorDash</strong> &mdash; delivery ordering, handled on their platforms.</li>
              <li><strong>Behold</strong> &mdash; powers the embedded Instagram feed that displays our public posts.</li>
              <li><strong>Google Fonts</strong> &mdash; serves the typefaces used on the site.</li>
              <li><strong>Google Maps</strong> &mdash; we link out to Google Maps for directions to our location.</li>
              <li><strong>Instagram</strong> &mdash; we link out to our public Instagram profile.</li>
            </ul>
          </section>

          <section aria-labelledby="ca-rights" className="mt-8">
            <h2 id="ca-rights" className="text-2xl font-bold text-foreground mb-4">Your California Privacy Rights</h2>
            <p className="text-foreground/80 mb-6">
              California residents may have the right to request access to, correction of, or deletion of the
              personal information we hold about them. Because we do not store catering enquiries on our own
              servers &mdash; they exist only in the email you send and in our email inbox &mdash; the personal
              information we retain is limited to those email messages. To make a request, or to ask us to delete
              an enquiry you previously sent, contact us using the details below and we will respond consistent
              with applicable California law. We do not sell or share personal information for cross-context
              behavioral advertising.
            </p>
          </section>

          <section aria-labelledby="retention" className="mt-8">
            <h2 id="retention" className="text-2xl font-bold text-foreground mb-4">Data Retention &amp; Security</h2>
            <p className="text-foreground/80 mb-6">
              Catering enquiries are retained in our email inbox for as long as needed to respond to and follow up
              on your request, and are then deleted in the ordinary course. Because the site stores no customer
              data in a database of its own, there is no on-site database to be breached. The website is served
              over HTTPS.
            </p>
          </section>

          <section aria-labelledby="changes" className="mt-8">
            <h2 id="changes" className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-foreground/80 mb-6">
              We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last
              updated&rdquo; date at the top of this page.
            </p>
          </section>

          <section aria-labelledby="contact" className="mt-8">
            <h2 id="contact" className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-foreground/80 mb-4">
              If you have questions about this Privacy Policy or about the information we hold, please contact us:
            </p>
            <div className="bg-secondary/50 rounded-lg p-6 mb-6">
              <p className="text-foreground mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:sd.lavidafit@gmail.com?subject=Privacy%20Request"
                  className="text-primary hover:underline"
                >
                  sd.lavidafit@gmail.com
                </a>
              </p>
              <p className="text-foreground mb-0">
                <strong>Address:</strong> 890 Palomar Airport Rd, Carlsbad, CA 92011
              </p>
            </div>
          </section>
        </article>

        {/* Back to Home Link */}
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full font-semibold transition-all hover:brightness-110 hover:shadow-lg hover:scale-[1.03]"
          >
            Return to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} La Vida San Diego. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
