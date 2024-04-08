'use client'
import React, { useState } from "react";
import SkillsSection from "@/components/SkillsSection";
import Info from "@/components/Info";
import About from "@/components/About";
import Banner from "@/components/Banner";
import { ProductLoading } from "@/components/ProductLoading";

const page = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      {loading ? (
        <ProductLoading setLoading={setLoading} loading={loading} />
      ) : (
        <div className="mx-3">
          <Banner />
          <Info />
          <About />
          <SkillsSection />
        </div>
      )}
    </div>
  );
};

export default page;
