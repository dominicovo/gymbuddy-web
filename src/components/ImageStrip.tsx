import Image from 'next/image';

const STRIP_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=260&fit=crop&q=75', alt: '' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=260&fit=crop&q=75', alt: '' },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=260&fit=crop&q=75', alt: '' },
  { src: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=400&h=260&fit=crop&q=75', alt: '' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=260&fit=crop&q=75', alt: '' },
  { src: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=400&h=260&fit=crop&q=75', alt: '' },
];

// Duplicate for seamless loop
const ALL_IMAGES = [...STRIP_IMAGES, ...STRIP_IMAGES];

export default function ImageStrip() {
  return (
    <div className="image-strip-wrap" aria-hidden="true">
      <div className="image-strip">
        <div className="strip-track">
          {ALL_IMAGES.map((img, i) => (
            <div className="strip-img" key={i}>
              <Image src={img.src} alt={img.alt} width={400} height={260} />
            </div>
          ))}
        </div>
      </div>
      <div className="strip-fade strip-fade--left" />
      <div className="strip-fade strip-fade--right" />
    </div>
  );
}
