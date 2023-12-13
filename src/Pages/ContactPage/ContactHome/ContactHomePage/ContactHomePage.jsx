import ContactBanner from "../ContactBanner/ContactBanner";
import MainBanner from "../MainBanner/MainBanner";
import MessageOurLocations from "../MessageOurLocations/MessageOurLocations";

const ContactHomePage = () => {
    return (
        <div>
            <div className="lg:mx-[130px] lg:pt-52">
                <ContactBanner></ContactBanner>
            </div>
            <div className="mt-20">
                <MainBanner></MainBanner>
            </div>
            <div className="lg:mx-[130px] mt-52">
                <MessageOurLocations></MessageOurLocations>

            </div>
        </div>
    );
};

export default ContactHomePage;