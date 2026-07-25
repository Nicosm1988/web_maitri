import { jsonLdScript, localBusinessJsonLd } from "@/lib/seo";

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLdScript(localBusinessJsonLd())}
    />
  );
}
