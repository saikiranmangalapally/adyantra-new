import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function DigitalMarketingGrowthPage() {
  const data = serviceDataMap["digital-marketing-growth"];
  return <ServicePageTemplate pageTitle="Digital Marketing & Growth" data={data} />;
}
