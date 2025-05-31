import '@/assets/styles/css-challenges.css';

export default function TransformsChallenge() {
  return (
    <div className="logo">
      <div className="tc-box box-red"></div>
      <div className="tc-box box-blue"></div>
      <div className="tc-box box-green"></div>
      <div className="tc-box box-orange"></div>
    </div>
  );
}

/* Transforms Challenge
-----------------------

Your task is to create an animation that uses transforms to animate the logo displayed on the page
It should be moved to the middle, stretched on the X axis to elongate the boxes and skewed to
make it look like it's tilted -80 degrees
The animation should run once and the logo should retain its styles once its complete.

*/
