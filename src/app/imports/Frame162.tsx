import imgMap from "figma:asset/1edab39ef5abd0344f31ae33271b16287b0d9165.png";

export default function Frame() {
  return (
    <div className="relative w-full h-full">
      <div className="relative h-full w-full max-w-[955px] mx-auto rounded-[20px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden" data-name="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14355.1366606791!2d32.624961402149154!3d-25.909464888903162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDU0JzIwLjMiUyAzMsKwMzcnNTMuMyJF!5e0!3m2!1sen!2smz!4v1784555381399!5m2!1sen!2smz"
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