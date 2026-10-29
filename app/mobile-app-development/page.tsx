import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function MobileAppDevelopmentPage() {
  const data = serviceDataMap["mobile-app-development"];
  return <ServicePageTemplate pageTitle="Mobile Application Development" data={data} />;
}
