// import DndKit from './DndKit';
import { DnDKit as DnDKitReact } from './DndKitReact';
import './index.css';

const DndKitPage = () => {
  return (
    <div>
      <div className="relative my-4">
        <h2 className="text-4xl font-black mb-4 relative inline-block">
          <span className="relative z-10 uppercase">dnd-kit</span>
          <div className="absolute -bottom-1 left-0 w-full h-3 bg-green-400 -rotate-1 z-0"></div>
        </h2>
        <p className="absolute uppercase text-white font-black bg-red-400 text-[16px]! -top-0.5 -right-0.5 py-1.5 px-4 border-2 border-black rotate-3">
          App
        </p>
      </div>

      <div>
        <p className="text-xl max-w-2xl mt-6 mb-8!">blah blah blah</p>
      </div>
      <div className="border-5 border-black mb-8 h-[500px] min-h-[300px] flex grow justify-center items-center">
        <div className="bg-white w-full h-full flex flex-col justify-center items-center">
          {/* <a href="#" className="btn"></a>
          <div className="gradient-input mb-4">
            <input
              id="inputButton"
              type="text"
              placeholder="Type something..."
            />
          </div>
          <div className="gradient-button mb-4">
            <input
              id="gradientInput"
              type="text"
              placeholder="Type something..."
            />
          </div> */}
          <DnDKitReact />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-black mb-8 relative inline-block">
          <span className="relative z-10 uppercase">Tech Stack</span>
          <div className="absolute -bottom-0 left-0 w-full h-2 bg-purple-400 -rotate-1 z-0"></div>
        </h3>
        <ul className="flex flex-row justify-start items-center mb-8 gap-4">
          <li className="px-2 py-1 bg-green-400">React</li>
        </ul>
      </div>
      <hr className="border-2 mb-8 border-black" />
      <div>
        <h4>About this project</h4>
      </div>
      <hr className="border-2 my-8 border-black" />
    </div>
  );
};

export default DndKitPage;
