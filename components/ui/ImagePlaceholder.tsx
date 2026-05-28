import { CameraIcon } from "@heroicons/react/24/outline";

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label = "Photo Coming Soon",
  aspectRatio = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} bg-primary-light border-2 border-dashed border-accent/30 rounded-lg flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <CameraIcon className="w-10 h-10 text-accent/50" />
      <span className="text-text-muted text-sm font-montserrat">{label}</span>
    </div>
  );
}
