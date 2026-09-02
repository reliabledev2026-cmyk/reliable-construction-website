type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Safely serializes Schema.org data without turning it into executable code. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
