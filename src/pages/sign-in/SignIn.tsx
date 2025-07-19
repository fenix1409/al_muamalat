"use client";
import Logo from '../../assets/new-logo.png'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../../components/hooks/instance';

export default function SignIn() {
    const router = useNavigate()
    const { t } = useTranslation()
    const [form, setForm] = useState({ phone_number: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        var data = {
            phone_number: form.phone_number,
            password: form.password
        };

        instance().post('/auth/signin', data).then((response) => {
            if (response.status === 200) {
                const token = response.data.data.tokens?.accessToken;
                const user = response.data.data.user.full_name;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", token)
                toast.success(t('Siz muvaffaqiyatli tizimga kirdingiz!'));
                console.log('response.data');
                router('/');
            }
            console.log(response.data);

        })
            .catch((error) => {
                console.error(error);
                toast.error(t('Login yoki parol noto‘g‘ri!'));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className='bg-[#f2f2f2] min-h-screen'>
            <button className='w-[120px] p-[10px] top-[20px] relative rounded-[8px] bg-[#fe5d37] text-[15px] leading-[100%] font-semibold text-white inline-block cursor-pointer left-[80%]' onClick={() => router('/register')}>
                {t('Register')}
            </button>
            <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <Link to={'/'} className="flex justify-center mb-6">
                        <img src={Logo} alt='logo' width={410} height={100} style={{ width: "410px", height: "100px", objectFit: "cover" }} />
                    </Link>
                    <form onSubmit={submitForm} className="space-y-5">
                        <h1 className='text-[#fe6d4b] text-[40px] text-center leading-[100%] font-bold flex justify-center'>
                            {t('Kirish')}
                        </h1>
                        <div>
                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                                {t('Sizning raqamingiz')}
                            </label>
                            <input required type="text" id="phone_number" name="phone_number" value={form.phone_number} onChange={handleChange} className="focus:outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#fe6d4b] focus:border-[#fe6d4b]" placeholder={t('Telefon raqam yoki email')} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                {t('Parol')}
                            </label>
                            <input required type="password" id="password" name="password" value={form.password} onChange={handleChange} className="focus:outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#fe6d4b] focus:border-[#fe6d4b]" placeholder={t('Parol')} />
                        </div>
                        <button type="submit" disabled={isLoading} className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fe6d4b] hover:bg-[#fe5d37] transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                            {isLoading ? t('Loading...') : t('Yuborish')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}