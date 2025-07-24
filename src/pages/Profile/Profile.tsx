import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Profle: React.FC = () => {
    const [name, setName] = useState(localStorage.getItem('user') || '')
    const [address, setAddress] = useState(localStorage.getItem('address') || '')
    const [password, setPassword] = useState(localStorage.getItem('password') || '')
    const [phone, setPhone] = useState(localStorage.getItem('phone_number') || '')
    const { t } = useTranslation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const handleLogOut = () => {
        localStorage.clear()
        location.pathname = '/'
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{t('Profile')}</h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-[650px]">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500">👤</span>
                    </div>
                    <label className="ml-4 text-red-500 cursor-pointer">Image Upload</label>
                </div>
                <div>
                    <label className="block text-gray-700">{t('Full Name')}</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-red-500 p-2 w-full rounded" placeholder={t('Full Name')} required />
                </div>
                <div>
                    <label className="block text-gray-700">{t('Address')}</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="border border-red-500 p-2 w-full rounded" placeholder="Address" required />
                </div>
                <div>
                    <label className="block text-gray-700">{t('Password')}</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-red-500 p-2 w-full rounded" placeholder={t("Password")} required />
                </div>
                <div>
                    <label className="block text-gray-700">{t('Your Phone Number')}</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-red-500 p-2 w-full rounded" placeholder={t('Your Phone Number')} required />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-orange-500 cursor-pointer text-white p-2 rounded-full w-full">{t('Update')}</button>
                    <button className="w-full text-orange-500 cursor-pointer" onClick={() => handleLogOut()}>{t('Log out')}</button>
                </div>
            </form>
        </div>
    )
}

export default Profle