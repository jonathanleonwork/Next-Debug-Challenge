"use client"
import { useState, useEffect } from "react";

export default function Text() {
  const [success, setSuccess] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const buttonText = isClient ? "Click here" : "Click me";

  return (
    <button
      className={`rounded  px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20 mt-10 ${
        success ? "bg-green-500/90" : "bg-red-500/90"
      }`}
      onClick={() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ping`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "ping" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data && data.status === "success") {
              setSuccess(true);
              alert("Success");
            } else {
              setSuccess(false);
              alert("Error");
            }
          });
      }}>
      {buttonText}
    </button>
  );
}
