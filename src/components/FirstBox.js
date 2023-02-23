import '../index.css';
import star from "../images/icon-star.svg";

function FirstBox(props) {
    const rating = [1,2,3,4,5];
    const liClickHandler = (e) => {
        props.SelectFunc(e.currentTarget.innerHTML)
        document.querySelectorAll('.rating').forEach((e) => {
          e.classList.remove('active-rating');
        })
        e.currentTarget.classList.add('active-rating');
    }
    return (
        <div className="box">
            <div className="img-box w-10 h-10 rounded-full flex justify-center align-center sm:w-12 sm:h-12">
                <img className="w-3 h-3 justify-self-center self-center sm:w-4 sm:h-4" src={star} alt="star" />
            </div>
            <h1 className= "font-bold text-2xl text-white mt-4 sm:text-3xl">How did we do?</h1>
            <h2 className="text w-full font-normal text-sm mt-3 sm:text-base">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h2>
            <ul className="flex flex-row gap-4 mt-6 sm:gap-5" >
                {rating.map((item) => {
                    return <li onClick={liClickHandler}  className="rating">{item}</li>
                })}
            </ul>
            <button onClick={() => props.setSubmited(true)} className="submit w-full h-11 rounded-3xl outline-none text-white text-sm font-bold mt-6 transition-all duration-300 tracking-widest sm:h-12 sm:mt-8" type="submit">SUBMIT</button>
        </div>
        
    )
}

export default FirstBox;