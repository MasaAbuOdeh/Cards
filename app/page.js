"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import RecommendationCard from "@/components/recomendationCard";
import MonitoringCard from "@/components/monitoringCard";
import { Star } from "lucide-react";
import BestClientCard from "@/components/bestCustomerCard";
import ExpectationRecommendCard from "@/components/expectationRecomCard";
import { BarChart3Icon } from "lucide-react";
import ReportsCard from "@/components/reportsCard";
import BookingsCard from "@/components/bookingsCard";
export default function HomePage() {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-start justify-start p-10 gap-5">
        <RecommendationCard
          title="Smart expansion scheduling"
          description="Schedule maintenance during times of low usage"
          icon={<Star />}
          highlightText="Save 25% of costs"
          borderVariant="grey"
        />
        <MonitoringCard
          deviceName="Riyadh main charger"
          status="connected"
          infoItems={[
            {
              key: "voltage",
              label: "voltage",
              value: "220V",
            },
            {
              key: "temp",
              label: "Temperature",
              value: "35°C",
            },
            {
              key: "load",
              label: "Load",
              value: "70%",
            },
          ]}
        />
        <BestClientCard
          clientname="Ahmad Mohammad Alahmad"
          numberofsession="128"
          amount={1247}
          currency="dolar"
          rating={4.9}
        />
        <ExpectationRecommendCard
          title="Jeddah Central Charger"
          subtitle="Software update required"
          suggestion="Replace connector"
          infoItems={[
            {
              key: "duration",
              label: "duration",
              value: "5-7",
            },
            {
              key: "efficiency",
              label: "efficiency",
              value: "95%",
            },
            {
              key: "cost",
              label: "cost",
              value: "0",
            },
            {
              key: "lastUpdate",
              label: "lastUpdate",
              value: "2024-01-20",
            },
          ]}
        />
        <ReportsCard
          icon={BarChart3Icon}
          subtitle="Average response time"
          title="Goal > 20"
          value={12}
        />
        <BookingsCard
        title="Total Bookings"
        value={741}/>
      </div>
    </>
  );
}
