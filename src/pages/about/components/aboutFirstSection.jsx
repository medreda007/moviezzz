import React, { useState } from 'react';
import "./aboutFirstSection.scss"
import { useParams } from 'react-router-dom';
import oppenhaimerImg from "../../../assets/img/oppenheimer.jpg"
import theHoldOverImg from "../../../assets/img/theholdovers.jpg"
import barbieImg from "../../../assets/img/barbie.jpg"
import granTurismoimg from "../../../assets/img/grandturismo.jpg"
import johnWickImg from "../../../assets/img/johnwhick4.jpg"
import pastLivesImg from "../../../assets/img/pastlives.jpg"
import killersOfTheFlowerMoonImg from "../../../assets/img/killersoftheflowermoon.jpg"

import oppenhaimerImgBg from "../../../assets/img/oppenheimer-bg.jpg"
import theHoldOverImgBg from "../../../assets/img/theholdovers-bg.jpg"
import barbieImgBg from "../../../assets/img/barbie-bg.jpg"
import granTurismoimgBg from "../../../assets/img/grandturismo-bg.jpg"
import johnWickImgBg from "../../../assets/img/johnwhick4-bg.jpg"
import pastLivesImgBg from "../../../assets/img/pastlives-bg.jpg"
import killersOfTheFlowerMoonImgBg from "../../../assets/img/killersoftheflowermoon-bg.jpg"

