import { Locations } from "./location/AccountPageLocation";

export default function AccountPageContent({ location }: { location: string }) {
  const Content = Locations.find((l) => l.location === location)?.element;
  return Content;
}
