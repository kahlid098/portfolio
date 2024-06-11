import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Ourportfolio/Main.css";

import React from "react";
import All from "./All";
import Php from "./Php";
import Word from "./Word";
import Joom from "./Joom";
import Mag from "./Mag";
import Opencart from "./Opencart";
import Shopi from "./Shopi";
import Code from "./Code";
import AppMo from "./AppMo";

const MainPortfolio = () => {
  return (
    <>
      <div className="containert">
        <Tabs>
          <TabList>
            <Tab>
              ALL
              <span class="cbp-filter-counter">87</span>
            </Tab>
            <Tab>
              PHP
              <span class="cbp-filter-counter">15</span>
            </Tab>
            <Tab>
              Wordpress
              <span class="cbp-filter-counter">30</span>
            </Tab>
            <Tab>
              Joomla
              <span class="cbp-filter-counter">1</span>
            </Tab>
            <Tab>
              Magento
              <span class="cbp-filter-counter">25</span>
            </Tab>
            <Tab>
              Opencart
              <span class="cbp-filter-counter">2</span>
            </Tab>
            <Tab>
              Shopify
              <span class="cbp-filter-counter">6</span>
            </Tab>
            <Tab>
              Codeigniter
              <span class="cbp-filter-counter">6</span>
            </Tab>
            <Tab>
              Laravel
              <span class="cbp-filter-counter">0</span>
            </Tab>
            <Tab>
              Mobile App
              <span class="cbp-filter-counter">2</span>
            </Tab>
          </TabList>

          <TabPanel>
            <All />
          </TabPanel>
          <TabPanel>
            <Php />
          </TabPanel>
          <TabPanel>
            <Word />
          </TabPanel>
          <TabPanel>
            <Joom />
          </TabPanel>
          <TabPanel>
            <Mag/>
          </TabPanel>
          <TabPanel>
            <Opencart/>
          </TabPanel>
          <TabPanel>
            <Shopi/>
          </TabPanel>
          <TabPanel>
            <Code/>
          </TabPanel>
          <TabPanel>
            
          </TabPanel>
          <TabPanel>
            <AppMo/>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default MainPortfolio;
