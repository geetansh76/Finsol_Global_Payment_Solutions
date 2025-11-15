// app/home-client.js
"use client";

import Image from "next/image";
import Header from '@/components/Home/Header/Header';
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import StatsSection from "@/components/Home/stats-section/StatsSection";
import OpenServices from "@/components/Home/open-services/OpenServices";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import Coverage from "@/components/Home/coverage/Coverage";
import IndustriesSection from "@/components/Home/Industries/IndustriesSection";
import FAQSection from "@/components/Home/FAQ/FAQSection";
import BlogHome from "@/components/Home/bloghome/BlogHome";
import PaymentMethodSection from "@/components/Home/payment-method/PaymentMethodSection";
 import Footer from "@/components/Home/footer/Footer";

export default function HomeClient() {
  return (
    <>
      {/* ================= PAGE CONTENT ================= */}
      <Header videoSrc="/video/home/finsol-banner.mp4" />
      <StatsSection />
      <OpenServices />
      <SubscribeSection />
      <Coverage />
      <IndustriesSection />
      <FAQSection />
      <BlogHome />
      <PaymentMethodSection />
      <Footer />
      <ChatAssistant />
    </>
  );
}
