import React from "react";
import Attributes from '../container/AttributesContainer.jsx';
import PersonalData from '../container/PersonalData.jsx';
import Contacts from '../container/ContactContainer.jsx';
import Quality  from '../container/QualityContainer.jsx';
import Augmentation from '../container/AugmentationContainer.jsx'

const General = (props) => (
    <div className="PageContainer">
    <p>GENERAL</p>
    <Attributes/>
    <PersonalData/>
    <Contacts/>
    <Quality/>
    <Augmentation />
    </div>
);

export default General;