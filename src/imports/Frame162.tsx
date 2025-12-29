import imgMap from "figma:asset/1edab39ef5abd0344f31ae33271b16287b0d9165.png";

export default function Frame() {
  return (
    <div className="relative w-full h-full">
      <div className="relative h-full w-full max-w-[955px] mx-auto rounded-[20px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden" data-name="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.2876543210987!2d32.610123!3d-25.912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69b3f4b000001%3A0x1234567890abcdef!2sBairro%20da%20Costa%20de%20Sol%2C%20Maputo%2C%20Mozambique!5e0!3m2!1sen!2smz!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 'inherit' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}