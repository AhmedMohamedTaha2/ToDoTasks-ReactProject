  import { useState } from "react";
  import Tab from "react-bootstrap/Tab";
  import Tabs from "react-bootstrap/Tabs";

  function TabsComponent({ handleSelectedTab }) {
    const [key, setKey] = useState("All");

    const handleSelect = (k) => {
      setKey(k);
      handleSelectedTab(k);
    };

    return (
      <Tabs
        activeKey={key}
        onSelect={handleSelect}
        transition={true}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="All" title="الكل">
          يتم عرض كل المهام
        </Tab>
        <Tab eventKey="Done" title="المنجزة">
          يتم عرض المهام المنجزة
        </Tab>
        <Tab eventKey="unDone" title="غير منجزة">
          يتم عرض المهام الغير المنجزة
        </Tab>
      </Tabs>
    );
  }

  export default TabsComponent;
