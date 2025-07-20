import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-teal-800 text-white p-6">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-lg font-bold mb-2">Get in Touch</h2>
                    <p className="flex items-center">
                        <span className="mr-1">📍</span>
                        Tashkent City, Mirzo Ulugbek District, Lashkarbegi MFY, 59 Independence
                    </p>
                    <p>+998 99 051 18 81</p>
                    <p>Email: <a href="mailto:Info@Al-Muamalat.Uz" className="underline">Info@Al-Muamalat.Uz</a></p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-teal-300 transition duration-200">Special Shariah Board</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-300 transition duration-200">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-300 transition duration-200">Islamic Finance</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-4 pt-2 text-center text-sm">
                <p>© Al Muamalat. Barcha Huquqlar Himoyalangan. <span className="underline">Developer</span></p>
            </div>
        </footer>
    )
}

export default Footer