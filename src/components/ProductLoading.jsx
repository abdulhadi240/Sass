"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Analyzing Your Profile",
  },
  {
    text: "Extracting Data",
  },
  {
    text: "Data Extraction Sucessfull",
  },
  {
    text: "Compling Your Data",
  },
  {
    text: "Data displaying",
  },
 
];

export function ProductLoading({setLoading,loading}) {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} setLoading={setLoading} duration={2000} />
    </div>
  );
}
