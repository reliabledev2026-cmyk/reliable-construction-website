"use client";

import { ArrowUpRight, Check } from "lucide-react";
import * as React from "react";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icons";
import { facebookPageUrl } from "@/data/company";

const VISIBLE_FEED_HEIGHT = 680;
// Hide Facebook's page chrome while retaining a small safety margin so the
// opening pixels of the first post are never clipped.
const FACEBOOK_HEADER_CROP = 88;
const MAX_EMBED_WIDTH = 500;
const MIN_EMBED_WIDTH = 180;

function getEmbedUrl(width: number, height: number) {
  const params = new URLSearchParams({
    href: facebookPageUrl,
    tabs: "timeline",
    width: String(width),
    height: String(height),
    small_header: "true",
    adapt_container_width: "true",
    hide_cover: "true",
    show_facepile: "false",
  });

  return `https://www.facebook.com/plugins/page.php?${params.toString()}`;
}

/**
 * Facebook's official scrolling Page timeline. No third-party feed service,
 * API credentials or application backend is required.
 */
export function FacebookNotices() {
  const leftColumnRef = React.useRef<HTMLDivElement>(null);
  const embedContainerRef = React.useRef<HTMLDivElement>(null);
  const [embedWidth, setEmbedWidth] = React.useState(MAX_EMBED_WIDTH);
  const [visibleFeedHeight, setVisibleFeedHeight] =
    React.useState(VISIBLE_FEED_HEIGHT);

  React.useEffect(() => {
    const container = embedContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const measuredWidth = Math.floor(entry.contentRect.width);
      const nextWidth = Math.min(
        MAX_EMBED_WIDTH,
        Math.max(MIN_EMBED_WIDTH, measuredWidth),
      );

      setEmbedWidth((currentWidth) =>
        currentWidth === nextWidth ? currentWidth : nextWidth,
      );
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  React.useEffect(() => {
    const leftColumn = leftColumnRef.current;
    if (!leftColumn) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const updateFeedHeight = () => {
      const nextHeight = desktopQuery.matches
        ? Math.max(360, Math.ceil(leftColumn.getBoundingClientRect().height))
        : VISIBLE_FEED_HEIGHT;

      setVisibleFeedHeight((currentHeight) =>
        currentHeight === nextHeight ? currentHeight : nextHeight,
      );
    };

    const resizeObserver = new ResizeObserver(updateFeedHeight);
    resizeObserver.observe(leftColumn);
    desktopQuery.addEventListener("change", updateFeedHeight);
    const measurementFrame = window.requestAnimationFrame(updateFeedHeight);

    return () => {
      window.cancelAnimationFrame(measurementFrame);
      resizeObserver.disconnect();
      desktopQuery.removeEventListener("change", updateFeedHeight);
    };
  }, []);

  const embedHeight = visibleFeedHeight + FACEBOOK_HEADER_CROP;
  const embedUrl = React.useMemo(
    () => getEmbedUrl(embedWidth, embedHeight),
    [embedHeight, embedWidth],
  );

  return (
    <section
      id="updates"
      className="relative scroll-mt-20 overflow-hidden bg-paper py-20 md:py-28 lg:py-36"
    >
      <div className="shell">
        <Reveal>
          <div className="label flex items-center gap-3 text-fg-subtle">
            <span className="text-accent">§ 06</span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            <span>News &amp; Notices</span>
          </div>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
            <div ref={leftColumnRef}>
              <h2 className="display-lg">
                Latest from
                <br />
                the field.
              </h2>
              <p className="lede mt-7 max-w-xl">
                Company announcements, project milestones and opportunities —
                published on Facebook and available here automatically.
              </p>

              <div className="mt-10 border-y border-line-strong">
                {[
                  "Published once on our official Facebook Page",
                  "Refreshed here automatically by Facebook",
                  "Open any post to view and respond on Facebook",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-line py-4 last:border-b-0"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center border border-line-strong bg-paper text-accent">
                      <Check className="size-3.5" strokeWidth={2} aria-hidden />
                    </span>
                    <p className="text-sm leading-relaxed text-fg-muted">
                      <span className="font-mono text-[0.625rem] tracking-[0.15em] text-fg-subtle">
                        {String(index + 1).padStart(2, "0")} /{" "}
                      </span>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-4 bg-accent px-6 py-4 text-white transition-colors duration-500 hover:bg-ink"
              >
                <SocialIcon name="facebook" className="size-4" />
                <span className="label">Visit our Facebook Page</span>
                <ArrowUpRight
                  className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="relative mx-auto max-w-[500px] lg:mx-0 lg:ml-auto">
              <div
                ref={embedContainerRef}
                className="w-full overflow-hidden bg-white shadow-[0_20px_60px_rgba(11,19,25,0.12)] ring-1 ring-ink/8"
                style={{ height: visibleFeedHeight }}
              >
                <iframe
                  src={embedUrl}
                  width={embedWidth}
                  height={embedHeight}
                  title="Latest posts from our official Facebook Page"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="block max-w-full border-0"
                  style={{ transform: `translateY(-${FACEBOOK_HEADER_CROP}px)` }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
