import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Featured from "../Featured/Featured";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div className="lg:max-w-full ">
            <Banner></Banner>
            <Featured></Featured>
            <WhyChooseUs></WhyChooseUs>
            <div className="mx-32">
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;