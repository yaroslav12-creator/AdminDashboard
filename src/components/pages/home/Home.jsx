import Chart from '../../chart/Chart';
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import {userData} from '../../../Data';
import './home.css';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';


export default function Home() {

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}