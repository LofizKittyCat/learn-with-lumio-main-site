import { get } from "@vercel/edge-config";

export const maintenanceMode = await get<boolean>("maintenanceMode");
