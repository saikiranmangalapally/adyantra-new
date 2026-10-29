import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function UiUxProductDesignPage() {
  const data = serviceDataMap["ui-ux-product-design"];
  return <ServicePageTemplate pageTitle="UI/UX & Product Design Systems" data={data} />;
}
