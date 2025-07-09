import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'

interface LocationsSectionProps {
    locations: string;
    relocation?: string[];
    relocation_bool: boolean;
    business_trips: boolean;
}

export default function LocationsSection({locations, relocation, relocation_bool, business_trips}: LocationsSectionProps) {
  if (relocation_bool && business_trips) {
    return (
      <div>
        <p>{locations}, готов(а) к переезду ({relocation?.join(", ")}), готов(а) к командировкам</p>
      </div>
    );
  } else if (relocation_bool) {
    return (
      <div>
        <p>{locations}, готов(а) к переезду ({relocation?.join(", ")}), не готов(а) к командировкам</p>
      </div>
    );
  } else if (business_trips) {
    return (
      <div>
        <p>{locations}, не готов(а) к переезду, готов(а) к командировкам</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{locations}, не готов(а) к переезду, не готов(а) к командировкам</p>
      </div>
    );
  }
}