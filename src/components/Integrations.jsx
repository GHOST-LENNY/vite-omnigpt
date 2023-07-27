import { SiNotion, SiGithub, SiTrello, SiJira } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const Integrations = () => {
  return (
    <div className="hidden lg:block bg-black my-28 py-24 px-36 ">
      <h1 className="text-5xl xl:text-7xl font-medium font-meridian mx-auto mb-12">
        <span className="text-[#1FC77E]">Integrations</span> to Boost <br />{" "}
        Your Workflow
      </h1>

      <div className="grid grid-cols-3 font-generalSans gap-6">
        <a href="" className="bg-white text-black p-6 rounded-md shadow-xl hover:scale-105 transition duration-300 ease-out ">
          <div className="flex items-center pb-4 gap-4">
            <RiWhatsappFill className="text-green-500" size="2em" />
            <h2 className="font-medium">WhatsApp</h2>
          </div>

          <p className="text-sm">
            Connect your WhatsApp account to easily send and receive messages
            directly with OmniGPT.
          </p>
        </a>
        <a href="" className="bg-white text-black p-6 rounded-md hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center pb-4 gap-4">
            <img src="/OmniGPT images/Group 13371.png" />
            <h2 className="font-medium">Slack</h2>
          </div>

          <p className="text-sm">
            Connect your OmniGPT account to Slack and start collaborating with
            your team right away.
          </p>
        </a>
        <a href="" className="bg-white text-black p-6 rounded-md hover:scale-105 transition duration-300 ease-out ">
          <div className="flex items-center pb-4 gap-4">
            <img src="/OmniGPT images/Group 13346.png" alt="" />
            <h2 className="font-medium">Chrome Extension </h2>
          </div>
          <p className="text-sm">
            Install the OmniGPT extension on your Chrome browser to access our
            AI right from your browser window.
          </p>
        </a>
        <a href="" className="bg-white text-black p-6 rounded-md hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center pb-4 gap-4">
            <img src="/OmniGPT images/LINE_logo 1.png" alt="" />
            <h2 className="font-medium">Line</h2>
          </div>
          <p className="text-sm">
            Connect OmniGPT with Line to start collaborating with your team and
            automate your workflow.
          </p>
        </a>
        <a href="" className="bg-white text-black p-6 rounded-md hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center pb-4 gap-4">
            <SiTrello className="text-blue-500" size="2em" />
            <h2 className="font-medium">Trello</h2>
          </div>
          <p className="text-sm">
            Automate your Trello boards with OmniGPT and manage your teams task
            more efficiently.
          </p>
        </a>

        <a href="" className="bg-white text-black p-6 rounded-md hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center pb-4 gap-4">
            <SiJira className="text-blue-500" size="2em" />
            <h2 className="font-medium">Jira</h2>
          </div>
          <p className="text-sm">
            Connect OmniGPT with Jira and automate your team's workflow to
            improve efficiency and productivity.
          </p>
        </a>
        <a href="" className="bg-white text-black p-6 rounded-md hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center pb-4 gap-4">
            <FcGoogle size="2em" />
            <h2 className="font-medium">Google Workspace</h2>
          </div>

          <p className="text-sm">
            Integrate OmniGPT with your Google Workspace account to streamline
            your workflow and enhance team collaboration.
          </p>
        </a>
        <a href="" className="bg-white text-black p-6 rounded-md hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center pb-4 gap-4">
            <SiNotion size="2em" />
            <h2 className="font-medium">Notion</h2>
          </div>

          <p className="text-sm">
            Integrate OmniGPT with Notion to automate your workflow and
            collaborate with your team more effectively.
          </p>
        </a>
        <a href="" className="bg-white text-black p-6 rounded-md hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center pb-4 gap-4">
            <SiGithub size="2em" />
            <h2 className="font-medium">GitHub</h2>
          </div>

          <p className="text-sm">
            Use OmniGPT to automate your GitHub workflow and streamline your
            team's development process.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Integrations;
