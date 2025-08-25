import { useMemo } from "react";

import baddie1 from "../assets/baddie1.png";
import baddie2 from "../assets/baddie2.png";
import baddie3 from "../assets/baddie3.png";
import baddie4 from "../assets/baddie4.png";
import baddieEye1 from "../assets/baddieEye1.avif";
import baddieEye2 from "../assets/baddieEye2.avif";
import baddieEye3 from "../assets/baddieEye3.avif";
import baddieEye4 from "../assets/baddieEye4.avif";
import baddieEye5 from "../assets/baddieEye5.avif";
import baddieEye6 from "../assets/baddieEye6.avif";
import baddieEye7 from "../assets/baddieEye7.avif";
import baddieEye8 from "../assets/baddieEye8.avif";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function BaddiePreview() {
  const images = useMemo(
    () => [
      baddie1,
      baddie2,
      baddie3,
      baddie4,
      baddieEye1,
      baddieEye2,
      baddieEye3,
      baddieEye4,
      baddieEye5,
      baddieEye6,
      baddieEye7,
      baddieEye8,
    ],
    []
  );

  const row1 = useMemo(() => shuffleArray(images), [images]);
  const row2 = useMemo(() => shuffleArray(images), [images]);

  return (
    <div className="w-full overflow-hidden bg-black py-8 space-y-6">
      {/* Row 1 */}
      <div className="flex animate-slide">
        {[...row1, ...row1].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="baddie"
            className="w-32 h-32 object-cover mx-2 rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex animate-slide-reverse">
        {[...row2, ...row2].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="baddie"
            className="w-32 h-32 object-cover mx-2 rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default BaddiePreview;
