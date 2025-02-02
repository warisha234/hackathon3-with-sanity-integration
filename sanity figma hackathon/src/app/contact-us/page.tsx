import { FiPhoneCall, FiMail, FiInbox } from "react-icons/fi";
import { BsPinMap, BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

export default function GetHelpPage() {
  return (
    <div className="py-7">
      <div className="container mx-auto px-4">
        {/* GET HELP Heading and Search Bar */}
        <div className="text-center mb-12">
          <h1 className="text-[28px] font-semibold text-gray-800 mb-4">GET HELP</h1>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder=" What can we help you with?"
              className="w-full p-2  border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
        </div>

        {/* Left and Right Sections */}
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Payment Options Heading and Content */}
            <div className="space-y-3">
              <h2 className="md:text-[22px] xl:text-[22px] text-[15px] font-semibold text-gray-800 pb-[5px]">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h2>
              <p className="text-[15px] font-[500] text-[#111111] mt-2">
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
              </p>
              <ul className="pl-2 text-[15px] font-[500] text-[#111111] mt-2">
                <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro </li>
              </ul>
              <p className="text-[13px] font-[500] text-[#111111]">If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
              <p className="text-[15px] font-[500] text-[#111111] pl-2">Apple Pay</p>
              <p className="text-[15px] font-[500] text-[#111111] mt-2">
                <span className="font-semibold">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, <span className="font-semibold">join us</span> today.
              </p>
            </div>
            <div>
              {/* Join Us and Shop Nike Buttons */}
              <button className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                JOIN US
              </button>
              <button className="bg-black text-white text-sm sm:text-base ml-2 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                SHOP NIKE
              </button>
            </div>

            {/* FAQs Section */}
            <div className="text-[#111111]">
              <h2 className="text-[16px] font-[700] mt-8">FAQs</h2>
              <div className="space-y-6 mt-4">
                <div>
                  <p className="text-[18px] font-[700]">Does my card need international purchases enabled?</p>
                  <p className="text-[16px] font-[400] mt-2">
                    Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if
                    international purchases need to be enabled. <br /> <br />Please note, some banks may charge a <span className="font-semibold">small transaction fee</span> for international orders.
                  </p>
                </div>
                <div>
                  <p className="ext-[18px] font-[700]">Can I pay for my order with multiple methods?</p>
                  <p className="text-[16px] font-[400] mt-2">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                </div>
                <div>
                  <p className="ext-[18px] font-[700]">What payment method is accepted for SNKRS orders?</p>
                  <p className="text-[16px] font-[400] mt-2">You can use any accepted credit card to pay for your SNKRS order.</p>
                </div>
                <div>
                  <p className="ext-[18px] font-[700]">Why don&apos;t I see Apple Pay as an option?</p>
                  <p className="text-[16px] font-[400] mt-2">
                    To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS,
                    be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple
                    Pay on Nike.com.
                  </p>
                </div>
              </div>

              {/* Was this answer helpful? */}
              <div className="mt-6">
                <h3 className="text-[16px] font-[600]">Was this answer helpful?</h3>
                <div className="flex space-x-3 mt-2">
                  <BsHandThumbsUp className="text-2xl cursor-pointer hover:text-blue-600" />
                  <BsHandThumbsDown className="text-2xl cursor-pointer hover:text-red-600" />
                </div>
              </div>

              {/* Related Questions */}
              <div className="mt-6">
                <h3 className="text-[18px] font-[500] text-[#757575]">RELATED</h3>
                <div className="space-y-2 mt-2">
                  <p className="underline text-[17px] font-[600] text-[#111111]">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
                  <p className="underline text-[17px] font-[600] text-[#111111]">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block border-l-2 border-gray-300 mx-8"></div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 space-y-[35px] mt-[50px]">
            <h2 className="md:text-[24px] lg:text-[24px] text-[20px] font-[700] text-[#111111]">CONTACT US</h2>
            <div className="text-[#111111] space-y-8">
              <div>
                <FiPhoneCall className="text-2xl" />
                <p className="text-[16px] font-[700]">000 800 919 0566</p>
                <p className="font-[500] text-[14px]">Products & Orders: 24 hours a day, 7 days a week</p>
                <p className="font-[500] text-[14px] mt-3">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
              </div>
              <div>
                <FiInbox className="text-2xl" />
                <p className="font-[700] text-[14px]">24 hours a day <br /><span className="font-[500] text-[14px]">7 days a week</span></p>
              </div>
              <div>
                <FiMail className="text-2xl" />
                <p className="font-[700] text-[14px]">We&apos;ll reply within<br /><span className="font-[500] text-[14px]">five business days</span></p>
              </div>
              <div>
                <BsPinMap className="text-2xl" />
                <p className="font-[700] text-[16px]">STORE LOCATOR <br /><span className="font-[500] text-[14px]">Find Nike retail stores near you</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

