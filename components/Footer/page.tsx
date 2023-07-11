import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function Footer(): JSX.Element {
    return (
        <footer className='px-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-24 container mx-auto">
            <div>
                <div className="col-start-1 col-end-3">
                    <img alt="logo"
                        src="/assets/images/dine_market_logo.webp" width="180" height="30" decoding="async"
                        data-nimg="1" loading="lazy" style={{color: "transparent"}}
                        className="mb-8"
                    />
                    <p className="pr-16">Small, artisan label that offers a thoughtfully curated collection of high quality
                        everyday essentials made.</p>
                    <div className="flex mt-2 w-24 justify-around">
                        <FaTwitter/>
                        <FaFacebookF/>
                        <FaLinkedinIn/>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <div className="footer-links mt-8">
                    <h3 className='font-bold'>Company</h3>
                    <ul>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/terms_use"}>Terms of Use</Link></li>
                        <li><Link href={"/privacy_policy"}>Privacy Policy</Link></li>
                        <li><Link href={"/how_it_works"}>How it Works</Link></li>
                        <li><Link href={"/contact"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-links mt-8">
                    <h3 className='font-bold'>Support</h3>
                    <ul>
                        <li><Link href={"/support_carrier"}>Support Carrier</Link></li>
                        <li><Link href={"/24h_service"}>24h Service</Link></li>
                        <li><Link href={"/quick_chat"}>Quick Chat</Link></li>
                    </ul>
                </div>
                <div className="footer-links mt-8">
                    <h3 className='font-bold'>Contact</h3>
                    <ul>
                        <li><Link href={"/whatsapp"}>Whatsapp</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className=" flex text-sm justify-around py-8 border-t border-grey">
            <p>Copyright © 2022 Dine Market</p>
            <p>Design by <span>Weird Design Studio</span></p>
            <p>Code by <span>Hamza Yousaf</span></p>
        </div>
    </footer>
    )
  }
  