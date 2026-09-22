import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function PerformanceMarketingPage() {
  const data = serviceDataMap["digital-marketing-growth"];
  return <ServicePageTemplate data={data} />;
}
