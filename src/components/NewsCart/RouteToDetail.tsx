"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RouteToDetail = ({ id, children }) => {
  const router = useRouter();
  return (
    <div className="py-3" onClick={() => router.push(`/detail/${id}`)}>
      {children}
    </div>
  );
};

export default RouteToDetail;
