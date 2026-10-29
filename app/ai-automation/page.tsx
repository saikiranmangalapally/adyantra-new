import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function AIAutomationPage() {
  const data = serviceDataMap["ai-automation"];
  return <ServicePageTemplate pageTitle="Autonomous AI & CRM Systems" data={data} />;
}
