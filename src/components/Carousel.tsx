import Services from "./sections/About"
import Expert from "./sections/Expert"
import Hero from "./sections/Hero"
import Partners from "./sections/Partners"
import Team from "./sections/Team"

const Carousel = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Team />
            <Expert />
            <Partners />
        </main>
    )
}

export default Carousel