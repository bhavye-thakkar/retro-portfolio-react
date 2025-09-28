"use client";

import dynamic from "next/dynamic";

const ErrorReporter = dynamic(
  () => import("@/components/ErrorReporter"),
  { ssr: false }
);

export default function DevInjections() {
  return (
    <>
      <ErrorReporter />
    </>
  );
}


