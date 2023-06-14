import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center background overflow-x-hidden">
        <h1 className="bg-white rounded-lg text-3xl px-1 py-3 w-11/12 text-center mt-[40px] ">
          RANDOM GIFS
        </h1>
        <div className="w-full flex flex-col gap-y-10 mt-[30px] items-center">
          <Random />
          <Tag />
        </div>
      </div>
    </>
  );
}
