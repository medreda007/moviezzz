
import { useState, useEffect } from 'react';
import './firstSection.scss'
import oppenhaimerImg from "../../../assets/img/oppenheimer.jpg"
import theHoldOverImg from "../../../assets/img/theholdovers.jpg"
import barbieImg from "../../../assets/img/barbie.jpg"
import granTurismoimg from "../../../assets/img/grandturismo.jpg"
import johnWickImg from "../../../assets/img/johnwhick4.jpg"
import pastLivesImg from "../../../assets/img/pastlives.jpg"
import killersOfTheFlowerMoonImg from "../../../assets/img/killersoftheflowermoon.jpg"
import { Link, useNavigate } from 'react-router-dom';


// export const FirstSection = () => {

//     class Movie {
//         constructor(title, id, poster) {
//             this.title = title;
//             this.id = id;
//             this.poster = poster;
//         }
//     }

//     const [arrayShow, setArrayShow] = useState([]);

//     useEffect(() => {
//         // Create movie objects and store them in an array
//         let theHoldOversObject = new Movie("The Holdovers", "theHoldOvers", theHoldOverImg);
//         let oppenhaimerObject = new Movie("Oppenhaimer", "oppenhaimer", oppenhaimerImg);
//         let barbieObject = new Movie("Barbie", "barbie", barbieImg);
//         let grandTurismoObject = new Movie("Grand Turismo", "grandTurismo", grandTurismoimg);
//         let johnWickObject = new Movie("John Wick", "johnWick", johnWickImg);
//         let pastLivesObject = new Movie("Past Lives", "pastLives", pastLivesImg);
//         let killersOfTheFlowerMoonObject = new Movie("Killers of the Flower Moon", "killersOfTheFlowerMoon", killersOfTheFlowerMoonImg);

//         // Create an array with all movie objects
//         let moviesArray = [
//             theHoldOversObject,
//             oppenhaimerObject,
//             barbieObject,
//             grandTurismoObject,
//             johnWickObject,
//             pastLivesObject,
//             killersOfTheFlowerMoonObject
//         ];

//         // Set the array to the state variable
//         setArrayShow(moviesArray);

//     }, []); // Empty dependency array, runs once on mount
//     console.log(arrayShow);

//     const navigate = useNavigate()
//     return (
//         <>
//             <div className="flex justify-center items-center h-[25vh]">
//                 <input type="text" className='border border-0 rounded-[10px] h-12 w-[40vw]' />
//                 <button className="btn-grad"> Search </button>
//             </div>
//             {
//                 arrayShow.map((movie, index) => (
//                         <div onClick={()=>navigate(`/about/${movie.title}/`)} key={index} className="movie-card">
//                             <div className="movie-header w-[100%] babyDriver">
//                                 <img className='w-[100%] h-full rounded-t-[10px]' src={movie.poster} alt="" />
//                             </div>
//                             <div className="movie-content">
//                                 <div className="movie-content-header">
//                                     <a href="#">
//                                         <h3 className="movie-title">{movie.title}</h3>
//                                     </a>
//                                     <div className="imax-logo"></div>
//                                 </div>
//                                 <div className="movie-info">
//                                     <div className="info-section">
//                                         <label>Date & Time</label>
//                                         <span>Tue 4 July - 05:00PM</span>
//                                     </div>
//                                     <div className="info-section">
//                                         <label>Screen</label>
//                                         <span>01</span>
//                                     </div>
//                                     <div className="info-section">
//                                         <label>Row</label>
//                                         <span>H</span>
//                                     </div>
//                                     <div className="info-section">
//                                         <label>Seat</label>
//                                         <span>15</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                 )
//                 )
//             }
//         </>
//     );
// }
// import { useState } from 'react';
// import './firstSection.scss'
// import { Navigate } from 'react-router-dom';



