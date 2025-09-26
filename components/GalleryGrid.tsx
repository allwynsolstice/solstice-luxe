
import Image from "next/image";

export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {images.slice(0, 20).map((img,i)=>(
        <div key={i} className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden border border-white/10">
          <Image src={`/assets/${img}`} alt={`gallery-${i}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
