import { useTranslation } from "react-i18next";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-[#103741] text-white px-[100px] pt-[50px] pb-[20px]">
            <div className="flex gap-[20px]">
                <div className="space-y-4">
                    <strong className="text-[28px] leading-[30px] font-bold mb-5 inline-block">Get in Touch</strong>
                    <p className="flex items-center text-[#889ba0] cursor-pointer hover:text-[#fe5d37] transition duration-200">
                        <span className="mr-1">
                            <FaMapMarkerAlt color="#889ba0" width={22} height={22} />
                        </span>
                        {t('Tashkent City, Mirzo Ulugbek District, Lashkarbegi MFY, 59 Independence')}
                    </p>
                    <Link to={'tel:+998990511881'} className="flex items-center">
                        <span className="mr-1">
                            <FaPhoneAlt color="#889ba0" width={22} height={22} />
                        </span>
                        <p className="text-[15px] leading-[100%] text-[#889ba0] hover:text-[#fe5d37] transition duration-200">+998 99 051 18 81</p>
                    </Link>
                    <Link to={"mailto:Info@Al-Muamalat.Uz"} className="flex items-center">
                        <span className="mr-1">
                            <FaEnvelope color="#889ba0" width={22} height={22} />
                        </span>
                        <p className="text-[15px] leading-[100%] text-[#889ba0] hover:text-[#fe5d37] transition duration-200">Info@Al-Muamalat.Uz</p>
                    </Link>
                </div>
                <div>
                    <strong className="text-[28px] leading-[30px] font-bold mb-5 inline-block">{t('Quick Links')}</strong>
                    <ul>
                        <li>
                            <a href="#" className="text-[15px] leading-[100%] text-[#889ba0] hover:text-[#fe5d37] transition duration-200">{t('Special Shariah Board')}</a>
                        </li>
                        <li>
                            <a href="#" className="text-[15px] leading-[100%] text-[#889ba0] hover:text-[#fe5d37] transition duration-200">{t('Contact')}</a>
                        </li>
                        <li>
                            <a href="#" className="text-[15px] leading-[100%] text-[#889ba0] hover:text-[#fe5d37] transition duration-200">{t('Islamic Finance')}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-4 pt-2 text-center text-sm">
                <p>{t('© Al Muamalat. Barcha Huquqlar Himoyalangan.')} <span className="underline">Developer</span></p>
            </div>
        </footer>
    )
}

export default Footer