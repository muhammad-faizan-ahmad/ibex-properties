export default function Map() {
  return (
    <div className="my-10 md:my-20">
      <iframe
        title="Ibex Properties Map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.2320621517056!2d55.37542757538512!3d25.2964061776472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE3JzQ3LjEiTiA1NcKwMjInNDAuOCJF!5e0!3m2!1sen!2s!4v1702725444906!5m2!1sen!2s"
        width="100%"
        height="200px"
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          border: "none",
        }}
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
}
