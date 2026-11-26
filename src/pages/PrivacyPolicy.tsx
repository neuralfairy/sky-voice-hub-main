import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="space-y-8">
          <header className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Anti-Spam Policy – Zero Tolerance
            </h1>
            <p className="text-muted-foreground">
              Website:{" "}
              <a
                href="https://projectconsultantsusa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                ProjectConsultantsUSA - Expert CRM Implementation
              </a>
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">1. Zero-Tolerance Policy</h2>
            <p className="text-muted-foreground">
              Project Consultants USA maintains a strict zero-tolerance policy
              against spam and unsolicited communications. Under no circumstances
              shall any individual, organization, affiliate, marketing agency,
              third-party service provider, or other entity advertise, promote, or
              distribute information about this website through unsolicited
              messages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">2. Strictly Prohibited Activities</h2>
            <p className="text-muted-foreground">
              The following activities are strictly prohibited:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Sending unsolicited commercial emails containing links to or
                references to projectconsultantsusa.com.
              </li>
              <li>
                Promoting this website through unsolicited SMS, WhatsApp messages,
                social media messages, or other electronic communications.
              </li>
              <li>
                Using purchased, harvested, scraped, or unauthorized email lists
                to advertise this website.
              </li>
              <li>
                Using automated systems to distribute unsolicited promotional
                messages.
              </li>
              <li>
                Forging email headers, impersonating Project Consultants USA, or
                misrepresenting any association with this website.
              </li>
              <li>
                Directly or indirectly engaging third parties to conduct
                unsolicited advertising campaigns on behalf of this website.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">3. Unauthorized Advertising</h2>
            <p className="text-muted-foreground">
              Project Consultants USA does not authorize any individual or
              organization to promote its website through unsolicited
              communications. Any person engaging in such activities without
              authorization shall be solely responsible for their actions and the
              resulting legal consequences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">
              4. Severe Penalties and Legal Action
            </h2>
            <p className="text-muted-foreground">
              Any individual or organization found responsible for violating this
              policy may face the strictest possible legal action and maximum
              penalties permitted under applicable law.
            </p>
            <p className="text-muted-foreground">
              Project Consultants USA reserves the right to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Initiate civil and criminal proceedings where legally applicable.</li>
              <li>
                Report offenders to law enforcement and relevant regulatory
                authorities.
              </li>
              <li>
                Seek financial compensation for reputational damage, business
                losses, and other damages.
              </li>
              <li>
                Permanently terminate any business, contractual, or affiliate
                relationship with the offender.
              </li>
              <li>
                Report abusive activities to internet service providers, hosting
                providers, domain registrars, and email service providers.
              </li>
            </ul>
            <p className="text-muted-foreground">
              No violation of this policy shall be knowingly tolerated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">5. Reporting Spam</h2>
            <p className="text-muted-foreground">
              If you receive any unsolicited communication advertising or
              referencing projectconsultantsusa.com, please report it through the
              official contact channels available on our website, preferably with
              the original message, complete email headers, and relevant
              supporting evidence.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">6. Final Declaration</h2>
            <p className="text-muted-foreground">
              Project Consultants USA categorically condemns all forms of spam
              and unsolicited advertising. Any person found responsible for such
              activities shall be pursued to the fullest extent permitted by
              applicable law.
            </p>
            <p className="font-bold tracking-wide">
              ZERO SPAM. ZERO TOLERANCE. NO EXCEPTIONS.
            </p>
          </section>

          <footer className="space-y-2 border-t pt-6 text-sm text-muted-foreground">
            <p>ProjectConsultantsUSA - Expert CRM Implementation</p>
            <p>
              Professional CRM implementation and sales process optimization
              services in Phoenix, Arizona.
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
