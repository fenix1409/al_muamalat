import { useTranslation } from 'react-i18next';
import Image from '../../assets/meeting.webp';
import Contacts from '../ui/Contacts';

const MeetingForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center mx-[100px] my-[50px] bg-[#fef2f2] rounded-lg">
        <div className="flex flex-col items-start justify-center w-full p-8">
          <h1 className="text-4xl font-bold mb-6">Schedule a Meeting</h1>
          <form className="w-full">
            <div className='flex items-center justify-between'>
              <div className="mb-4 w-[48%]">
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder={t('Your Name')} />
              </div>
              <div className="mb-4 w-[48%]">
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder={t('Your Email Address')} />
              </div>
            </div>
            <div className="mb-4">
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder={t('Your Phone Number')} />
            </div>
            <div className="mb-4">
              <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder={t('Message')}></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-3 bg-[#fe5d37] text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200 cursor-pointer">Submit</button>
          </form>
        </div>
        <img src={Image} alt="Meeting illustration" className="w-1/2 h-auto rounded-r-lg" />
      </div>
      <Contacts />
    </>
  )
}

export default MeetingForm