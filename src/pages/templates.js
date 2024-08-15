import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import TemplateHeader from "../containers/TemplateHeader";
import Card_1 from "../components/Cards/Card_1";

function ExternalPage() {
  return (
    <div>
      <TemplateHeader />
      <div className="mt-20">
        <p className="text-center text-2xl">
          Let's create your first signature! Choose design that you like
        </p>
        <div className="mt-12 px-24 flex gap-8">
          <div className="flex-1">
            <Card_1 />
          </div>
          <div className="flex-1">
            <Card_1 />
          </div>
          <div className="flex-1">
            <Card_1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExternalPage;
