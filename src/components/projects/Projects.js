import React from 'react'
import Title from '../layouts/Title'
import { Pers,p2p,inv,insure,crypt, ra } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="Services"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Experience we have...."
          des="Services"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Robo-advisors"
          des=" Robo-advisors are apps or online platforms that optimally invest your money automatically, often for little cost, and are accessible to ordinary individuals."
          src={ra}
        />
        <ProjectsCard
          title="Investment apps"
          des=" Investment apps like Robinhood make it easy to buy and sell stocks, exchange-traded funds (ETFs), and cryptocurrency from your mobile device, often with little or no commission."
          src={inv}
        />
        <ProjectsCard
          title="Peer-to-peer (P2P)"
          des=" Peer-to-peer (P2P) lending platforms like Prosper Marketplace\ and small business owners to receive loans from an array of individuals who contribute microloans directly to them.
          "
          src={p2p}
        />
        <ProjectsCard
          title="Crypto apps"
          des=" Crypto apps, including wallets, exchanges, and payment applications, allow you to hold and transact in cryptocurrencies and digital tokens like Bitcoin and non-fungible tokens (NFTs).
          "
          src={crypt}
        />
        <ProjectsCard
          title="Insurtech"
          des=" Insurtech is the application of technology specifically to the insurance space. One example would be the use of devices that monitor your driving in order to adjust auto insurance rates.
          "
          src={insure}
        />
        <ProjectsCard
          title="Personal finance apps"
          des=" Personal finance apps such as Mint, YNAB, and Quicken Simplifi let you see all of your finances in one place, set budgets, pay bills, and so on.
          "
          src={Pers}
        />
      </div>
    </section>
  );
}

export default Projects