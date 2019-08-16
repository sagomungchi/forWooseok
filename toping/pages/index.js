import Navigator from '../components/Nav'
import AdForm from "../components/AdForm";
import MainList from "../components/MainList";

const index = () => {
    return (
        <Navigator>
            <AdForm></AdForm>
            <MainList/>
        </Navigator>

    )
}
export default index