export const AboutFirstSection = () => {
    const { movie } = useParams()
    console.table(movie);

    class Movie {
        constructor(title, id, poster, bgImg, type , duration , description) {
            this.title = title;
            this.id = id;
            this.poster = poster;
            this.bgImg = bgImg;
            this.type = type;
            this.duration = duration;
            this.description = description;
        }
    }

    let theHoldOversObject = new Movie("The Holdovers", "theHoldOvers", theHoldOverImg, theHoldOverImgBg ,["Comedy,", " Drama"],"133 min", "During the holiday season, a grumpy history teacher finds himself stuck on campus at a secluded prep school. His solitary plans are disrupted when he's tasked with supervising a troubled student, who has nowhere else to go, and a grieving cook. As they navigate the empty halls and quiet corridors, unexpected bonds form among the unlikely trio. Through shared stories, laughter, and moments of reflection, they discover the healing power of companionship and the importance of finding solace in unexpected places.");
    let oppenhaimerObject = new Movie("Oppenhaimer", "oppenhaimer", oppenhaimerImg, oppenhaimerImgBg,["Biography,", " Drama,", " History"],"180 min", "Delve into the compelling tale of American scientist J. Robert Oppenheimer and his pivotal role in shaping history through the development of the atomic bomb. From the halls of academia to the clandestine laboratories of the Manhattan Project, Oppenheimer's journey is one of intellectual fervor, moral quandaries, and the weight of scientific responsibility. Explore the ethical dilemmas faced by Oppenheimer and his team as they grapple with the implications of their groundbreaking discoveries, ultimately altering the course of warfare and humanity's relationship with technology forever.");
    let barbieObject = new Movie("Barbie", "barbie", barbieImg, barbieImgBg,["Adventure,", " Comedy"],"114 min", "Barbie and Ken, enchanted by the dazzling world of Barbie Land, venture into the real world, where they encounter the complexities of human life. Amidst moments of joy and challenges, they navigate through the intricacies of human emotions, forging bonds and discovering the true essence of love and friendship. Their journey unveils valuable lessons on acceptance, diversity, and staying true to oneself, transforming their adventure into a remarkable odyssey of growth and self-discovery.");
    let grandTurismoObject = new Movie("Gran Turismo", "granTurismo", granTurismoimg, granTurismoimgBg,["Adventure,", " Drama,", " Sport"] ,"134 min", "Embark on an exhilarating journey inspired by the remarkable true story of a team of underdogs. Comprising a struggling, working-class gamer, a failed former race car driver, and an idealistic motorsport executive, this unlikely trio defies the odds and dares to challenge the elite world of motorsport. With determination and grit, they throw caution to the wind, risking everything in pursuit of their shared dream. As they navigate the cutthroat realm of professional racing, they discover the true meaning of perseverance, teamwork, and the relentless pursuit of excellence.");
    let johnWickObject = new Movie("John Wick", "johnWick", johnWickImg, johnWickImgBg,["Action,", " Thriller"],"169 min" , "John Wick finds himself on a relentless quest to dismantle the formidable High Table. However, his path to freedom is fraught with peril as he confronts a formidable new adversary. With powerful alliances spanning the globe, this new enemy poses a formidable threat, turning trusted allies into treacherous foes. As Wick navigates a treacherous landscape of betrayal and danger, he must rely on his unparalleled skills and unwavering resolve to overcome seemingly insurmountable odds. In a high-stakes battle for survival, Wick's journey unravels a web of intrigue, testing his limits and cementing his status as a legendary warrior.");
    let pastLivesObject = new Movie("Past Lives", "pastLives", pastLivesImg, pastLivesImgBg, ["Drama,", " Romance"],"105 min", "Witness the poignant reunion of Nora and Hae Sung, childhood friends whose lives took divergent paths after Nora's family emigrated from South Korea. Two decades later, they find themselves brought together again for a transformative week that challenges their perceptions of love and fate. As they navigate the complexities of their past and present, old wounds resurface, and long-buried emotions come to the surface. In this brief yet profound encounter, they discover the enduring power of friendship, forgiveness, and the unyielding bonds of the heart.");
    let killersOfTheFlowerMoonObject = new Movie("Killers of the Flower Moon", "killersOfTheFlowerMoon",killersOfTheFlowerMoonImg, killersOfTheFlowerMoonImgBg,["Drama,", " Crime"], "206 min", "Step into the tumultuous world of 1920s Oklahoma, where the discovery of oil beneath Osage Nation land sets off a chain of harrowing events. As the black gold flows, members of the Osage community are systematically targeted and murdered, their lives sacrificed for the riches beneath their feet. Amidst the chaos and bloodshed, a chilling mystery unfolds, shrouding the land in fear and suspicion. It's not until the intervention of the FBI that the truth begins to surface. Led by relentless agents, the investigation uncovers a web of greed, corruption, and betrayal that reaches into the highest echelons of society.");


    const [arrayShow, setArrayShow] = useState([
        theHoldOversObject,
        oppenhaimerObject,
        barbieObject,
        grandTurismoObject,
        johnWickObject,
        pastLivesObject,
        killersOfTheFlowerMoonObject
    ])


    let movieInfo = arrayShow.filter(movies => movies.title === movie)
    console.log(movieInfo);
    console.log(arrayShow);
    

    let suggestions = arrayShow.filter(element => element.type.some(ele => movieInfo[0].type==ele))
    console.log(suggestions);
    // let newTab2 = arrayShow.filter(element => element.genre.some(ele => ele.toLowerCase().includes(event.target.value.toLowerCase())))

    return (
        <div className='flex items-center justify-center h-[100vh] w-[100vw] bg-[#000000af]'>
            <div className="movie_card" id="tomb">
                <div className="info_section">
                    <div className="movie_header h-10 flex items-center">
                        <img className="locandina" src={movieInfo[0].poster} />
                        <div className="">
                            <h1 className='text-5xl p-3'>{movieInfo[0].title}</h1>
                            <h4>2018, Roar Uthaug</h4>
                            <span className="minutes">{movieInfo[0].duration}</span>
                            <p className="type">{movieInfo[0].type}</p>
                        </div>
                    </div>
                    <div className="movie_desc" >
                        <p className="text h-[100%] ">
                            {movieInfo[0].description}
                        </p>
                    </div>
                    <div className="movie_social">
                        <ul>
                            <li><i className="material-icons">share</i></li>
                            <li><i className="material-icons"></i></li>
                            <li><i className="material-icons">chat_bubble</i></li>
                        </ul>
                    </div>
                </div>
                <style>
                    {`
                .tomb_back {
                    background-image: url(${movieInfo[0].bgImg});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                `}
                </style>
                <div className={`blur_back tomb_back heroImage`}></div>
            </div>
        </div>
    );
};