export const FirstSection = () => {



    class Movie {
        constructor(title, id, poster , genre) {
            this.title = title;
            this.id = id;
            this.poster = poster;
            this.genre = genre;
        }
    }

    let theHoldOversObject = new Movie("The Holdovers", "theHoldOvers", theHoldOverImg,["drama","comedy"]);
    let oppenhaimerObject = new Movie("Oppenhaimer", "oppenhaimer", oppenhaimerImg,["drama","biography","history"]);
    let barbieObject = new Movie("Barbie", "barbie", barbieImg,["comedy","adventure"]);
    let granTurismoObject = new Movie("Gran Turismo", "granTurismo", granTurismoimg,["sport","drama","adventure"]);
    let johnWickObject = new Movie("John Wick", "johnWick", johnWickImg,["action","thriller"]);
    let pastLivesObject = new Movie("Past Lives", "pastLives", pastLivesImg,["romance","drama"]);
    let killersOfTheFlowerMoonObject = new Movie("Killers of the Flower Moon", "killersOfTheFlowerMoon", killersOfTheFlowerMoonImg,["crime","drama"]);


    // let theHoldOversObject = new Movie ("the Hold Overs","theHoldOvers","")
    // let oppenhaimerObject = new Movie ("Oppenhaimer","oppenhaimer","")
    // let barbieObject = new Movie ("Barbie","barbie","")
    // let grandTurismoObject = new Movie ("Grand Turismo","grandTurismo","")
    // let johnWickObject = new Movie ("John Wick","johnWick","")
    // let pastLivesObject = new Movie ("Past Lives","pastLives","")
    // let killersOfTheFlowerMoonObject = new Movie ("Killers of the Flower Moon","killersOfTheFlowerMoon","")


    const [arrayShow, setArrayShow] = useState([
        theHoldOversObject,
        oppenhaimerObject,
        barbieObject,
        granTurismoObject,
        johnWickObject,
        pastLivesObject,
        killersOfTheFlowerMoonObject
    ])

    const [arrayShowDub, setArrayShowDub] = useState(arrayShow)


    // Set the array to the state variable
    // setArrayShow(moviesArray);

    const Search = (event) => {
        let newTab = arrayShow.filter(element => element.title.toLowerCase().includes(event.target.value.toLowerCase()));
        let newTab2 = arrayShow.filter(element => element.genre.some(ele => ele.toLowerCase().includes(event.target.value.toLowerCase())))
        if (newTab != "") {
            setArrayShowDub(newTab);
        }else if (newTab2 != "") {
            setArrayShowDub(newTab2);
        }
    }

    const navigate = useNavigate()

    

    return (
        <>
            <div className="flex justify-center items-center h-[25vh]">
                <input onChange={(e)=>Search(e)} type="search" className='border  rounded-[10px] h-12 w-[40vw]' placeholder=' Enter the name or genre of the movie' />
                <button className="btn-grad"> Search </button>
            </div>
            {
                arrayShowDub.map((movie, index) => (
                    <div onClick={() => navigate(`/moviezzz/about/${movie.title}/`)} key={index} className="movie-card ">
                        <div className="movie-header w-[100%] h-fit">
                            <img className='w-[100%] object-cover h-full rounded-t-[10px]' src={movie.poster} alt="" />
                        </div>
                        <div className="movie-content">
                            <div className="movie-content-header flex ">
                                <a href="#">
                                    <h3 className="movie-title">{movie.title}</h3>
                                </a>
                            </div>
                                <div className="imax-logo"></div>
                            <div className="movie-info">
                                <div className="info-section">
                                    <label>Date & Time</label>
                                    <span>Tue 4 July - 05:00PM</span>
                                </div>
                                <div className="info-section">
                                    <label>Screen</label>
                                    <span>01</span>
                                </div>
                                <div className="info-section">
                                    <label>Row</label>
                                    <span>H</span>
                                </div>
                                <div className="info-section">
                                    <label>Seat</label>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </>
    );
}