import { useTranslation } from 'react-i18next'
import VideoCards from '../ui/VideoCards'

const Videos = () => {
    const { t } = useTranslation()
    return (
        <section className='px-[100px] py-[80px]'>
            <h2 className='text-[30px] leading-[100%] font-bold uppercase text-[#103741] mb-[48px] text-center'>{t('Our Videos')}</h2>
            <VideoCards/>
        </section>
    )
}

export default Videos