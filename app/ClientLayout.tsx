"use client"

import BottomAppBar from "@/components/BottomAppBar/BottomAppBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { useEffect, useRef, useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (headerRef.current)
      setHeaderHeight(headerRef.current.clientHeight);
  }, [headerRef]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <header
        ref={headerRef}
        style={{
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <Header />
      </header >
      
      <main
        style={{
          marginTop: headerHeight,
          width: "100%",
          position: "relative",
          zIndex: 1,
          flex: "1 0 auto",
        }}
      >
        {children}
      </main>

      <Footer />

      <BottomAppBar />
    </div>
  )
}
