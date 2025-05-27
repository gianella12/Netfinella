import { Laptop, Monitor, Smartphone, Tablet } from "lucide-react";

export function IconosDispositivos() {
  return (
    <div className="flex justify-center items-center gap-6 text-red-600 mt-6">
      <Laptop size={48} />
      <Monitor size={48} />
      <Tablet size={48} />
      <Smartphone size={48} />
    </div>
  );
};