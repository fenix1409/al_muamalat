import { useTranslation } from "react-i18next"

const VideoCards = () => {
    const { t } = useTranslation()
    const cardsData = [
        {
            id: 1,
            title: "What is Islamic Finance?",
            videoId: "m0iMVuu2Tb4"
        },
        {
            id: 2,
            title: "What is the state of Islamic finance in Uzbekistan?",
            videoId: "kUEuvJba73Q"
        },
        {
            id: 3,
            title: "The path to Islamic finance ecosystem is clear...",
            videoId: "ZGDU0Bnwjl4&t=1s"
        },
        {
            id: 4,
            title: "Why Islamic Finance is Necessary?",
            videoId: "bmmWlOKSnW4"
        },
        {
            id: 5,
            title: "Islamic Finance Today: Needs, Demand, and Opportunities",
            videoId: "6pvGZwAo3Gg"
        },
        {
            id: 6,
            title: "Will the 'Halal' label affect the development of Islamic finance?",
            videoId: "pPamRgPM9-k"
        }
    ]

    return (
        <div className="flex items-center gap-[25px] flex-wrap justify-center">
            {cardsData.map((card) => (
                <div key={card.id} className="bg-white rounded-xl shadow-md overflow-hidden w-[423px] h-[400px]">
                    <div className="p-6 h-full flex flex-col">
                        <div className="relative pb-[56.25%] mb-4 overflow-hidden rounded-lg w-[391px] h-[300px]">
                            <iframe className="absolute top-0 left-0 w-[391px] h-[300px]" src={`https://www.youtube.com/embed/${card.videoId}`} title={card.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                        <h3 className="text-[22px] leading-[32px] font-bold text-[#103741]">
                            {t(card.title)}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VideoCards