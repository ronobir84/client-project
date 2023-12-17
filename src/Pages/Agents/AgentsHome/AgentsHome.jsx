import AgentsBanner from "../AgentsBanner/AgentsBanner";
import AgentsMan from "../AgentsMan/AgentsMan";
import AgentsText from "../AgentsText/AgentsText";

 
const AgentsHome = () => {
    return (
        <div>
            <div className="lg:mx-[130px] pt-52">
                <AgentsText></AgentsText>
            </div>
            <div>
                <AgentsBanner></AgentsBanner>
            </div>
            <div className="lg:mx-36 mt-56">
                <AgentsMan></AgentsMan>
            </div>
        </div>
    );
};

export default AgentsHome;