import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Advanced Image Converter",
  description: "Our privacy policy explains how we handle your data and protect your privacy.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: May 7, 2023</p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <p>
            At Advanced Image Converter, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website and use our image conversion
            service.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please
            do not access the site.
          </p>
        </section>

        {/* Collection of Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Collection of Your Information</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the Website
            includes:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Personal Data</h3>
              <p>
                When you create an account, we collect your name and email address. This information is used to identify
                you and communicate with you about your account and our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Image Data</h3>
              <p>
                <strong>Important:</strong> Our service processes images directly in your browser. Your images are never
                uploaded to our servers and remain on your device at all times. We do not have access to the content of
                your images.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Usage Data</h3>
              <p>
                We may collect information about how you use our website, including which features you use, how often
                you use them, and other diagnostic data. This helps us improve our service and user experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Cookies and Web Beacons</h3>
              <p>
                We may use cookies and similar tracking technologies to track activity on our Website and hold certain
                information. Cookies are files with small amounts of data which may include an anonymous unique
                identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </div>
          </div>
        </section>

        {/* Use of Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized
            experience. Specifically, we may use information collected about you via the Website to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account.</li>
            <li>Increase the efficiency and operation of the Website.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
            <li>Notify you of updates to the Website.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Request feedback and contact you about your use of the Website.</li>
          </ul>
        </section>

        {/* Disclosure of Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services, customer service, and
                marketing assistance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information
                with third parties for marketing purposes, as permitted by law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Business Transfers</h3>
              <p>
                If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your information may be
                transferred.
              </p>
            </div>
          </div>
        </section>

        {/* Security of Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>
          <p>
            Any information disclosed online is vulnerable to interception and misuse by unauthorized parties.
            Therefore, we cannot guarantee complete security if you provide personal information.
          </p>
        </section>

        {/* Children's Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Children's Information</h2>
          <p>
            The Website is not directed to children under the age of 13, and we do not knowingly collect personal
            information from children under 13. If we learn we have collected or received personal information from a
            child under 13 without verification of parental consent, we will delete that information.
          </p>
        </section>

        {/* Your Rights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Your Rights Regarding Your Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Account Information</h3>
              <p>You may at any time review or change the information in your account or terminate your account by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Logging into your account settings and updating your account</li>
                <li>Contacting us using the contact information provided below</li>
              </ul>
              <p>
                Upon your request to terminate your account, we will deactivate or delete your account and information
                from our active databases. However, some information may be retained in our files to prevent fraud,
                troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal
                requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Emails and Communications</h3>
              <p>
                If you no longer wish to receive correspondence, emails, or other communications from us, you may
                opt-out by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Noting your preferences at the time you register your account with the Website</li>
                <li>Logging into your account settings and updating your preferences</li>
                <li>Contacting us using the contact information provided below</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <div className="not-prose">
            <address className="not-italic">
              Advanced Image Converter
              <br />
              123 Tech Lane, Suite 456
              <br />
              San Francisco, CA 94107
              <br />
              Email: privacy@imageconverter.com
              <br />
              Phone: +1 (555) 123-4567
            </address>
          </div>
        </section>
      </div>
    </div>
  )
}
