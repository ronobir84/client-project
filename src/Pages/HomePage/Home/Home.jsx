import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import ExploreBanner from "../ExploreBanner/ExploreBanner";
import Featured from "../Featured/Featured";
import OurAgents from "../OurAgents/OurAgents";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div className="lg:max-w-full ">
            <Banner></Banner>
            <Featured></Featured>
            <WhyChooseUs></WhyChooseUs>
            <div className="lg:mx-32">
                <Card></Card>
            </div>
            <ExploreBanner></ExploreBanner>
            <div className="lg:mx-32">
                <OurAgents></OurAgents>
            </div>
        </div>
    );
};

export default Home;