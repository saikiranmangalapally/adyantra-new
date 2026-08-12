import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function Page() {
  const data = serviceDataMap["appointment-booking"];
  return <ServicePageTemplate data={data} />;
}
