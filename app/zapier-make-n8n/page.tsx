import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function Page() {
  const data = serviceDataMap["zapier-make-n8n"];
  return <ServicePageTemplate data={data} />;
}
