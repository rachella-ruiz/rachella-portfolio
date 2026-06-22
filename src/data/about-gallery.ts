// Imágenes de la galería del About (en /public/about tras el reorg). Alt
// descriptivo por imagen. La galería duplica el set para el loop sin costura.
export interface AboutImage {
  src: string;
  alt: string;
}

export const aboutGallery: AboutImage[] = [
  { src: "/about/img1.avif", alt: "View over purple bike handlebars on a paved trail" },
  { src: "/about/img2.avif", alt: "Looking out over a lake from the shore" },
  {
    src: "/about/img3.avif",
    alt: "Handmade miniature of a blue-and-gold ceramic wall lamp on a deep blue panel",
  },
  {
    src: "/about/img4.avif",
    alt: "Handmade miniature of a Spanish house facade with a doorway, barred window, and a lit lantern",
  },
  { src: "/about/img5.avif", alt: "Feet propped up reading at the beach" },
  { src: "/about/img6.avif", alt: "Tomato plants growing in the garden" },
  { src: "/about/img7.avif", alt: "A butterfly resting on a fingertip" },
  { src: "/about/img8.avif", alt: "View over bike handlebars on a sunlit forest trail" },
  { src: "/about/img9.avif", alt: "Standing in front of a castle in Spain" },
  {
    src: "/about/img10.avif",
    alt: "Handmade miniature of a traditional Santa Cruz de La Palma balcony, Canary Islands",
  },
  { src: "/about/img11.avif", alt: "Handmade miniature of a traditional Havana facade" },
  {
    src: "/about/img12.avif",
    alt: "Gym gear on the floor — dumbbells, water bottle, and bag",
  },
  { src: "/about/img13.avif", alt: "Reading at the beach at sunset" },
];
