"use client";
import dynamic from "next/dynamic";

const DynamicGraph = dynamic(() => import("@/components/Graph"), {
  ssr: false,
});

export default function DeepPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-[family-name:var(--font-geist-sans)]">
      <div className="container">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold mb-4">Deep Dive</h1>
          <p className="text-lg mb-8">
            On the deep dive page, we explore Guild concepts and components in
            greater detail.
          </p>
          <div className="hero">
            <DynamicGraph />
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col py-20">
          <h2 className="">The Machine</h2>
        </div>
        <div className="flex gap-4 items-start flex-col py-20">
          <h2 className="">The Benefits</h2>
          <p className="term">
            <strong>term</strong>
          </p>
          <p className="desc">definition</p>
        </div>
        <div className="flex gap-4 items-start flex-col py-20">
          <h2 className="">Glossary</h2>
          <p className="term">
            <strong>term</strong>
          </p>
          <p className="desc">definition</p>
        </div>
      </div>
    </main>
  );
}
