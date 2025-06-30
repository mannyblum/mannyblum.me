import {
  AceOfSpades,
  AdjustableProgressBar,
  AnimatedProgressBar,
  ArcheryTarget,
  CodepenTile,
  ColorfulButton,
  ExpandingSearchbar,
  FourOfHearts,
  FrenchFlag,
  GermanFlag,
  GithubContributionsGraph,
  InstagramStoriesMenu,
  JapaneseFlag,
  JeopardyCardFlip,
  LoadingAnimation3,
  LoadingAnimationOne,
  LoadingAnimationTwo,
  MadagascarFlag,
  NigerFlag,
  Profile,
  SpoilerRevealer,
  SwedishFlag,
  SwissFlag,
  ToggleSwitch,
  WordCarousel,
} from '@/components/CSSChallenges/SpringSalad';

// const componentList = [
//   SpoilerRevealer,
//   ColorfulButton,
//   ExpandingSearchbar,
//   CodepenTile,
//   LoadingAnimationOne,
//   LoadingAnimationTwo,
//   ArcheryTarget,
//   WordCarousel,
//   SwissFlag,
//   FrenchFlag,
//   GermanFlag,
//   MadagascarFlag,
// ];

const CSSChallenges = () => {
  // function renderChallenges() {
  //   return componentList.map((Component, index) => (
  //     <div key={index} className="rounded-md border-5 border-black p-2">
  //       <Component />
  //     </div>
  //   ));
  // }

  return (
    // <div className="w-full h-full flex flex-wrap content-start justify-start items-start gap-4 bg-white p-5">
    // grid-template-columns: repeat(auto-fill, minmax(250px,1fr));

    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
      {/* {renderChallenges()} */}
      <div className="rounded-md border-5 flex flex-col justify-center items-center border-black p-2 bg-white min-w-[600px]">
        <SpoilerRevealer />
      </div>
      <div className="rounded-md border-5 flex justify-center items-center border-black p-2 bg-white min-w-[600px]">
        <ColorfulButton />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
        <ExpandingSearchbar />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
        <CodepenTile />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
        <LoadingAnimationOne />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
        <LoadingAnimationTwo />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
        <ArcheryTarget />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
        <WordCarousel />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
        <SwissFlag />
        <FrenchFlag />
        <GermanFlag />
        <MadagascarFlag />
        <JapaneseFlag />
        <SwedishFlag />
        <NigerFlag />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <Profile />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <ToggleSwitch />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <AceOfSpades />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <FourOfHearts />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <AdjustableProgressBar />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <JeopardyCardFlip />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <LoadingAnimation3 />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <InstagramStoriesMenu />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <AnimatedProgressBar />
      </div>
      <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
        <GithubContributionsGraph />
      </div>
    </div>
  );
};

export default CSSChallenges;
