import { useState } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';
import flyEscritorioImg from '../../../imports/fly-escritorio-p2.jpg';
import flyEscolarImg from '../../../imports/fly-escolar-desk-single.jpg';
import bedrunkaImg from '../../../imports/bedrunka-oficinas.jpg';
import valuesteekImg from '../../../imports/valuesteek-classroom.jpg';
import educacaoImg from '../../../imports/image-15.png';
import gimaImg from '../../../imports/image-16.png';

interface Supplier {
  name: string;
  category: string;
  videoId?: string;
  channelUrl?: string;
  photo: string;
}

const suppliers: Supplier[] = [
  {
    name: 'Dious Furniture Group',
    category: 'Mobiliário de Escritório',
    videoId: '4iKgW-F2GVs',
    channelUrl: 'https://www.youtube.com/@diousfurniture',
    photo: flyEscritorioImg,
  },
  {
    name: 'Flyfashion Furniture',
    category: 'Mobiliário Escolar',
    photo: flyEscolarImg,
  },
  {
    name: 'Bedrunka+Hirth',
    category: 'Mobiliário Operacional',
    videoId: 'kOlSjyqISs0',
    channelUrl: 'https://www.youtube.com/@bedrunkahirth8509',
    photo: bedrunkaImg,
  },
  {
    name: 'ValueSTek',
    category: 'Quadros Interativos',
    videoId: 'Cc4cq85Z46Q',
    channelUrl: 'https://www.youtube.com/@ValueSTek-ValueSmartTechCoLTD',
    photo: valuesteekImg,
  },
  {
    name: '3B Scientific',
    category: 'Equipamentos Didáticos',
    videoId: 'pGlZDcCEVTM',
    channelUrl: 'https://www.youtube.com/@3BScientific1',
    photo: educacaoImg,
  },
  {
    name: 'GIMA',
    category: 'Equipamentos de Laboratório',
    videoId: 'pHb9TjMEsxU',
    channelUrl: 'https://www.youtube.com/@GIMAItalyOfficial',
    photo: gimaImg,
  },
];

function VideoModal({ videoId, name, onClose }: { videoId: string; name: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-sm"
        >
          <X size={20} />
          Fechar
        </button>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

function SupplierCard({ supplier, onPlay }: { supplier: Supplier; onPlay: (id: string, name: string) => void }) {
  const thumbnailUrl = supplier.videoId
    ? `https://img.youtube.com/vi/${supplier.videoId}/hqdefault.jpg`
    : null;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Image / Thumbnail area */}
      <div className="relative overflow-hidden aspect-video bg-gray-100">
        {thumbnailUrl ? (
          <>
            <img
              src={thumbnailUrl}
              alt={supplier.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
              <button
                onClick={() => onPlay(supplier.videoId!, supplier.name)}
                className="w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                aria-label={`Ver vídeo ${supplier.name}`}
              >
                <Play size={22} className="text-[#2354a2] ml-1" fill="#2354a2" />
              </button>
            </div>
          </>
        ) : (
          <img
            src={supplier.photo}
            alt={supplier.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2354a2] mb-1">
          {supplier.category}
        </span>
        <h3 className="font-semibold text-gray-900 text-base leading-tight mb-3 flex-1">
          {supplier.name}
        </h3>

        <div className="flex items-center gap-3 mt-auto">
          {supplier.videoId && (
            <button
              onClick={() => onPlay(supplier.videoId!, supplier.name)}
              className="flex items-center gap-1.5 text-sm text-[#2354a2] font-medium hover:underline"
            >
              <Play size={14} fill="#2354a2" />
              Ver vídeo
            </button>
          )}
          {supplier.channelUrl && (
            <a
              href={supplier.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors ml-auto"
            >
              <ExternalLink size={13} />
              Canal
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function EnsinoSuppliersSection() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; name: string } | null>(null);

  const handlePlay = (id: string, name: string) => setActiveVideo({ id, name });
  const handleClose = () => setActiveVideo(null);

  return (
    <>
      {activeVideo && (
        <VideoModal videoId={activeVideo.id} name={activeVideo.name} onClose={handleClose} />
      )}

      <section className="w-full bg-[#F5F5F5] px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#2354a2] animate-spin text-2xl font-['Inter','Noto_Sans_Symbols_2',sans-serif]">✱</span>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Marcas Parceiras</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Os Nossos Fornecedores
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl">
            Trabalhamos com fabricantes de referência mundial para garantir equipamentos de qualidade certificada.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {suppliers.map((supplier) => (
              <SupplierCard key={supplier.name} supplier={supplier} onPlay={handlePlay} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
