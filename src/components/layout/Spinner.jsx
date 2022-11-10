import SpinnerIcon from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="mt-20">
      <img width={180} className="text-center mx-auto" src={SpinnerIcon} alt="" />
    </div>
  );
}

export default Spinner;
