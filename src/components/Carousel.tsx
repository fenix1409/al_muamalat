import Services from "./sections/About"
import Expert from "./sections/Expert"
import Hero from "./sections/Hero"
import MeetingForm from "./sections/MeetingForm"
import Partners from "./sections/Partners"
import Team from "./sections/Team"
import Videos from "./sections/Videos"

const Carousel = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Team />
            <Expert />
            <Partners />
            <Videos />
            <MeetingForm />
        </main>
    )
}

export default Carousel