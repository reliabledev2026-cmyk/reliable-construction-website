import {
  Building2,
  ClipboardList,
  Compass,
  Construction,
  Droplets,
  HardHat,
  Leaf,
  Mountain,
  Route,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the `icon` string in data/services.ts to a Lucide component, so the data
 * files stay free of React imports and remain trivially serialisable from a CMS.
 * Add new entries here when you add a service with a new icon.
 */
export const ICONS: Record<string, LucideIcon> = {
  construction: Construction,
  building: Building2,
  compass: Compass,
  mountain: Mountain,
  zap: Zap,
  route: Route,
  droplets: Droplets,
  leaf: Leaf,
  clipboard: ClipboardList,
  hardhat: HardHat,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? Compass;
  return <Cmp className={className} strokeWidth={1.25} aria-hidden />;
}
