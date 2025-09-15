"use client";

import { Suspense } from "react";
import Contact from "./Contact";

const ContactFallback = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-32 mb-4"></div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-32 bg-gray-200 rounded w-full"></div>
    </div>
  </div>
);

const ContactWithSuspense = ({ standalone }: { standalone?: boolean }) => {
  return (
    <Suspense fallback={<ContactFallback />}>
      <Contact standalone={standalone} />
    </Suspense>
  );
};

export default ContactWithSuspense;
