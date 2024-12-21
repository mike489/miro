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
    <div className="bg-white py-12 sm:py-24 px-4 sm:px-8 lg:px-[5%]">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
          Trusted by Global Leaders
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 items-center">
          {images.map((image) => (
            <div key={image.id} className="flex justify-center">
              <img
                src={image.img}
                alt={`Brand Logo ${image.id}`}
                className="h-12 w-auto sm:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
