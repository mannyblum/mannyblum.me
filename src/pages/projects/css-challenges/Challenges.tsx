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

const CSSChallenges = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
      <div className="">
        <div className="rounded-md border-5 flex flex-col justify-center items-center border-black p-2 bg-white min-w-[600px]">
          <SpoilerRevealer />
        </div>
        <span className="text-right flex justify-end mr-2">
          Spoiler Revealer
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 flex justify-center items-center border-black p-2 bg-white min-w-[600px]">
          <ColorfulButton />
        </div>
        <span className="text-right flex justify-end mr-2">
          Colorful Button
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
          <ExpandingSearchbar />
        </div>
        <span className="text-right flex justify-end mr-2">
          Expanding Search Bar
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
          <CodepenTile />
        </div>
        <span className="text-right flex justify-end mr-2">Codepen Tile</span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
          <LoadingAnimationOne />
        </div>
        <span className="text-right flex justify-end mr-2">
          Loading Animation 1
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
          <LoadingAnimationTwo />
        </div>
        <span className="text-right flex justify-end mr-2">
          Loading Animation 2
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
          <ArcheryTarget />
        </div>
        <span className="text-right flex justify-end mr-2">Archery Target</span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
          <WordCarousel />
        </div>
        <span className="text-right flex justify-end mr-2">Word Carousel</span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px]">
          <SwissFlag />
          <FrenchFlag />
          <GermanFlag />
          <MadagascarFlag />
          <JapaneseFlag />
          <SwedishFlag />
          <NigerFlag />
        </div>
        <span className="text-right flex justify-end mr-2">Various Flags</span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <Profile />
        </div>
        <span className="text-right flex justify-end mr-2">Profile</span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <ToggleSwitch />
        </div>
        <span className="text-right flex justify-end mr-2">Toggle Switch</span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <AceOfSpades />
        </div>
        <span className="text-right flex justify-end mr-2">Ace of Spades</span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <FourOfHearts />
        </div>
        <span className="text-right flex justify-end mr-2">Four of Hearts</span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <AdjustableProgressBar />
        </div>
        <span className="text-right flex justify-end mr-2">
          Adjustable Progress Bar
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <JeopardyCardFlip />
        </div>
        <span className="text-right flex justify-end mr-2">
          Jeopardy Card Flip
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <LoadingAnimation3 />
        </div>
        <span className="text-right flex justify-end mr-2">
          Loading Animation 3
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <InstagramStoriesMenu />
        </div>
        <span className="text-right flex justify-end mr-2">
          Instagram Stories Menu
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <AnimatedProgressBar />
        </div>
        <span className="text-right flex justify-end mr-2">
          Animated Progress Bar
        </span>
      </div>
      <div className="">
        <div className="rounded-md border-5 border-black p-2 bg-white min-w-[600px] flex justify-center items-center">
          <GithubContributionsGraph />
        </div>
        <span className="text-right flex justify-end mr-2">
          Github Contributions Graph
        </span>
      </div>
    </div>
  );
};

export default CSSChallenges;
