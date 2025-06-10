import EmblaCarousel from "./components/embla/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function page() {
  return (
    <div>
      <h1>Home Page</h1>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}
