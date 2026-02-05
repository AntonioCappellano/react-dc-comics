export default function Header() {
    
    const navBarLinks = [
        {
            url: "#",
            text: "CHARACTERS"
        },
        {
            url: "#",
            text: "COMICS"
        },
        {
            url: "#",
            text: "MOVIES"
        },
        {
            url: "#",
            text: "TV"
        },
        {
            url: "#",
            text: "GAMES"
        },
        {
            url: "#",
            text: "COLLECTIBLES"
        },
        {
            url: "#",
            text: "VIDEOS"
        },
        {
            url: "#",
            text: "FANS"
        },
        {
            url: "#",
            text: "NEWS"
        },
        {
            url: "#",
            text: "SHOP"
        },
       
    ] 

    return <header>
        <div className="container mt-2 d-flex align-items-center justify-content-between">
         <figure>
                <img src="src\assets\img\dc-logo.png" alt="dc-logo"></img>
         </figure> 

        <ul className="list-unstyled mb-0">
            {navBarLinks.map((links, index) =>(
                <li key={index} className="d-inline-block mx-3"> <a href={links.url} > {links.text}</a> </li>
            ))}
            
         </ul>
        </div>
    </header>
}



 


