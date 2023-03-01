import { Link } from "react-router-dom"


const Home = () => {

    return (
        <div>

            <h1>React Ironbeers</h1>
            <div className="home">
               <img src="../assets/beers.png"  alt="All Beers"></img>
               <Link to={"/beers"}>All Beers</Link>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna. At quis risus sed vulputate odio ut enim. Maecenas ultricies mi eget mauris. </p>
            </div>
            <div className="home">
               <img src="../assets/random-beer.png"  alt="Random Beer"></img>
               <Link to={'/random-beer'}>Random Beer</Link>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna. At quis risus sed vulputate odio ut enim. Maecenas ultricies mi eget mauris. </p>
            </div>
            <div className="home">
               <img src="../assets/new-beer.png"  alt="New Beer"></img>
               <Link to={'/new-beer'}>Add a Beer</Link>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna. At quis risus sed vulputate odio ut enim. Maecenas ultricies mi eget mauris. </p>
            </div>

            

        </div>
    )
}

export default Home