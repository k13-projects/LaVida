import { Link } from "react-router-dom";

const Accessibility = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white">Accessibility Statement</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <section aria-labelledby="commitment">
            <h2 id="commitment" className="text-2xl font-bold text-foreground mb-4">Our Commitment to Accessibility</h2>
            <p className="text-foreground/80 mb-6">
              La Vida San Diego is committed to ensuring digital accessibility for people with disabilities.
              We are continually improving the user experience for everyone and applying the relevant
              accessibility standards to ensure we provide equal access to all users.
            </p>
          </section>

          <section aria-labelledby="standards" className="mt-8">
            <h2 id="standards" className="text-2xl font-bold text-foreground mb-4">Conformance Status</h2>
            <p className="text-foreground/80 mb-4">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              These guidelines explain how to make web content more accessible for people with disabilities
              and more user-friendly for everyone.
            </p>
            <p className="text-foreground/80 mb-6">
              The guidelines have three levels of accessibility (A, AA, and AAA). We have chosen Level AA
              as our target for this website.
            </p>
          </section>

          <section aria-labelledby="measures" className="mt-8">
            <h2 id="measures" className="text-2xl font-bold text-foreground mb-4">Accessibility Measures</h2>
            <p className="text-foreground/80 mb-4">
              La Vida San Diego takes the following measures to ensure accessibility:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-6">
              <li>Include accessibility as part of our mission statement</li>
              <li>Integrate accessibility into our development practices</li>
              <li>Provide continual accessibility training for our staff</li>
              <li>Assign clear accessibility goals and responsibilities</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>
          </section>

          <section aria-labelledby="features" className="mt-8">
            <h2 id="features" className="text-2xl font-bold text-foreground mb-4">Accessibility Features</h2>
            <p className="text-foreground/80 mb-4">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-6">
              <li><strong>Keyboard Navigation:</strong> All functionality is available using a keyboard</li>
              <li><strong>Skip Links:</strong> Skip to main content links for keyboard users</li>
              <li><strong>Alt Text:</strong> Meaningful alternative text for images</li>
              <li><strong>Headings:</strong> Proper heading structure for easy navigation</li>
              <li><strong>Color Contrast:</strong> Sufficient color contrast ratios for readability</li>
              <li><strong>Focus Indicators:</strong> Visible focus states for interactive elements</li>
              <li><strong>Form Labels:</strong> All form inputs have associated labels</li>
              <li><strong>ARIA Labels:</strong> Appropriate ARIA attributes for assistive technologies</li>
              <li><strong>Responsive Design:</strong> Content adapts to different screen sizes and zoom levels</li>
              <li><strong>Reduced Motion:</strong> Respects user preferences for reduced motion</li>
            </ul>
          </section>

          <section aria-labelledby="compatibility" className="mt-8">
            <h2 id="compatibility" className="text-2xl font-bold text-foreground mb-4">Compatibility</h2>
            <p className="text-foreground/80 mb-6">
              This website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-6">
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
          </section>

          <section aria-labelledby="limitations" className="mt-8">
            <h2 id="limitations" className="text-2xl font-bold text-foreground mb-4">Known Limitations</h2>
            <p className="text-foreground/80 mb-4">
              Despite our best efforts to ensure accessibility, there may be some limitations:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-6">
              <li><strong>PDF Documents:</strong> Some PDF files may not be fully accessible.
                Please contact us if you need assistance accessing any PDF content.</li>
              <li><strong>Third-party Content:</strong> Some third-party integrations may have
                accessibility limitations beyond our control.</li>
            </ul>
          </section>

          <section aria-labelledby="feedback" className="mt-8">
            <h2 id="feedback" className="text-2xl font-bold text-foreground mb-4">Feedback</h2>
            <p className="text-foreground/80 mb-4">
              We welcome your feedback on the accessibility of the La Vida San Diego website.
              Please let us know if you encounter accessibility barriers:
            </p>
            <div className="bg-secondary/50 rounded-lg p-6 mb-6">
              <p className="text-foreground mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:hello@lavidasandiego.com?subject=Accessibility%20Feedback"
                  className="text-primary hover:underline"
                >
                  hello@lavidasandiego.com
                </a>
              </p>
              <p className="text-foreground mb-2">
                <strong>Address:</strong> 890 Palomar Airport Rd, Carlsbad, CA 92011
              </p>
            </div>
            <p className="text-foreground/80 mb-6">
              We try to respond to accessibility feedback within 5 business days.
            </p>
          </section>

          <section aria-labelledby="date" className="mt-8">
            <h2 id="date" className="text-2xl font-bold text-foreground mb-4">Date</h2>
            <p className="text-foreground/80">
              This statement was last updated on {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}.
            </p>
          </section>
        </article>

        {/* Back to Home Link */}
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary hover:bg-olive-dark text-white px-8 py-3 rounded-full font-semibold transition-all"
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

export default Accessibility;
