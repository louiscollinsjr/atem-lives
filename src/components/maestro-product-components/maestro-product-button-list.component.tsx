import React from "react";
import BuildButtonList from "../build-button-list.component";

const MaestroProductButtonList: React.FC = () => {
    const buttonLabels = [
        'Nexthink',
        '1e Platform',
        'Poweshell',
        'Aternity',
        'Tanium',
        'Zappier',
        'Notion',
        'Nexthink',
        '1e Platform',
        'Poweshell',
        'Aternity',
        'Tanium',
        'Zappier',
        'Notion',
        'Pooper Scooper',
      ];
      return (
        <section className=''>
          <div className='w-screen flex flex-col items-center justify-center h-screen transition-all duration-800'>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-non.geist ~text-[6rem]/[14rem] font-medium tracking-tighter text-gray-900 items-center justify-center">
                Maestro
              </h1>
              <p className="~text-lg/2xl tracking-wide justify-center">
                Simplify Automation.
              </p>
            <div className="max-w-4xl flex pb-3 mt-12 items-center justify-center">
              <BuildButtonList buttons={buttonLabels} />
            </div>
            </div>
            <p className="justify-center pt-20">
            <a
              href="https://calendly.com/louiscollinsjr/atem-intro"
              className="bg-blue-500 hover:bg-blue-400 text-white text-xs px-3 py-1.5 rounded-full"
            >
              Schedule a call
            </a>
              </p>
          </div>
        </section>
      );
}

export default MaestroProductButtonList;