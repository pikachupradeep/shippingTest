import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
        <AccordionItem value="item-1">
  <AccordionTrigger>
    <h6>1. What services does your sea shipping company offer?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      We provide international container shipping, bulk cargo transport, freight forwarding, and logistics solutions for a wide range of goods.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-2">
  <AccordionTrigger>
    <h6>2. Which destinations do you ship to?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      Our sea freight services cover all major global ports across Asia, Europe, North America, South America, Africa, and Oceania.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-3">
  <AccordionTrigger>
    <h6>3. How long does sea shipping typically take?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      Transit time depends on the route and service level. For example, shipments from Asia to Europe typically take 25–35 days.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-4">
  <AccordionTrigger>
    <h6>4. Can I track my sea freight shipment?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      Yes, all shipments come with a tracking number. You can track your cargo in real time through our online tracking portal.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-5">
  <AccordionTrigger>
    <h6>5. Do you handle customs clearance?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      Absolutely. We offer full customs brokerage services to ensure smooth clearance at both origin and destination ports.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-6">
  <AccordionTrigger>
    <h6>6. What documents are required for sea shipping?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      Common documents include the Bill of Lading, Commercial Invoice, Packing List, and Certificate of Origin. We assist with all documentation.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-7">
  <AccordionTrigger>
    <h6>7. What types of cargo do you ship?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      We handle FCL (Full Container Load), LCL (Less than Container Load), bulk cargo, and special cargo such as hazardous materials or refrigerated goods.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-8">
  <AccordionTrigger>
    <h6>8. Is my cargo insured during transport?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      Yes, we offer optional marine cargo insurance to protect your goods against loss or damage during transit.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-9">
  <AccordionTrigger>
    <h6>9. How are shipping rates calculated?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      Rates are based on cargo volume or weight, route, container type, and additional services like customs or warehousing.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-10">
  <AccordionTrigger>
    <h6>10. How do I get a shipping quote?</h6>
  </AccordionTrigger>
  <AccordionContent>
    <p>
      You can request a quote through our website by providing cargo details, pickup and delivery locations, and preferred dates.
    </p>
  </AccordionContent>
</AccordionItem>

    </Accordion>
  )
}
