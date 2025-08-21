import BodyTopComponent from "./components/BodyTop"
import BodyMidComponent from "./components/BodyMId"
import BodyMid2Component from "./components2/BodyMid2"
import BodyMid3Component from "./components2/BodyMid3"
import BodyFooter from "./components/BodyBottom"

export default function BodyPage(){


    return (
        <div className="min-h-screen flex flex-col ">
             <BodyTopComponent />
             <BodyMidComponent />
             <BodyMid2Component />
             <BodyMid3Component />
             <BodyFooter />
        </div>
    )
}