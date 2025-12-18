// Package imports
import { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";

export const metadata: Metadata = {
  title: "Privacy Policy | Sites by Velzy",
  description:
    "Privacy Policy for Sites by Velzy. Learn how we collect, use, and protect your personal information when you use our services.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://sitesbyvelzy.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <Page>
      <div className="mt-[8rem] flex flex-col gap-4">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated:</strong> December 17, 2025
        </p>

        <p>
          Sites By Velzy (“we,” “us,” or “our”) operates lead generation
          services that connect individuals with local service professionals.
          This Privacy Policy explains how we collect, use, and share personal
          information when you submit a request through our website or
          advertising forms.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you submit a service request, we may collect the following
          information:
        </p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>ZIP code</li>
          <li>Details about your service request</li>
        </ul>
        <p>We only collect information that you voluntarily provide.</p>

        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Respond to your service request</li>
          <li>
            Share your request with a local service professional who can assist
            you
          </li>
          <li>Contact you regarding your request</li>
        </ul>
        <p>
          We do not sell personal information for unrelated marketing purposes.
        </p>

        <h2>How We Share Your Information</h2>
        <p>
          Your information may be shared with one or more local service
          providers for the sole purpose of responding to your request.
        </p>
        <p>
          We do not share your information with third parties for their own
          marketing purposes.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain personal information only as long as necessary to fulfill
          the purposes described in this policy or as required by law.
        </p>

        <h2>Your Choices</h2>
        <p>You may request that we:</p>
        <ul>
          <li>Stop contacting you</li>
          <li>Delete your personal information</li>
        </ul>
        <p>To make a request, contact us using the information below.</p>

        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, or misuse.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party tools and platforms (such as advertising or
          automation services) to collect and process information. These
          services are used only to support the operation of our lead generation
          services.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, you may contact us at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:derek@sitesbyvelzy.com">derek@sitesbyvelzy.com</a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href="https://sitesbyvelzy.com">https://sitesbyvelzy.com</a>
          </li>
        </ul>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page.
        </p>
      </div>
    </Page>
  );
}
