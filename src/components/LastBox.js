import '../index.css';
import illustration from "../images/illustration-thank-you.svg"

const LastBox = (props) => {
    return (
      <div className="box align-center jutify-center flex flex-col">
        <img className="block mx-auto w-36 sm:w-40 sm:mt-3" src={illustration} alt="illustration" />
        <div className="select-box w-40 h-8 rounded-3xl flex justify-center align-center mt-6 self-center align-self-center sm:w-48 sm:mt-8">
          <h1 className="select text-sm font-normal self-center sm:text-base">You selected {props.selectItem} out of 5</h1>
        </div>
        <h1 className="font-bold text-2xl text-center text-white mt-4 sm:text-3xl sm:mt-8">Thank you!</h1>
        <p className="text text-center w-full font-normal text-sm mt-3 sm:mt-4">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
}

export default LastBox;