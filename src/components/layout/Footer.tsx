import EmailIcon from "@/components/icons/EmailIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

const socials = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Email", href: "mailto:rachellaruiz@gmail.com", Icon: EmailIcon },
  { label: "Teléfono", href: "tel:+10000000000", Icon: PhoneIcon },
];

export default function Footer() {
  return (
    <footer className="px-medium pb-medium">
      {/* Panel BLANCO con esquinas redondeadas */}
      <div className="overflow-hidden rounded-xxlarge bg-white px-medium pt-large text-grey-800 sm:px-large">
        <div className="flex items-center justify-between gap-medium">
          {/* Overline mono, gris */}
          <p className="text-overline font-secondary uppercase text-grey-500">
            © 2026 Rachella Ruiz
          </p>

          {/* Íconos sociales en círculos con borde fino */}
          <div className="flex items-center gap-xsmall">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-300 text-grey-800 transition-[opacity,background-color] duration-200 ease-[ease] hover:bg-[#ececec] hover:opacity-60"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Wordmark gigante al ancho del panel */}
        <div className="mt-medium">
          <span
            className="block w-full font-primary font-semibold leading-none tracking-tight text-primary-500"
            style={{ fontSize: "clamp(4rem, 19vw, 17rem)" }}
          >
            Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
