import Image from '../../assets/meeting.webp'

const MeetingForm = () => {
  return (
    <div className="flex items-center mx-[100px] my-[80px] bg-[#fff5f3]">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold mb-4">Schedule a Meeting</h1>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Date and Time</label>
            <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Schedule</button>
        </form>
      </div>
      <img src={Image} alt="image" width={640} height={480} />
    </div>
  )
}

export default MeetingForm