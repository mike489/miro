import walmart from "../assets/img/Walmart_Index_Only.svg";
import newwal from "../assets/img/Walmart_Index_Only.svg";
import wwal from "../assets/img/Walmart_Index_Only.svg";
import wal from "../assets/img/Walmart_Index_Only.svg";

const images = [
  { id: 1, img: walmart },
  { id: 2, img: newwal },
  { id: 3, img: wwal },
  { id: 4, img: wal },
];

const Trusted = () => {
  return (
    <div className="bg-white py-24 sm:py-32 px-[5%]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-12">
          Trusted by 45M+ users
        </h2>

        <div className="grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div key={image.id} className="flex justify-center">
              <img
                src={image.img}
                alt={`Brand Logo ${image.id}`}
                className="h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
